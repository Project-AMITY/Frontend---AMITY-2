import React from "react";
import { useState, useEffect } from "react";
// Import axios if you are using it, or use fetch
import axios from "axios";

const EventFullDetail = ({ eventId }) => {

  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("about");

  useEffect(() => {
    // Function to fetch data from Spring Boot
    const fetchEventDetails = async () => {
      try {
        setLoading(true);
        // Replace with your actual Azure or Localhost API endpoint
        const response = await axios.get(`http://localhost:8080/api/events/${eventId}`);
        setEventData(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching event details:", err);
        setError("Could not load event details. Please try again later.");
        setLoading(false);
      }
    };

    if (eventId) {
      fetchEventDetails();
    }
  }, [eventId]);

  // Loading State
  if (loading) return <div className="text-center py-20">Loading Event Details...</div>;
  
  // Error State
  if (error) return <div className="text-center py-20 text-red-500">{error}</div>;

  // Render nothing if no data found
  if (!eventData) return null;
  
  
  // const eventData = {
  //   id: 3,
  //   title: "Global Education Fair 2024",
  //   bannerImage:
  //     "https://lh3.googleusercontent.com/aida-public/AB6AXuDG44ZkXrtlqv5LJsnnRi6yrhmf625xUfHzRFQ63zkHeMHndvYhPmUi6qORC2a6pAm8HQxUhbkUEFq1tGZ6blJtH9LrwL9FfPAl6vHoRGc4sEa8mpkrXTagTEyyCeked1H9GW9guO3MGzlh6MBKFADdMDtGujyxZdHFB2pR-iFkfJCQigYVFV9BxW9_Qr4UAB0u6qCKj82walFGkMXRLz9GlKCXIrfUGM7ZBbVVhjBnc-wi3IFWtf80qvotcaGlhPJMRw8BUi4-bLY",
  //   category: "Education",
  //   tags: ["StudyAbroad", "University", "FutureLeaders"],
  //   description:
  //     "Unlock your potential and explore academic opportunities from around the globe. Meet representatives from top-tier universities, attend seminar sessions on scholarship programs, and get on-the-spot profile evaluations.",
  //   host: {
  //     name: "Student Union",
  //     isVerified: true,
  //     avatarIcon: "school",
  //   },
  //   timeline: [
  //     {
  //       step: 1,
  //       date: "Sep 15, 2024",
  //       label: "Registration Opens",
  //       active: true,
  //     },
  //     {
  //       step: 2,
  //       date: "Oct 20, 2024",
  //       label: "Registration Deadline",
  //       active: false,
  //     },
  //     {
  //       step: "flag",
  //       date: "Oct 22, 2024",
  //       label: "Event Day",
  //       active: false,
  //       isFinal: true,
  //     },
  //   ],
  //   pricing: "Free",
  //   date: "Tuesday, Oct 22, 2024",
  //   time: "10:00 AM - 5:00 PM",
  //   location: "University Main Hall",
  //   subLocation: "Building A, Campus Center",
  //   highlights: [
  //     "One-on-one interaction with university admissions officers.",
  //     "Exclusive scholarship opportunities worth over $1M available only to attendees.",
  //     "Visa guidance workshops conducted by immigration experts.",
  //     "Alumni networking lounge to connect with past graduates.",
  //   ],
  //   similarEvents: [
  //     {
  //       title: "Inter-Uni Hackathon 2024",
  //       date: "Oct 14, 2024",
  //       host: "Tech Society",
  //       type: "Online",
  //       likes: 124,
  //       img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIVvrIJd82Fic1fEC4ayD8ftUEbV95JCCitj_0Dx5s135H6GDLjcr1dKjLRFmINSC-forPMmU1bsOA-tMWuz5ROI0yFXsuNN_ygOY-uFyI-gwDjCfK-Y6-HZSDQ4EWNVDfUWZ30uLb3fkcvfDq9PSQCu1xJ8l1DIdbPgiwaY7dAeEccTpEQlxFOKSniCTX_Zo2YWJUTY5qfz7P94z7g0JaNgc-d8Qdzc7ZRpsyhYn94nZGwVE2fhP_wASzPadqH8kBz6uKsIZndmA",
  //     },
  //     {
  //       title: "Resume & LinkedIn Workshop",
  //       date: "Oct 16, 2024",
  //       host: "Career Center",
  //       type: "Physical",
  //       likes: 89,
  //       img: "https://lh3.googleusercontent.com/aida-public/AB6AXuASPNf_hfhMzix1v_-8dxR7h9lyhjsaD_hSdmRKgneL0RoxZTMuXsn4Ua8GYaDr5k6CAyUvsbRdeOqKD2q9OfEk0lzxZIj64J7QGoMsavcUU_2BUkLsgJ9XbyeixY6nVQN4rmz29tGkB3cmsiwUjzHcr13nHzydjQAyUMxw64GC-9aq92bxYZvqoF6WVy5coT94LmvqDWH8PzNTr9lYbDHlAaEVlj3515OpfdfiXpPa6xLadTAThcnkDC_0wk8x9XloeXM9TUtd_Og",
  //     },
  //   ],
  //   schedule: [
  //   { time: "10:00 AM - 11:00 AM", activity: "Opening Ceremony and Welcome" },
  //   { time: "11:00 AM - 1:00 PM", activity: "University Presentations" },
  //   { time: "1:00 PM - 2:00 PM", activity: "Lunch Break" },
  //   { time: "2:00 PM - 4:00 PM", activity: "Workshops and Seminars" },
  //   { time: "4:00 PM - 5:00 PM", activity: "Networking Session" }
  // ],
  // prizes: [
  //   "Full scholarships for top performers",
  //   "Cash prizes for winners",
  //   "Internship opportunities"
  // ],
  // faqs: [
  //   { 
  //     question: "How to register?", 
  //     answer: "Click the register button above." 
  //   },
  //   { 
  //     question: "Is there a fee?", 
  //     answer: "No, the event is free." 
  //   },
  //   { 
  //     question: "Who can attend?", 
  //     answer: "Students and parents." 
  //   }
  // ]
  // };
  // const [activeTab, setActiveTab] = useState("about");
  
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-x-hidden antialiased selection:bg-primary selection:text-white">
      <div className="max-w-[1280px] mx-auto px-1 md:px-4">
        <div className="text-xs text-gray-400 mb-2">
           Event ID: {eventId} (Frontend Demo Mode)
        </div>
        {/* Breadcrumbs */}
        <nav className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6 overflow-x-auto whitespace-nowrap">
          <a href="#" className="hover:text-primary transition-colors">
            Home
          </a>
          <span className="mx-2">/</span>
          <a href="#" className="hover:text-primary transition-colors">
            Opportunities
          </a>
          <span className="mx-2">/</span>
          <span className="text-slate-900 dark:text-white font-medium">
            {eventData.title}
          </span>
        </nav>

        {/* Hero Banner */}
        <div className="relative w-full aspect-[21/9] md:aspect-[21/8] lg:h-[450px] rounded-2xl overflow-hidden mb-8 shadow-xl border border-gray-200 dark:border-gray-800">
          <img
            src={eventData.bannerImage}
            alt={eventData.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          <div className="absolute bottom-10 left-10 text-white hidden md:block">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/90 text-white backdrop-blur-md text-sm font-bold mb-3">
              <span className="material-symbols-outlined text-[16px] mr-1.5">
                location_on
              </span>
              Physical Event
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              {eventData.title}
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
          {/* Left Column */}
          <div className="lg:col-span-8">
            {/* Metadata & Description */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="px-3 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 text-sm font-semibold border border-indigo-100 dark:border-indigo-800">
                  Category: {eventData.category}
                </span>
                {eventData.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-lg bg-gray-50 dark:bg-surface-dark text-gray-600 dark:text-gray-400 text-sm font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {eventData.description}
              </p>

              {/* Host Card */}
              <div className="flex items-center justify-between p-5 rounded-2xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-800 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[28px] text-indigo-600 dark:text-indigo-400">
                      {eventData.host.avatarIcon}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                      Hosted by
                    </p>
                    <h4 className="text-lg font-bold flex items-center gap-1">
                      {eventData.host.name}
                      {eventData.host.isVerified && (
                        <span className="material-symbols-outlined text-[18px] text-blue-500 ml-1">
                          verified
                        </span>
                      )}
                    </h4>
                  </div>
                </div>
                <button className="px-4 py-2 text-sm font-semibold text-primary bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors">
                  View Profile
                </button>
              </div>
            </div>

            {/* Timeline Section */}
            <div className="mb-10 p-6 bg-white dark:bg-surface-dark rounded-2xl border border-gray-200 dark:border-gray-800">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">
                  timeline
                </span>{" "}
                Event Timeline
              </h3>
              <div className="relative px-4">
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 dark:bg-gray-700 -translate-y-1/2 hidden md:block"></div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                  {eventData.timeline.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex md:flex-col items-center md:justify-center gap-4"
                    >
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs ring-4 ring-white dark:ring-surface-dark shadow-lg ${
                          item.active
                            ? "bg-primary text-white"
                            : "bg-surface-darker text-gray-400 border border-gray-600"
                        }`}
                      >
                        {item.step === "flag" ? (
                          <span className="material-symbols-outlined text-[20px]">
                            flag
                          </span>
                        ) : (
                          item.step
                        )}
                      </div>
                      <div className="md:text-center">
                        <div className="text-xs font-semibold text-gray-500 uppercase">
                          {item.date}
                        </div>
                        <div className="font-bold text-slate-900 dark:text-white">
                          {item.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tabs Section */}
            <div className="mb-6 border-b border-gray-200 dark:border-gray-800">
              <div className="flex gap-8">
                {["about", "schedule", "prizes"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-4 text-sm font-bold capitalize transition-all border-b-2 ${
                      activeTab === tab
                        ? "text-primary border-primary"
                        : "text-gray-500 border-transparent"
                    }`}
                  >
                    {tab === "about" ? "About Event" : tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="prose prose-slate dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
              {activeTab === "about" && (
                <div className="animate-in fade-in duration-300">
                  <p class="mb-4">
                  The <strong>Global Education Fair 2024</strong> is the premier
                  event for students aspiring to pursue higher education abroad.
                  This year, we are bringing together over 50 universities from
                  the USA, UK, Canada, Australia, and Europe under one roof.
                </p>
                  <h4 className="font-bold text-lg mt-6 mb-3">Highlights:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    {eventData.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              )}
              {/* Schedule Tab Content */}
              {activeTab === 'schedule' && (
                <div className="animate-in fade-in duration-300">
                  <h4 className="text-slate-900 dark:text-white font-bold text-lg mt-6 mb-3">
                    Event Schedule
                  </h4>
                  <p className="mb-4">
                    Detailed schedule for the {eventData.title}.
                  </p>
                  
                  <ul className="list-none pl-0 space-y-4 mb-6">
                    {eventData.schedule.map((item, index) => (
                      <li key={index} className="flex flex-col sm:flex-row sm:gap-4 pb-4 border-b border-gray-100 dark:border-gray-800 last:border-0">
                        <span className="text-primary font-bold whitespace-nowrap min-w-[160px]">
                          {item.time}
                        </span>
                        <span className="text-gray-700 dark:text-gray-300">
                          {item.activity}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {/* Prizes & FAQ Tab Content */}
              {activeTab === 'prizes' && (
                <div className="animate-in fade-in duration-300">
                  <h4 className="text-slate-900 dark:text-white font-bold text-lg mt-6 mb-3">
                    Prizes & FAQ
                  </h4>
                  <p className="mb-4">Information about prizes and frequently asked questions.</p>

                  {/* Prizes Section */}
                  <div className="mb-8">
                    <h5 className="text-slate-900 dark:text-white font-bold text-base mt-6 mb-3 flex items-center gap-2">
                      <span className="material-symbols-outlined text-yellow-500">emoji_events</span>
                      Prizes:
                    </h5>
                    <ul className="list-disc pl-5 space-y-2 mb-6">
                      {eventData.prizes.map((prize, index) => (
                        <li key={index} className="text-gray-700 dark:text-gray-300">
                          {prize}
                        </li>
                      ))}
                    </ul>
                  </div>

                {/* FAQ Section */}
                <div>
                  <h5 className="text-slate-900 dark:text-white font-bold text-base mt-6 mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">help</span>
                    FAQ:
                  </h5>
                  <div className="space-y-4">
                    {eventData.faqs.map((faq, index) => (
                      <div 
                        key={index} 
                        className="p-4 rounded-xl bg-gray-50 dark:bg-surface-darker border border-gray-100 dark:border-gray-800"
                      >
                        <p className="font-bold text-slate-900 dark:text-white mb-1">
                          {faq.question}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-800 shadow-lg p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Entry Fee
                    </p>
                    <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
                      {eventData.pricing}
                    </h2>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600">
                    <span className="material-symbols-outlined">
                      local_activity
                    </span>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-gray-400">
                      calendar_today
                    </span>
                    <div>
                      <p className="text-sm font-bold">{eventData.date}</p>
                      <p className="text-xs text-gray-500">{eventData.time}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-gray-400">
                      location_on
                    </span>
                    <div>
                      <p className="text-sm font-bold">{eventData.location}</p>
                      <p className="text-xs text-gray-500">
                        {eventData.subLocation}
                      </p>
                    </div>
                  </div>
                </div>

                <button className="w-full py-3.5 bg-primary hover:bg-primary-hover text-white rounded-xl font-bold shadow-lg shadow-primary/25 flex items-center justify-center gap-2">
                  Register for Event
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </button>
                {/* Secondary Actions Row */}
                <div className="grid grid-cols-2 gap-3 pt-4 mt-4 border-t border-gray-200 dark:border-gray-800">
                  <button
                    className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-surface-darker transition-colors text-sm font-semibold text-gray-700 dark:text-gray-300"
                  >
                    <span className="material-symbols-outlined text-[18px]">favorite</span>
                    Save
                  </button>
                  <button
                    className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-surface-darker transition-colors text-sm font-semibold text-gray-700 dark:text-gray-300"
                  >
                    <span className="material-symbols-outlined text-[18px]">share</span>
                    Share
                  </button>
                </div>
        
              </div>
            </div>
            {/* Help & Contact Box */}
            <div className="mt-4 bg-blue-50 dark:bg-blue-900/10 rounded-xl p-5 border border-blue-100 dark:border-blue-900/20">
              <p className="text-xs font-bold text-blue-800 dark:text-blue-300 mb-2 uppercase tracking-wider">
                Need help?
              </p>
              <p className="text-sm text-blue-900 dark:text-blue-200 mb-3 leading-relaxed">
                Contact the {eventData.host.name} for special accommodations or queries.
              </p>
              <a 
                href="mailto:support@university.edu" 
                className="text-sm font-semibold text-primary hover:underline flex items-center gap-1"
              >
                Contact Organizer
                <span className="material-symbols-outlined text-[16px]">north_east</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventFullDetail;