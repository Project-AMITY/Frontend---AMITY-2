import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Ensure axios is installed: npm install axios

const EventData = () => {

  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        // Replace with your actual API endpoint
        const response = await axios.get("http://localhost:8080/api/events");
        setEvents(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching events:", err);
        setError("Failed to load events.");
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <div className="text-center py-20">Loading events...</div>;
  if (error) return <div className="text-center py-20 text-red-500">{error}</div>;

  return (
    <section className="py-5 bg-white dark:bg-surface-darker/50">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {events.map((event) => (
            <article
              key={event.id}
              onClick={() => navigate(`/event/${event.id}`)}
              className="group relative bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
            >
              {/* Image Section */}
              <div className="aspect-[3/2] overflow-hidden relative">
                <img
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={event.image}
                />
                {/* Status Badge (Online/Physical) */}
                <div className="absolute top-3 right-3">
                  <span
                    className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold ${event.statusColor} text-white backdrop-blur-sm shadow-sm border border-white/20`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white mr-1.5 animate-pulse"></span>
                    {event.status}
                  </span>
                </div>
                {/* Category Badge */}
                <div className="absolute bottom-3 left-3">
                  <span className="px-2 py-1 bg-black/60 backdrop-blur-md rounded text-xs font-semibold text-white">
                    {event.category}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
                  <span className="material-symbols-outlined text-[16px]">
                    calendar_month
                  </span>
                  <span>{event.date}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-tight group-hover:text-primary transition-colors line-clamp-2">
                  {event.title}
                </h3>

                {/* Card Footer */}
                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700/50 flex items-center justify-between">
                  <div className="flex items-center gap-2 max-w-[65%]">
                    <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[14px] text-blue-600 dark:text-blue-400">
                        {event.organizerIcon}
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 truncate">
                      {event.organizer}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
      <button 
        className="flex items-center gap-2 rounded-lg border border-gray-300 px-6 py-3 font-semibold text-slate-900 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:text-white dark:hover:bg-surface-dark"
      >
        Load more events
        <span className="material-symbols-outlined text-[20px]">
          expand_more
        </span>
      </button>
    </div>
      </div>
    </section>
  );
};

export default EventData;