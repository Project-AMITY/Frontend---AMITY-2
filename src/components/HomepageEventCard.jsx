import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ScrollReveal from "./ScrollReveal";

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

        const response = await axios.get("http://localhost:8080/api/event");

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

  if (loading)
    return <div className="py-20 text-center">Loading Latest Events...</div>;
  return (
    <ScrollReveal>
      <div>
        <section className="py-16 bg-white dark:bg-surface-darker/50 fadeIn">
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
              <a
                className="inline-flex items-center text-primary font-semibold hover:underline gap-1"
                href="#"
              >
                View all events
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </a>
            </div>

            {/* Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {latestEvents.map((event) => (
                <div
                  key={event.id}
                  className="group relative bg-gray-50 dark:bg-surface-dark rounded-xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-200 dark:border-gray-800 flex flex-col h-full"
                >
                  {/* Image Header */}
                  <div
                    className="aspect-video w-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${event.image}')` }}
                  >
                    {/* <div className="absolute top-3 right-3 bg-white/90 dark:bg-black/80 backdrop-blur text-xs font-bold px-2 py-1 rounded text-slate-900 dark:text-white shadow-sm">
                  {event.price}
                </div> */}
                  </div>

                  {/* Content */}
                  <div className="p-5 flex-1 flex flex-col">
                    <div
                      className={`${event.categoryColor} text-xs font-bold uppercase tracking-wider mb-2`}
                    >
                      {event.category}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm mb-4">
                      <span className="material-symbols-outlined text-[16px]">
                        calendar_today
                      </span>
                      <span>{event.date}</span>
                    </div>

                    {/* Footer / Join Action */}
                    <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700/50 flex items-center justify-between">
                      {/* <div className="flex -space-x-2">
                    {event.attendees.map((avatar, index) => (
                      <img 
                        key={index}
                        alt="Attendee" 
                        className="w-6 h-6 rounded-full border-2 border-white dark:border-surface-dark" 
                        src={avatar} 
                      />
                    ))}
                    {event.extraAttendees && (
                      <span className="w-6 h-6 rounded-full border-2 border-white dark:border-surface-dark bg-gray-200 text-[10px] flex items-center justify-center text-gray-600">
                        +{event.extraAttendees}
                      </span>
                    )}
                  </div> */}
                      <button className="text-sm font-semibold text-primary hover:text-primary-hover">
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
    </ScrollReveal>
  );
};

export default HomepageEventCard;
