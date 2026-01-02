import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Helper function to safely get the event date for sorting
const getEventDate = (event) => {
  // Use optional chaining for extra safety against null/undefined properties
  const dateStr = event?.eventDate || event?.date || event?.startDate;
  // Returns milliseconds or 0 if invalid
  return dateStr ? new Date(dateStr).getTime() : 0;
};

const EventCards = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get("http://localhost:8080/api/event");

        // *** CRITICAL DEBUGGING STEP ***
        console.log("Raw API Response Structure:", typeof response.data, response.data);
        // *******************************

        let eventsArray = [];
        const rawData = response.data;

        // 1. Is it a raw array? (Most desirable scenario)
        if (Array.isArray(rawData)) {
          eventsArray = rawData;
        } 
        // 2. Is it a Spring Boot Pageable object? ({ content: [...] })
        else if (rawData?.content && Array.isArray(rawData.content)) {
          eventsArray = rawData.content;
        } 
        // 3. Is it a custom wrapper object? ({ events: [...] })
        else if (rawData?.events && Array.isArray(rawData.events)) {
          eventsArray = rawData.events;
        } 
        // 4. Is it a single object that should be wrapped?
        else if (rawData && typeof rawData === "object" && Object.keys(rawData).length > 0) {
          // If the object looks like a single event, wrap it.
          if (rawData.id || rawData.title) {
             eventsArray = [rawData];
          } else {
             // If it's a non-standard object, we throw an error for inspection
             throw new Error("Received an object that is neither an array nor a recognizable wrapper.");
          }
        } 
        else {
          // 5. Catch null/undefined/empty response
          eventsArray = [];
        }
        // ------------------------------------------

        let sortedEvents = eventsArray;

        // Ensure we only call .sort() if it's an array with contents
        if (eventsArray.length > 0) {
            sortedEvents = eventsArray.sort((a, b) => {
                const dateA = getEventDate(a);
                const dateB = getEventDate(b);
                return dateB - dateA; // Sort descending (latest date first)
            });
        }

        setEvents(sortedEvents);
      } catch (err) {
        console.error("Error fetching events:", err);

        let message = "Failed to load events.";
        
        if (axios.isAxiosError(err)) {
            if (err.code === "ERR_NETWORK") {
                message = "Cannot connect to server. Is backend running on port 8080?";
            } else if (err.response?.status === 404) {
                message = "API endpoint not found (404).";
            }
        } 
        // This handles the TypeError you reported, even if it occurred deeper in the function
        else if (err instanceof TypeError || err.message.includes("sort is not a function")) {
            message = "Data structure error: The API returned an unprocessable format. Check console for 'Raw API Response Structure'.";
        }
        else if (err.message.includes("recognizable wrapper")) {
            message = `API Error: ${err.message}`;
        }

        setError(message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-20">
        <div className="inline-block animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-blue-600"></div>
        <p className="mt-4 text-gray-600">Loading events...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <p className="text-red-600 font-semibold text-lg">❌ Error fetching events: {error}</p>
        <p className="text-gray-500 mt-2">
          **Please check the Console (F12) for the 'Raw API Response Structure' log** to see what your backend is actually returning.
        </p>
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500">
        No events available at the moment.
      </div>
    );
  }

  return (
    <section className="py-5 bg-white dark:bg-surface-darker/50">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {events.map((event) => (
            <article
              key={event.id}
              onClick={() => navigate(`/events/${event.id}`)}
              className="group relative bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full cursor-pointer"
            >
              {/* Image Section */}
              <div className="aspect-[3/2] overflow-hidden relative bg-gray-200">
                {event.image ? (
                  <img
                    alt={event.title || "Event"}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={event.image}
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/600x400?text=No+Image";
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
                    No Image
                  </div>
                )}

                {/* Status Badge */}
                <div className="absolute top-3 right-3">
                  <span
                    className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold ${
                      (event.eventType || event.status || "").toLowerCase() === "online"
                        ? "bg-green-500/90"
                        : "bg-blue-500/90"
                    } text-white backdrop-blur-sm shadow-sm border border-white/20`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white mr-1.5 animate-pulse"></span>
                    {event.eventType || event.status || "Physical"}
                  </span>
                </div>

                {/* Category Badge */}
                <div className="absolute bottom-3 left-3">
                  <span className="px-2 py-1 bg-black/60 backdrop-blur-md rounded text-xs font-semibold text-white">
                    {event.category || "Event"}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
                  <span className="material-symbols-outlined text-[16px]">calendar_month</span>
                  {/* Display formatted date */}
                  <span>
                    {getEventDate(event) > 0 ? new Date(getEventDate(event)).toLocaleDateString() : "Date TBD"}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {event.title || "Untitled Event"}
                </h3>

                {/* Organizer Footer */}
                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700/50">
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
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-12 flex justify-center">
          <button className="flex items-center gap-2 rounded-lg border border-gray-300 px-6 py-3 font-semibold text-slate-900 hover:bg-gray-50 dark:border-gray-700 dark:text-white dark:hover:bg-surface-dark transition">
            Load more events
            <span className="material-symbols-outlined text-[20px]">expand_more</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventCards;