import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom"; // Import Link for navigation
import SavedEventsGrid from "./SavedEventsGrid";

const UserProfileContent = () => {
    // --- STATE MANAGEMENT ---
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeTab, setActiveTab] = useState("all");
    
    const navigate = useNavigate(); // Initialize navigate hook

    // --- CONFIGURATION ---
    const SAVED_EVENTS_TABS = [
        { id: "all", label: "All Favorites" },
        { id: "upcoming", label: "Upcoming" },
        { id: "past", label: "Past" },
    ];
    
    // Authorization Check: Determines if the 'Create Event' button should be shown.
    // Updated logic: Only ADMIN or SUPER_ADMIN roles are allowed to create events.
    // The previous 'ORGANISER' role is now excluded (implicitly treated like a regular USER).
    const isEventCreator = profile && (
        profile.role === 'ADMIN' || 
        profile.role === 'SUPER_ADMIN'
    );


    // --- API FETCHING ---
    useEffect(() => {
        const fetchUserProfile = async () => {
            const token = localStorage.getItem('jwtToken'); // Correct key
            
            if (!token) {
                console.error("No JWT token found. Redirecting to login.");
                setError("Session expired or authentication required. Please log in.");
                setLoading(false);
                navigate("/login"); 
                return;
            }

            try {
                setLoading(true);

                // Assuming the backend returns the user profile WITH the role:
                // Example response.data: { id: 1, first_name: '...', role: 'ADMIN', ... }
                const response = await axios.get("http://localhost:8080/api/user/profile", {
                    headers: { 
                        Authorization: `Bearer ${token}` 
                    }
                });

                setProfile(response.data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching profile:", err);
                
                if (err.response?.status === 401 || err.response?.status === 403) {
                    setError("Unauthorized access or token expired. Please log in again.");
                    localStorage.removeItem('jwtToken'); 
                    localStorage.removeItem('user');
                    navigate("/login"); 
                } else {
                    setError("Failed to load profile data due to a server error.");
                }
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, [navigate]);

    // --- RENDER STATES ---
    if (loading) return <div className="pt-32 text-center text-white">Loading Profile...</div>;
    if (error && !profile) return <div className="pt-32 text-center text-red-500">{error}</div>;

    // Ensure profile exists before accessing its properties
    if (!profile) return null;


    return (
        <div>
            <main className="flex-1 w-full max-w-[1280px] mx-auto px-4 pt-20 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Left Column - Profile Info */}
                    <div className="lg:col-span-4 xl:col-span-3 w-full space-y-6">
                        
                        {/* Profile Card */}
                        <div className="flex flex-col items-center bg-surface-dark rounded-xl p-8 border border-[#324467] shadow-xl relative overflow-hidden">
                            {/* Background Decoration */}
                            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-primary/20 to-transparent"></div>

                            {/* Profile Image Section */}
                            <div className="relative z-10 mb-4 group">
                                <div
                                    className="bg-center bg-no-repeat bg-cover rounded-full h-32 w-32 border-4 border-[#111722] shadow-2xl"
                                    style={{
                                        backgroundImage: `url("${profile.profileImage || 'https://via.placeholder.com/150'}")`,
                                    }}
                                />
                                <button className="absolute bottom-1 right-1 bg-primary hover:bg-primary/90 text-white rounded-full p-2 border-[3px] border-[#111722] shadow-sm transition-all active:scale-90">
                                    <span className="material-symbols-outlined text-[18px] leading-none">
                                        edit
                                    </span>
                                </button>
                            </div>

                            {/* User Identity from DB */}
                            <div className="text-center z-10">
                                <h1 className="text-white text-2xl font-bold mb-1">
                                    {profile.first_name} {profile.last_name}
                                </h1>
                                <p className="text-primary font-medium text-sm mb-6">
                                    {/* Display role if it exists, otherwise default university info */}
                                    {profile.role ? (
                                        // Highlight the current role for visibility
                                        <span className="text-sm font-semibold uppercase tracking-wider">
                                            Role: {profile.role} 
                                        </span>
                                    ) : (
                                        `Student at ${profile.university}`
                                    )}
                                </p>
                            </div>

                            {/* Info List */}
                            <div className="w-full flex flex-col gap-4 border-t border-[#324467] pt-6 z-10">
                                <div className="flex items-start gap-3 text-gray-400">
                                    <span className="material-symbols-outlined text-[20px] mt-0.5">school</span>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium text-white">University</span>
                                        <span className="text-sm">{profile.university}</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 text-gray-400">
                                    <span className="material-symbols-outlined text-[20px] mt-0.5">mail</span>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium text-white">Email</span>
                                        <span className="text-sm break-all">{profile.email}</span>
                                    </div>
                                </div>
                            </div>

                            {/* CONDITIONAL: CREATE EVENT BUTTON (Only for ADMIN/SUPER_ADMIN) */}
                            {isEventCreator && (
                                <Link
                                    to="/organiser/create"
                                    className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 group z-10"
                                >
                                    <span className="material-symbols-outlined text-[18px]">
                                        add_box
                                    </span>
                                    <span>Create New Event</span>
                                </Link>
                            )}

                        </div>
                        
                    </div>

                    {/* Right Column - Saved Events Content */}
                    <div className="lg:col-span-8 xl:col-span-9 w-full flex flex-col gap-6">
                        
                        <div className="bg-surface-dark rounded-xl border border-[#324467] p-1 shadow-sm">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between px-4 pt-4 pb-2 sm:pb-4 gap-4">
                                
                                <h2 className="text-white text-xl font-bold pl-2">
                                    Your Saved Events
                                </h2>

                                <div className="flex gap-1 bg-[#111722] p-1 rounded-lg self-start sm:self-auto overflow-x-auto max-w-full no-scrollbar ">
                                    {SAVED_EVENTS_TABS.map((tab) => {
                                        const isActive = activeTab === tab.id;

                                        return (
                                            <button
                                                key={tab.id}
                                                onClick={() => setActiveTab(tab.id)}
                                                className={`
                                                    flex items-center gap-2 px-4 py-1.5 rounded-md text-sm transition-all duration-200 whitespace-nowrap
                                                    ${
                                                        isActive
                                                            ? "bg-primary text-white font-bold shadow-sm"
                                                            : "text-[#92a4c9] hover:text-white hover:bg-white/5 font-medium"
                                                    }
                                                `}
                                            >
                                                <span>{tab.label}</span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        <SavedEventsGrid/>
                        
                    </div>
                </div>
            </main>
        </div>
    );
};

export default UserProfileContent;