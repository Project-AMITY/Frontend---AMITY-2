import React from "react";
import EventCards from "../Components/EventCards";
import EventFilter from "../Components/EventFilter";
import EventData from "../Components/EventData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Oppotunities = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-x-hidden antialiased selection:bg-primary selection:text-white">
      <Navbar/>
      <div className="pt-20">
        <EventFilter/>
      </div>
      <EventData/>
      <Footer/>
    </div>
  );
};

export default Oppotunities;