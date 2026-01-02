import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const HomepageEventCard = () => {
  const [latestEvents, setLatestEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Helper function for a safe data extraction
  const extractEventsArray = (rawData) => {
    if (Array.isArray(rawData)) return rawData;
    if (rawData?.content && Array.isArray(rawData.content)) return rawData.content;
    if (rawData?.events && Array.isArray(rawData.events)) return rawData.events;
    if (rawData?.data && Array.isArray(rawData.data)) return rawData.data; // Added common 'data' wrapper
    if (rawData && typeof rawData === "object" && Object.keys(rawData).length > 0 && (rawData.id || rawData.title)) {
      return [rawData]; // Single event object
    }
    return [];
  };

  useEffect(() => {
    const fetchLatestEvents = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get("http://localhost:8080/api/events");

        let eventsArray = extractEventsArray(response.data);

        if (eventsArray.length === 0) {
          setLatestEvents([]);
        } else {
          // Sort by ID (highest first) and take only the top 4
          const sorted = eventsArray
            .sort((a, b) => (b.id || 0) - (a.id || 0))
            .slice(0, 4);

          setLatestEvents(sorted);
        }

      } catch (err) {
        console.error("Error fetching latest events:", err);
        let message = "Failed to load events.";

        if (err.message.includes("sort is not a function")) {
             message = "Data Error: API returned an unexpected non-array format. Check console for 'Raw API Response'.";
        } else if (err.code === "ERR_NETWORK") {
             message = "Network Error: Cannot connect to backend server on port 8080.";
        }

        setError(message);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestEvents();
  }, []);

  if (loading) return <div className="py-20 text-center text-gray-600">Loading Latest Events...</div>;

  if (error) {
    return (
      <div className="py-20 text-center text-red-600">
        <p className="font-bold">⚠️ {error}</p>
        <p className="text-sm text-gray-500 mt-2">
            Please verify your backend connection and API response format.
        </p>
      </div>
    );
  }

  if (latestEvents.length === 0) {
    return (
        <div className="py-20 text-center text-gray-500">
            No recent events found.
        </div>
    )
  }

  return (
    <div>
      <section className="py-16 bg-white dark:bg-surface-darker/50">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">

          {/* Section Header */}
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                Upcoming Events
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Don't miss out on what's happening this week.
              </p>
            </div>
            <a className="inline-flex items-center text-primary font-semibold hover:underline gap-1" href="#" onClick={() => navigate('/events')}>
              View all events
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestEvents.map((event) => (
              <div
                key={event.id}
                onClick={() => navigate(`/events/${event.id}`)}
                className="group relative bg-gray-50 dark:bg-surface-dark rounded-xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-200 dark:border-gray-800 flex flex-col h-full cursor-pointer"
              >

                {/* Image Header with Img Tag and Error Handling */}
                <div className="aspect-video w-full bg-gray-300 relative overflow-hidden">
                    {event.image ? (
                        <img
                            alt={event.title || "Event"}
                            // Standard styling for image
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            src={event.image}
                            // *** FIX FOR BROKEN IMAGES ***
                            onError={(e) => {
                                // Once error, prevent infinite loop if placeholder also fails
                                e.target.onerror = null; 
                                // Set a placeholder image URL
                                e.target.src = "https://via.placeholder.com/600x400?text=Event+Image+Not+Found";
                                // Adjust styling for the placeholder
                                e.target.className = "w-full h-full object-contain p-4";
                            }}
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-500">
                            No Image URL Provided
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col">
                  <div className={`text-primary text-xs font-bold uppercase tracking-wider mb-2`}>
                    {event.category || "General"}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                    {event.title || "Untitled Event"}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm mb-4">
                    <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                    <span>{event.eventDate || event.date || "Date TBD"}</span>
                  </div>

                  {/* Footer / Join Action */}
                  <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700/50 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[16px] text-blue-600 dark:text-blue-400">
                        {event.organizerIcon || "group"}
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 truncate">
                      {event.organizer || "Unknown Organizer"}
                    </span>
                  </div>
                    <button
                        className="text-sm font-semibold text-primary hover:text-primary-hover"
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent card click event when clicking Join
                            navigate(`/events/${event.id}`);
                        }}
                    >
                      Join
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  )
}

export default HomepageEventCard;