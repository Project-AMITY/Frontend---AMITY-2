import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import NewEventForm from "../components/NewEventForm";

const CreateNewEvent = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-x-hidden antialiased selection:bg-primary selection:text-white">
      <Navbar/>
      <div className="flex-1 w-full max-w-[1024px] mx-auto px-4 sm:px-6 pt-20 lg:px-8 py-8">
        <div className="flex items-center gap-4 mb-8">
          {/* Back Button */}
          <Link
            to="/organiser/profile"
            className="flex items-center justify-center size-10 rounded-full bg-surface-dark border border-[#324467] hover:bg-[#324467] text-white transition-colors"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>

          {/* Title & Subtitle */}
          <div>
            <h1 className="text-3xl font-bold text-white">Create New Event</h1>
            <p className="text-gray-400 mt-1">
              Fill in the details below to publish your event
            </p>
          </div>
        </div>
        <NewEventForm/>
      </div>
    </div>
  );
};

export default CreateNewEvent;