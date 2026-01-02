import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SavedEventsGrid = () => {
  const [savedEvents, setSavedEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSavedEvents = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem('token');
        
        // This endpoint should return the list of events the user has favorited
        const response = await axios.get("http://localhost:8080/api/user/saved-events", {
          headers: { Authorization: `Bearer ${token}` }
        });

        setSavedEvents(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching saved events:", err);
        setLoading(false);
      }
    };

    fetchSavedEvents();
  }, []);

  if (loading) return <div className="text-center py-10 text-gray-400">Loading your favorites...</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {savedEvents.length > 0 ? (
        savedEvents.map((event) => (
          <div
            key={event.id}
            className="group relative flex flex-col bg-surface-dark rounded-xl overflow-hidden border border-[#324467] hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
          >
            {/* Image Header */}
            <div
              className="h-48 bg-cover bg-center relative"
              style={{ backgroundImage: `url("${event.image}")` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-transparent to-transparent"></div>

              {/* Favorite Button (Functional) */}
              <button className="absolute top-3 right-3 text-white bg-black/40 hover:bg-black/60 p-2 rounded-full backdrop-blur-sm transition-colors border border-white/10 z-10">
                <span className="material-symbols-outlined text-[20px] filled text-red-500">
                  favorite
                </span>
              </button>

              {/* Category Badge */}
              <div className="absolute top-3 left-3">
                <span className="bg-primary/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded border border-white/10">
                  {event.category}
                </span>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-5 flex flex-col gap-3 flex-1">
              <h3 className="text-white text-lg font-bold leading-snug group-hover:text-primary transition-colors">
                {event.title}
              </h3>

              <div className="space-y-2 mt-auto">
                <div className="flex items-center gap-2.5 text-gray-400 text-sm">
                  <span className="material-symbols-outlined text-[18px] text-primary">
                    calendar_month
                  </span>
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2.5 text-gray-400 text-sm">
                  <span className="material-symbols-outlined text-[18px] text-primary">
                    location_on
                  </span>
                  <span>{event.location}</span>
                </div>
              </div>

              {/* View Details Action */}
              <button 
                onClick={() => navigate(`/event/${event.id}`)}
                className="w-full mt-3 py-2 rounded-lg bg-[#111722] text-sm font-semibold text-white hover:bg-primary hover:text-white transition-colors border border-[#324467] group-hover:border-primary"
              >
                View Details
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="col-span-full text-center py-10 text-gray-500">
          No saved events found. Start exploring!
        </div>
      )}
    </div>
  );
};

export default SavedEventsGrid;