import React from "react";
import Navbar from "../components/Navbar";
import JoinOrganiser from "../components/JoinOrganiser";
import OrganiserCard from "../components/OrganiserCard";
import Footer from "../components/Footer";

const Organisers = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-x-hidden antialiased selection:bg-primary selection:text-white">      
        <Navbar />
        <JoinOrganiser />
        <OrganiserCard />
        <Footer />
    </div>
  );
};

export default Organisers;