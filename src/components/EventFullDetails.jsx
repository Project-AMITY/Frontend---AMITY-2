import React from "react";
import { useState, useEffect } from "react";
// Import axios if you are using it, or use fetch
import axios from "axios";

const EventFullDetail = ({ eventId }) => {

  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("about");
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const shareModalRef = React.useRef(null);

  useEffect(() => {
    // Function to fetch data from Spring Boot
    const fetchEventDetails = async () => {
      try {
        setLoading(true);
        // Replace with your actual Azure or Localhost API endpoint
        const response = await axios.get(`http://localhost:8080/api/event/${eventId}`);
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

  // Map API response to component expected structure
  const host = eventData.host || {
    name: eventData.organizer || "Event Organizer",
    isVerified: false,
    avatarIcon: "people"
  };

  const highlights = eventData.highlights || (eventData.highlight ? [eventData.highlight] : []);
  
  // Share feature download function
  const downloadShareImage = async () => {
    const canvas = shareModalRef.current.querySelector('.share-template');
    if (!canvas) return;

    const html2canvas = (await import('html2canvas')).default;
    try {
      const image = await html2canvas(canvas, {
        backgroundColor: '#ffffff',
        scale: 2,
        useCORS: true
      });
      
      const link = document.createElement('a');
      link.href = image.toDataURL('image/jpeg', 0.95);
      link.download = `${eventData.title.replace(/\s+/g, '-')}-share.jpg`;
      link.click();
    } catch (err) {
      console.error('Error downloading image:', err);
      alert('Error downloading image. Please try again.');
    }
  };

  const getEventPageUrl = () => {
    return `${window.location.origin}${window.location.pathname}?eventId=${eventId}`;
  };
  
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-x-hidden antialiased selection:bg-primary selection:text-white">
      <div className="max-w-[1280px] mx-auto px-1 md:px-4">
        {/* <div className="text-xs text-gray-400 mb-2">
           Event ID: {eventId} (Frontend Demo Mode)
        </div> */}
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
            src={eventData.image}
            alt={eventData.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          <div className="absolute bottom-10 left-10 text-white hidden md:block">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/90 text-white backdrop-blur-md text-sm font-bold mb-3">
              <span className="material-symbols-outlined text-[16px] mr-1.5">
                location_on
              </span>
              {eventData.eventType || "Physical Event"}
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
                  Category: {eventData.category || "N/A"}
                </span>
                {eventData.tags && eventData.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-lg bg-gray-50 dark:bg-surface-dark text-gray-600 dark:text-gray-400 text-sm font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {eventData.description || "No description available"}
              </p>

              {/* Host Card */}
              {host && (
              <div className="flex items-center justify-between p-5 rounded-2xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-800 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[28px] text-indigo-600 dark:text-indigo-400">
                      {host.avatarIcon}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                      Organized by
                    </p>
                    <h4 className="text-lg font-bold flex items-center gap-1">
                      {host.name}
                      {host.isVerified && (
                        <span className="material-symbols-outlined text-[18px] text-blue-500 ml-1">
                          verified
                        </span>
                      )}
                    </h4>
                  </div>
                </div>
                {/* <button className="px-4 py-2 text-sm font-semibold text-primary bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors">
                  View Profile
                </button> */}
              </div>
              )}
            </div>

            {/* Timeline Section */}
            {eventData.timeline && (
            <div className="mb-10 p-6 bg-white dark:bg-surface-dark rounded-2xl border border-gray-200 dark:border-gray-800">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">
                  timeline
                </span>{" "}
                Event Timeline
              </h3>
              {/* <div className="relative px-4">
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
              </div> */}
            </div>
            )}

            {/* Tabs Section */}
            <div className="mb-6 border-b border-gray-200 dark:border-gray-800">
              <div className="flex gap-8">
                {["about"].map((tab) => (
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
                  {/* <p class="mb-4">
                  The <strong>Global Education Fair 2024</strong> is the premier
                  event for students aspiring to pursue higher education abroad.
                  This year, we are bringing together over 50 universities from
                  the USA, UK, Canada, Australia, and Europe under one roof.
                </p> */}
                  <h4 className="font-bold text-lg mt-6 mb-3">Highlights:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    {highlights && highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
            )} 
              {/* Schedule Tab Content */}
              {/* {activeTab === 'schedule' && (
                <div className="animate-in fade-in duration-300">
                  <h4 className="text-slate-900 dark:text-white font-bold text-lg mt-6 mb-3">
                    Event Schedule
                  </h4>
                  <p className="mb-4">
                    Detailed schedule for the {eventData.title}.
                  </p>
                  
                  <ul className="list-none pl-0 space-y-4 mb-6">
                    {eventData.schedule && eventData.schedule.map((item, index) => (
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
              )} */}
              {/* Prizes & FAQ Tab Content */}
              {/* {activeTab === 'prizes' && (
                <div className="animate-in fade-in duration-300">
                  <h4 className="text-slate-900 dark:text-white font-bold text-lg mt-6 mb-3">
                    Prizes & FAQ
                  </h4>
                  <p className="mb-4">Information about prizes and frequently asked questions.</p>

                  
                  <div className="mb-8">
                    <h5 className="text-slate-900 dark:text-white font-bold text-base mt-6 mb-3 flex items-center gap-2">
                      <span className="material-symbols-outlined text-yellow-500">emoji_events</span>
                      Prizes:
                    </h5>
                    <ul className="list-disc pl-5 space-y-2 mb-6">
                      {eventData.prizes && eventData.prizes.map((prize, index) => (
                        <li key={index} className="text-gray-700 dark:text-gray-300">
                          {prize}
                        </li>
                      ))}
                    </ul>
                  </div>

                
                <div>
                  <h5 className="text-slate-900 dark:text-white font-bold text-base mt-6 mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">help</span>
                    FAQ:
                  </h5>
                  <div className="space-y-4">
                    {eventData.faqs && eventData.faqs.map((faq, index) => (
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
            )} */}
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
                      {eventData.fee}
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
                      <p className="text-sm font-bold">{eventData.eventDate}</p>
                      <p className="text-xs text-gray-500">{eventData.eventTime}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-gray-400">
                      location_on
                    </span>
                    <div>
                      <p className="text-sm font-bold">{eventData.university}</p>
                    </div>
                  </div>
                </div>

                <a 
                  href={eventData.contactlink || "#"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-primary hover:bg-primary-hover text-white rounded-xl font-bold shadow-lg shadow-primary/25 flex items-center justify-center gap-2 text-center no-underline"
                >
                  Register for Event
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </a>
                {/* Secondary Actions Row */}
                <div className="grid grid-cols-2 gap-3 pt-4 mt-4 border-t border-gray-200 dark:border-gray-800">
                  <button
                    className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-surface-darker transition-colors text-sm font-semibold text-gray-700 dark:text-gray-300"
                  >
                    <span className="material-symbols-outlined text-[18px]">favorite</span>
                    Save
                  </button>
                  <button
                    onClick={() => setShareModalOpen(true)}
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
                Contact the {host.name} for special accommodations or queries.
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

      {/* Share Modal */}
      {shareModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShareModalOpen(false)}>
          <div 
            className="bg-white dark:bg-surface-dark rounded-2xl shadow-2xl max-w-md w-full p-6" 
            onClick={(e) => e.stopPropagation()}
            ref={shareModalRef}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Share Event</h2>
              <button 
                onClick={() => setShareModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-2xl leading-none"
              >
                ×
              </button>
            </div>

            {/* Share Template */}
            <div className="share-template bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 rounded-xl p-6 mb-6 border border-primary/20">
              <img 
                src={eventData.image} 
                alt={eventData.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                {eventData.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {eventData.description || "Check out this amazing event!"}
              </p>
              <div className="bg-white dark:bg-surface-darker rounded-lg p-3 break-all text-xs text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700">
                {getEventPageUrl()}
              </div>
            </div>

            {/* Download Button */}
            <button
              onClick={downloadShareImage}
              className="w-full py-3 bg-primary hover:bg-primary-hover text-white rounded-lg font-bold mb-3 flex items-center justify-center gap-2 transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">download</span>
              Download as JPG
            </button>

            {/* Copy Link Button */}
            <button
              onClick={() => {
                navigator.clipboard.writeText(getEventPageUrl());
                alert('Event link copied to clipboard!');
              }}
              className="w-full py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg font-bold flex items-center justify-center gap-2 transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">content_copy</span>
              Copy Link
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventFullDetail;
