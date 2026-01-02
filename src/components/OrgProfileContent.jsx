import React from "react";
import { useState } from "react";
import OrganiserEvenrCard from "./OrganiserEvenrCard";
import { Link } from "react-router-dom";

const OrgProfileContent = () => {
  const ORGANISER_DATA = {
    name: "Sarah Jenkins",
    role: "President, Computer Science Club",
    profileImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBbtr3AuCcCsdDem-FRMMoePthp5xTpN2NREr3x6iC-2fotishSWZB2dGHANzZFRBCw-S676BFpdgTcvmZ3K_4IK7uvyyWFqPHI6JmWK5JGplx5NKlLkllT79TbAI-sc6wNSetiIqjpfLNy_V2U9QP7b-JAcUlLTXkH3BOz_9I-tEqkr_jgsr6nDTqsM7h54l9k748cXG153Ar0prPLnkDmDwm312QO12wsMuSkEfweKpmFBBHVGQYgqo6TguWP5i-44P2ee0qe9_E",
    university: "Tech State University",
    designation: "Student Organiser",
    email: "sarah.j@csclub.edu",
    impactStats: [
      {
        label: "Events Hosted",
        value: "12",
        color: "bg-primary",
        percentage: "80%",
      },
      {
        label: "Total Attendees",
        value: "450+",
        color: "bg-green-500",
        percentage: "65%",
      },
    ],
  };
  const ORGANISER_EVENT_TABS = [
    { id: "active", label: "Active" },
    { id: "drafts", label: "Drafts" },
    { id: "past", label: "Past" },
  ];
  const [activeTab, setActiveTab] = useState("active");

  const handleCreateEvent = () => {
    console.log("Navigating to event creation form...");
    // Logic for opening a modal or navigating to /create-event goes here
  };
  return (
    <div>
      <main className="flex-1 w-full max-w-[1280px] mx-auto px-4 pt-20 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/*Left Column - Profile Info */}
          <div className="lg:col-span-4 xl:col-span-3 w-full space-y-6">
            {/* Main Profile Card */}
            <div className="flex flex-col items-center bg-surface-dark rounded-xl p-8 border border-[#324467] shadow-xl relative overflow-hidden">
              {/* Decorative Header Gradient */}
              <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-primary/20 to-transparent"></div>

              {/* Profile Image & Edit Trigger */}
              <div className="relative z-10 mb-4 group">
                <div
                  className="bg-center bg-no-repeat bg-cover rounded-full h-32 w-32 border-4 border-[#111722] shadow-2xl"
                  style={{
                    backgroundImage: `url("${ORGANISER_DATA.profileImage}")`,
                  }}
                />
                <button className="absolute bottom-1 right-1 bg-primary hover:bg-primary/90 text-white rounded-full p-2 border-[3px] border-[#111722] shadow-sm transition-all hover:scale-110">
                  <span className="material-symbols-outlined text-[18px] leading-none">
                    edit
                  </span>
                </button>
              </div>

              {/* Identity Section */}
              <div className="text-center z-10">
                <h1 className="text-white text-2xl font-bold mb-1">
                  {ORGANISER_DATA.name}
                </h1>
                <p className="text-primary font-medium text-sm mb-6">
                  {ORGANISER_DATA.role}
                </p>
              </div>

              {/* Contact/Info List */}
              <div className="w-full flex flex-col gap-4 border-t border-[#324467] pt-6 z-10">
                {[
                  {
                    icon: "school",
                    label: "University",
                    value: ORGANISER_DATA.university,
                  },
                  {
                    icon: "badge",
                    label: "Designation",
                    value: ORGANISER_DATA.designation,
                  },
                  {
                    icon: "mail",
                    label: "Email",
                    value: ORGANISER_DATA.email,
                    isEmail: true,
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors"
                  >
                    <span className="material-symbols-outlined text-[20px] mt-0.5">
                      {item.icon}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-white">
                        {item.label}
                      </span>
                      <span
                        className={`text-sm ${item.isEmail ? "break-all" : ""}`}
                      >
                        {item.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Settings Button */}
              <button className="mt-8 w-full bg-transparent border border-[#324467] hover:bg-[#324467] text-white font-bold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 group z-10">
                <span>Edit Profile</span>
                <span className="material-symbols-outlined text-[18px] group-hover:rotate-45 transition-transform">
                  settings
                </span>
              </button>
            </div>

            {/* Impact/Stats Card */}
            <div className="hidden lg:flex flex-col bg-surface-dark rounded-xl p-6 border border-[#324467]">
              <h3 className="text-gray-400 font-bold mb-4 text-sm uppercase tracking-wider">
                Organiser Impact
              </h3>

              {ORGANISER_DATA.impactStats.map((stat, idx) => (
                <div key={idx} className="mb-4 last:mb-0">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400 text-sm">{stat.label}</span>
                    <span className="text-white font-bold">{stat.value}</span>
                  </div>
                  <div className="w-full bg-[#111722] rounded-full h-1.5">
                    <div
                      className={`${stat.color} h-1.5 rounded-full transition-all duration-700`}
                      style={{ width: stat.percentage }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/*Right Column - Placeholder for Future Content */}
          <div className="lg:col-span-8 xl:col-span-9 w-full flex flex-col gap-6">
            {/*Heading */}
            <div className="bg-surface-dark rounded-xl border border-[#324467] p-1 shadow-sm">
              {/* Top Section: Title & Create Button */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between px-4 pt-4 pb-2 sm:pb-4 gap-4">
                <div>
                  <h2 className="text-white text-xl font-bold pl-2">
                    Created Events
                  </h2>
                  <p className="text-gray-400 text-sm pl-2 mt-1">
                    Manage and track your organised events
                  </p>
                </div>

                <Link to="/organiser/create" >
                  <button
                    onClick={handleCreateEvent}
                    className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary hover:bg-primary/90 text-white font-bold shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-95 group"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      add_circle
                    </span>
                    <span>Create New Event</span>
                  </button>
                </Link>
              </div>

              {/* Tab Switcher */}
              <div className="flex gap-1 bg-[#111722] mx-4 mb-4 p-1 rounded-lg self-start sm:self-auto overflow-x-auto max-w-full w-auto inline-flex">
                {ORGANISER_EVENT_TABS.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`
                                            flex items-center gap-2 px-4 py-1.5 rounded-md text-sm transition-all duration-200 whitespace-nowrap
                                            ${
                                              isActive
                                                ? "bg-surface-dark text-white font-bold shadow-sm border border-[#324467]"
                                                : "text-[#92a4c9] hover:text-white hover:bg-white/5 font-medium border border-transparent"
                                            }
                                        `}
                    >
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
            {/*Heading Ends Here */}
            <OrganiserEvenrCard/>
          </div>
          {/*End of Right Column */}
        </div>
      </main>
    </div>
  );
};

export default OrgProfileContent;