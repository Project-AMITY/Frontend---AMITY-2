import React from "react";
import { useState, useEffect } from "react";
import axios from "axios"; // Ensure axios is installed: npm install axios
import SavedEventsGrid from "./SavedEventsGrid";

const UserProfileContent = () => {
  // --- STATE MANAGEMENT ---
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("all");
  // --- CONFIGURATION ---
  const SAVED_EVENTS_TABS = [
    { id: "all", label: "All Favorites" },
    { id: "upcoming", label: "Upcoming" },
    { id: "past", label: "Past" },
  ];
  // --- API FETCHING ---
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        setLoading(true);
        // We use the token from localStorage that we set during login
        const token = localStorage.getItem('token');
        
        // Replace with your actual Spring Boot endpoint
        const response = await axios.get("http://localhost:8080/api/user/profile", {
          headers: { Authorization: `Bearer ${token}` }
        });

        setProfile(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching profile:", err);
        setError("Failed to load profile data.");
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  // --- FUTURE IMPLEMENTATIONS (PLACEHOLDERS) ---
  
  /* FUTURE FEATURE: Profile Image Upload
     Implementation: Create a function to handle file input change 
     and send a MultipartFile to a @PostMapping endpoint in Spring Boot.
  */
  const handleImageUpload = (e) => {
    console.log("Image upload feature to be implemented here.");
  };

  /* FUTURE FEATURE: Dynamic Stats Calculation
     Implementation: The backend should return a 'stats' object 
     calculated based on the user's event registration history.
  */

  if (loading) return <div className="pt-32 text-center text-white">Loading Profile...</div>;
  if (error) return <div className="pt-32 text-center text-red-500">{error}</div>;


  // const profile = {
  //   name: "Alex Rivera",
  //   major: "Computer Science '25",
  //   profileImage:
  //     "https://lh3.googleusercontent.com/aida-public/AB6AXuBbtr3AuCcCsdDem-FRMMoePthp5xTpN2NREr3x6iC-2fotishSWZB2dGHANzZFRBCw-S676BFpdgTcvmZ3K_4IK7uvyyWFqPHI6JmWK5JGplx5NKlLkllT79TbAI-sc6wNSetiIqjpfLNy_V2U9QP7b-JAcUlLTXkH3BOz_9I-tEqkr_jgsr6nDTqsM7h54l9k748cXG153Ar0prPLnkDmDwm312QO12wsMuSkEfweKpmFBBHVGQYgqo6TguWP5i-44P2ee0qe9_E",
  //   university: "Tech State University",
  //   location: "Austin, TX",
  //   email: "alex.rivera@edu.com",
  //   stats: [
  //     {
  //       label: "Events Attended",
  //       value: 14,
  //       color: "bg-primary",
  //       percentage: "70%",
  //     },
  //     {
  //       label: "Opportunities Applied",
  //       value: 8,
  //       color: "bg-purple-500",
  //       percentage: "45%",
  //     },
  //   ],
  // };
  // const SAVED_EVENTS_TABS = [
  //   { id: "all", label: "All Favorites" },
  //   { id: "upcoming", label: "Upcoming" },
  //   { id: "past", label: "Past" },
  // ];
  // const [activeTab, setActiveTab] = useState("all");

  // const SAVED_EVENTS_DATA = [
  //   {
  //     id: "hack-2024",
  //     title: "Hackathon 2024",
  //     category: "Tech",
  //     date: "Oct 12, 09:00 AM",
  //     location: "Student Union, Hall A",
  //     image:
  //       "https://lh3.googleusercontent.com/aida-public/AB6AXuBB_HoqpDGbezcFvYeEqc1PJGoiWInnrC0iwTVdBNb1-KmzzIsdEt8n_nYfddhP0FRRsfjuyALMUvPZ4fhvIMpP16ol8Ddkmi60a6VJBuaYPNl1W_voZyCzABZfHk1wpROwZR_-6vrYltipFXVBGh_3EMSdREHJqefuwsy1nDvqVdtHx2mMgRbItprVjaT4zVQ7-RPWlvxL43vkwZoVZz0pwWxjpDybPcPpeoMI-3mLALLFIc7d7C1JPVTJExlFdqi203N2X0YwzBU",
  //     isFavorite: true,
  //   },
  //   {
  //     id: "biz-summit",
  //     title: "Startup Summit",
  //     category: "Business",
  //     date: "Nov 05, 10:30 AM",
  //     location: "Main Auditorium",
  //     image: "http://googleusercontent.com/profile/picture/6",
  //     isFavorite: true,
  //   },
  //   {
  //     id: "design-workshop",
  //     title: "UI/UX Masterclass",
  //     category: "Design",
  //     date: "Dec 01, 02:00 PM",
  //     location: "Creative Studio",
  //     image: "http://googleusercontent.com/profile/picture/7",
  //     isFavorite: false,
  //   },
  // ];
  return (
    <div>
      <main className="flex-1 w-full max-w-[1280px] mx-auto px-4 pt-20 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/*Left Column - Profile Info */}
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
                   {/* Major can be added to DB later, using university for now */}
                   Student at {profile.university}
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

              {/* CTA Button
              <button className="mt-8 w-full bg-transparent border border-[#324467] hover:bg-[#324467] text-white font-bold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 group z-10">
                <span>View Public Profile</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button> */}

            </div>

            {/* Stats Card */}
            {/* <div className="hidden lg:flex flex-col bg-surface-dark rounded-xl p-6 border border-[#324467]">
              <h3 className="text-gray-400 font-bold mb-4 text-sm uppercase tracking-wider">
                Your Stats
              </h3>

              {profile.stats.map((stat, idx) => (
                <div key={idx} className="mb-4 last:mb-0">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400 text-sm">{stat.label}</span>
                    <span className="text-white font-bold">{stat.value}</span>
                  </div>
                  <div className="w-full bg-[#111722] rounded-full h-1.5">
                    <div
                      className={`${stat.color} h-1.5 rounded-full transition-all duration-1000`}
                      style={{ width: stat.percentage }}
                    />
                  </div>
                </div>
              ))}
            </div> */}

            {/* Right Column - Saved Events (Placeholder for now) */}
          {/* <div className="lg:col-span-8 xl:col-span-9 w-full flex flex-col gap-6">
            <div className="bg-surface-dark rounded-xl border border-[#324467] p-1 shadow-sm">
                <div className="flex justify-between items-center p-4">
                    <h2 className="text-white text-xl font-bold">Your Saved Events</h2>
                    <span className="text-xs text-gray-500">Feature Coming Soon</span>
                </div>
            </div>
          </div> */}

          </div>
          Right Column - Placeholder for Additional Content
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
            
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {SAVED_EVENTS_DATA.map((event) => (
                <div
                  key={event.id}
                  className="group relative flex flex-col bg-surface-dark rounded-xl overflow-hidden border border-[#324467] hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
                >
                  
                  <div
                    className="h-48 bg-cover bg-center relative"
                    style={{ backgroundImage: `url("${event.image}")` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-transparent to-transparent"></div>

                    
                    <button className="absolute top-3 right-3 text-white bg-black/40 hover:bg-black/60 p-2 rounded-full backdrop-blur-sm transition-colors border border-white/10 z-10">
                      <span
                        className={`material-symbols-outlined text-[20px] ${
                          event.isFavorite
                            ? "filled text-red-500"
                            : "text-white"
                        }`}
                      >
                        favorite
                      </span>
                    </button>

                    
                    <div className="absolute top-3 left-3">
                      <span className="bg-primary/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded border border-white/10">
                        {event.category}
                      </span>
                    </div>
                  </div>

                  
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

                    
                    <button className="w-full mt-3 py-2 rounded-lg bg-[#111722] text-sm font-semibold text-white hover:bg-primary hover:text-white transition-colors border border-[#324467] group-hover:border-primary">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div> */}
            
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserProfileContent;
