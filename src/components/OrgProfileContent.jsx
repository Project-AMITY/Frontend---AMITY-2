import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import OrganiserEvenrCard from "./OrganiserEvenrCard";

const OrgProfileContent = () => {
  // --- STATE MANAGEMENT ---
  const [organiser, setOrganiser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("active");

  const ORGANISER_EVENT_TABS = [
    { id: "active", label: "Active" },
    { id: "drafts", label: "Drafts" },
    { id: "past", label: "Past" },
  ];

  // --- API FETCHING ---
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        
        const token = localStorage.getItem('token');
        
        
        const response = await axios.get("http://localhost:8080/api/organisers/me", {
          headers: { Authorization: `Bearer ${token}` }
        });

        setOrganiser(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching organiser profile:", err);
        setError("Failed to load profile. Please log in again.");
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return <div className="text-center py-20 text-white">Loading Profile...</div>;
  if (error) return <div className="text-center py-20 text-red-500">{error}</div>;
  if (!organiser) return null;

  return (
    <div>
      <main className="flex-1 w-full max-w-[1280px] mx-auto px-4 pt-20 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column - Profile Info */}
          <div className="lg:col-span-4 xl:col-span-3 w-full space-y-6">
            <div className="flex flex-col items-center bg-surface-dark rounded-xl p-8 border border-[#324467] shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-primary/20 to-transparent"></div>

              {/* Profile Image - Using profileImage from DB or placeholder */}
              <div className="relative z-10 mb-4 group">
                <div
                  className="bg-center bg-no-repeat bg-cover rounded-full h-32 w-32 border-4 border-[#111722] shadow-2xl"
                  style={{
                    backgroundImage: `url("${organiser.profileImage || 'https://via.placeholder.com/150'}")`,
                  }}
                />
                <button className="absolute bottom-1 right-1 bg-primary hover:bg-primary/90 text-white rounded-full p-2 border-[3px] border-[#111722] shadow-sm transition-all">
                  <span className="material-symbols-outlined text-[18px] leading-none">edit</span>
                </button>
              </div>

              {/* Identity Section - Mapped from OrgRegForm fields */}
              <div className="text-center z-10">
                <h1 className="text-white text-2xl font-bold mb-1">
                  {organiser.firstName} {organiser.lastName}
                </h1>
                <p className="text-primary font-medium text-sm mb-6">
                  {organiser.designation}
                </p>
              </div>

              {/* Contact/Info List */}
              <div className="w-full flex flex-col gap-4 border-t border-[#324467] pt-6 z-10">
                <div className="flex items-start gap-3 text-gray-400">
                  <span className="material-symbols-outlined text-[20px] mt-0.5">school</span>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-white">University</span>
                    <span className="text-sm">{organiser.university}</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-gray-400">
                  <span className="material-symbols-outlined text-[20px] mt-0.5">badge</span>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-white">NIC</span>
                    <span className="text-sm">{organiser.nic}</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-gray-400">
                  <span className="material-symbols-outlined text-[20px] mt-0.5">mail</span>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-white">Email</span>
                    <span className="text-sm break-all">{organiser.email}</span>
                  </div>
                </div>
              </div>

              <button className="mt-8 w-full bg-transparent border border-[#324467] hover:bg-[#324467] text-white font-bold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 group z-10">
                <span>Edit Profile</span>
                <span className="material-symbols-outlined text-[18px] group-hover:rotate-45 transition-transform">settings</span>
              </button>
            </div>

            {/* Impact/Stats Card (Future Implementation) */}
            <div className="hidden lg:flex flex-col bg-surface-dark rounded-xl p-6 border border-[#324467]">
              <h3 className="text-gray-400 font-bold mb-4 text-sm uppercase tracking-wider">Organiser Impact</h3>
              <p className="text-xs text-gray-500 italic text-center">Stats will update based on your event attendance.</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-8 xl:col-span-9 w-full flex flex-col gap-6">
            <div className="bg-surface-dark rounded-xl border border-[#324467] p-1 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between px-4 pt-4 pb-2 sm:pb-4 gap-4">
                <div>
                  <h2 className="text-white text-xl font-bold pl-2">Created Events</h2>
                  <p className="text-gray-400 text-sm pl-2 mt-1">Manage and track your organised events</p>
                </div>
                <Link to="/organisers/create">
                  <button className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary hover:bg-primary/90 text-white font-bold shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-95 group">
                    <span className="material-symbols-outlined text-[20px]">add_circle</span>
                    <span>Create New Event</span>
                  </button>
                </Link>
              </div>

              {/* Tab Switcher */}
              <div className="flex gap-1 bg-[#111722] mx-4 mb-4 p-1 rounded-lg self-start sm:self-auto overflow-x-auto max-w-full w-auto inline-flex">
                {ORGANISER_EVENT_TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-1.5 rounded-md text-sm transition-all duration-200 whitespace-nowrap ${
                      activeTab === tab.id
                        ? "bg-surface-dark text-white font-bold shadow-sm border border-[#324467]"
                        : "text-[#92a4c9] hover:text-white hover:bg-white/5 font-medium border border-transparent"
                    }`}
                  >
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>
            <OrganiserEvenrCard />
          </div>
        </div>
      </main>
    </div>
  );
};

export default OrgProfileContent;