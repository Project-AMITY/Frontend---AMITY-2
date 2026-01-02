import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const EventData = () => {

  const navigate = useNavigate();
  
  const EVENTS_DATA = [
    {
      id: 1,
      title: "Inter-Uni Hackathon 2024",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAIVvrIJd82Fic1fEC4ayD8ftUEbV95JCCitj_0Dx5s135H6GDLjcr1dKjLRFmINSC-forPMmU1bsOA-tMWuz5ROI0yFXsuNN_ygOY-uFyI-gwDjCfK-Y6-HZSDQ4EWNVDfUWZ30uLb3fkcvfDq9PSQCu1xJ8l1DIdbPgiwaY7dAeEccTpEQlxFOKSniCTX_Zo2YWJUTY5qfz7P94z7g0JaNgc-d8Qdzc7ZRpsyhYn94nZGwVE2fhP_wASzPadqH8kBz6uKsIZndmA",
      category: "Technology",
      status: "Online",
      statusColor: "bg-green-500/90",
      date: "Oct 14, 2024 • 9:00 AM",
      organizer: "Tech Society",
      organizerIcon: "code",
      likes: 124,
    },
    {
      id: 2,
      title: "University Basketball Finals",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuASPNf_hfhMzix1v_-8dxR7h9lyhjsaD_hSdmRKgneL0RoxZTMuXsn4Ua8GYaDr5k6CAyUvsbRdeOqKD2q9OfEk0lzxZIj64J7QGoMsavcUU_2BUkLsgJ9XbyeixY6nVQN4rmz29tGkB3cmsiwUjzHcr13nHzydjQAyUMxw64GC-9aq92bxYZvqoF6WVy5coT94LmvqDWH8PzNTr9lYbDHlAaEVlj3515OpfdfiXpPa6xLadTAThcnkDC_0wk8x9XloeXM9TUtd_Og",
      category: "Sports",
      status: "Physical",
      statusColor: "bg-blue-500/90",
      date: "Oct 16, 2024 • 4:00 PM",
      organizer: "Sports Club",
      organizerIcon: "sports_basketball",
      likes: 89,
    },
    {
      id: 3,
      title: "Global Education Fair",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDG44ZkXrtlqv5LJsnnRi6yrhmf625xUfHzRFQ63zkHeMHndvYhPmUi6qORC2a6pAm8HQxUhbkUEFq1tGZ6blJtH9LrwL9FfPAl6vHoRGc4sEa8mpkrXTagTEyyCeked1H9GW9guO3MGzlh6MBKFADdMDtGujyxZdHFB2pR-iFkfJCQigYVFV9BxW9_Qr4UAB0u6qCKj82walFGkMXRLz9GlKCXIrfUGM7ZBbVVhjBnc-wi3IFWtf80qvotcaGlhPJMRw8BUi4-bLY",
      category: "Education",
      date: "Oct 22, 2024 • 10:00 AM",
      status: "Physical",
      locationIcon: "location_on",
      statusColor: "bg-blue-500/90",
      organizer: "Student Union",
      organizerIcon: "school",
      organizerBg: "bg-indigo-100 dark:bg-indigo-900",
      organizerIconColor: "text-indigo-600 dark:text-indigo-400",
      likes: "300",
      isLiked: true,
    },
    {
      id: 4,
      title: "Inter-Collegiate Music Fest",
      type: "gradient",
      gradientClass: "bg-gradient-to-br from-pink-500 to-purple-600",
      category: "Entertainment",
      date: "Oct 25, 2024 • 6:00 PM",
      status: "Physical",
      locationIcon: "location_on",
      statusColor: "bg-blue-500/90",
      organizer: "Music Club",
      organizerIcon: "music_note",
      organizerBg: "bg-pink-100 dark:bg-pink-900",
      organizerIconColor: "text-pink-600 dark:text-pink-400",
      likes: "500+",
      isLiked: true,
    },
    {
      id: 5,
      title: "Intro to AI & Machine Learning",
      type: "pattern",
      category: "Workshop",
      date: "Oct 28, 2024 • 3:00 PM",
      status: "Online",
      locationIcon: null,
      statusColor: "bg-green-500/90",
      organizer: "CS Dept",
      organizerIcon: "smart_toy",
      organizerBg: "bg-blue-100 dark:bg-blue-900",
      organizerIconColor: "text-blue-600 dark:text-blue-400",
      likes: "210",
      isLiked: false,
    },
    {
      id: 6,
      title: "Mountain Hiking Expedition",
      type: "gradient",
      gradientClass: "bg-gradient-to-tr from-yellow-400 to-orange-500",
      icon: "hiking",
      category: "Adventure",
      date: "Nov 02, 2024 • 7:00 AM",
      status: "Physical",
      locationIcon: "location_on",
      statusColor: "bg-blue-500/90",
      organizer: "Adventure Club",
      organizerIcon: "landscape",
      organizerBg: "bg-green-100 dark:bg-green-900",
      organizerIconColor: "text-green-600 dark:text-green-400",
      likes: "32",
      isLiked: false,
    },
    {
      id: 7,
      title: "University Drama & Theater Night",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuASPNf_hfhMzix1v_-8dxR7h9lyhjsaD_hSdmRKgneL0RoxZTMuXsn4Ua8GYaDr5k6CAyUvsbRdeOqKD2q9OfEk0lzxZIj64J7QGoMsavcUU_2BUkLsgJ9XbyeixY6nVQN4rmz29tGkB3cmsiwUjzHcr13nHzydjQAyUMxw64GC-9aq92bxYZvqoF6WVy5coT94LmvqDWH8PzNTr9lYbDHlAaEVlj3515OpfdfiXpPa6xLadTAThcnkDC_0wk8x9XloeXM9TUtd_Og5",
      category: "Arts",
      date: "Nov 05, 2024 • 7:00 PM",
      status: "Physical",
      locationIcon: "location_on",
      statusColor: "bg-blue-500/90",
      organizer: "Drama Society",
      organizerIcon: "theater_comedy",
      organizerBg: "bg-red-100 dark:bg-red-900",
      organizerIconColor: "text-red-600 dark:text-red-400",
      likes: "180",
      isLiked: false,
    },
    {
      id: 8,
      title: "Startup Pitch Competition",
      type: "gradient",
      gradientClass: "bg-gradient-to-br from-emerald-500 to-teal-700",
      icon: "lightbulb",
      category: "Business",
      date: "Nov 10, 2024 • 10:00 AM",
      status: "Physical",
      locationIcon: "location_on",
      statusColor: "bg-blue-500/90",
      organizer: "Entrepreneur Club",
      organizerIcon: "trending_up",
      organizerBg: "bg-emerald-100 dark:bg-emerald-900",
      organizerIconColor: "text-emerald-600 dark:text-emerald-400",
      likes: "420",
      isLiked: true,
    },
    {
      id: 9,
      title: "Astronomy & Stargazing Night",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuASPNf_hfhMzix1v_-8dxR7h9lyhjsaD_hSdmRKgneL0RoxZTMuXsn4Ua8GYaDr5k6CAyUvsbRdeOqKD2q9OfEk0lzxZIj64J7QGoMsavcUU_2BUkLsgJ9XbyeixY6nVQN4rmz29tGkB3cmsiwUjzHcr13nHzydjQAyUMxw64GC-9aq92bxYZvqoF6WVy5coT94LmvqDWH8PzNTr9lYbDHlAaEVlj3515OpfdfiXpPa6xLadTAThcnkDC_0wk8x9XloeXM9TUtd_Og6",
      category: "Science",
      date: "Nov 12, 2024 • 8:30 PM",
      status: "Physical",
      locationIcon: "location_on",
      statusColor: "bg-blue-500/90",
      organizer: "Physics Dept",
      organizerIcon: "auto_awesome",
      organizerBg: "bg-purple-100 dark:bg-purple-900",
      organizerIconColor: "text-purple-600 dark:text-purple-400",
      likes: "95",
      isLiked: false,
    },
    {
      id: 10,
      title: "Charity Marathon 2024",
      type: "pattern",
      category: "Social",
      date: "Nov 15, 2024 • 6:00 AM",
      status: "Physical",
      locationIcon: "location_on",
      statusColor: "bg-blue-500/90",
      organizer: "Volunteer Hub",
      organizerIcon: "volunteer_activism",
      organizerBg: "bg-rose-100 dark:bg-rose-900",
      organizerIconColor: "text-rose-600 dark:text-rose-400",
      likes: "1.2k",
      isLiked: true,
    },
    {
      id: 11,
      title: "Cyber Security Workshop: Ethic Hacking",
      type: "gradient",
      gradientClass: "bg-gradient-to-tr from-slate-800 to-slate-900",
      icon: "security",
      category: "Technology",
      date: "Nov 18, 2024 • 2:00 PM",
      status: "Online",
      locationIcon: null,
      statusColor: "bg-green-500/90",
      organizer: "CyberSec Unit",
      organizerIcon: "lock",
      organizerBg: "bg-slate-200 dark:bg-slate-700",
      organizerIconColor: "text-slate-800 dark:text-slate-200",
      likes: "340",
      isLiked: false,
    },
    {
      id: 12,
      title: "Sustainable Living & Green Expo",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuASPNf_hfhMzix1v_-8dxR7h9lyhjsaD_hSdmRKgneL0RoxZTMuXsn4Ua8GYaDr5k6CAyUvsbRdeOqKD2q9OfEk0lzxZIj64J7QGoMsavcUU_2BUkLsgJ9XbyeixY6nVQN4rmz29tGkB3cmsiwUjzHcr13nHzydjQAyUMxw64GC-9aq92bxYZvqoF6WVy5coT94LmvqDWH8PzNTr9lYbDHlAaEVlj3515OpfdfiXpPa6xLadTAThcnkDC_0wk8x9XloeXM9TUtd_Og7",
      category: "Education",
      date: "Nov 22, 2024 • 11:00 AM",
      status: "Physical",
      locationIcon: "location_on",
      statusColor: "bg-blue-500/90",
      organizer: "Eco Society",
      organizerIcon: "eco",
      organizerBg: "bg-green-100 dark:bg-green-900",
      organizerIconColor: "text-green-600 dark:text-green-400",
      likes: "155",
      isLiked: false,
    },
    // Add as many objects as you want here...
  ];
  return (
    <section className="py-5 bg-white dark:bg-surface-darker/50">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {EVENTS_DATA.map((event) => (
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

                  <div
                    className="flex items-center gap-1 text-xs font-medium text-gray-500 dark:text-gray-400"
                    title={`${event.likes} Interested`}
                  >
                    <span
                      className="material-symbols-outlined text-[16px] text-rose-500 fill-current"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      favorite
                    </span>
                    <span>{event.likes}</span>
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