import React from "react";
import UserProfileContent from "../components/UserProfileContent";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const UserProfile = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-x-hidden antialiased selection:bg-primary selection:text-white">
        <Navbar/>
      <UserProfileContent/>
      <Footer/>
    </div>
  );
};

export default UserProfile;