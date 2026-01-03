import React from "react";
import { useState } from "react";

const NewEventForm = () => {
  const INITIAL_EVENT_DATA = {
    banner: null,
    title: "",
    shortDescription: "",
    type: "Workshop",
    category: "Technology",
    startDate: "",
    endDate: "",
    format: "physical", // or 'online'
    location: "",
    about: "",
    agenda: [
      { id: Date.now(), time: "09:00", title: "Registration & Welcome" },
    ],
  };

  const [formData, setFormData] = useState(INITIAL_EVENT_DATA);

  // Handle simple input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Agenda Logic: Add new session
  const addSession = () => {
    const newSession = { id: Date.now(), time: "12:00", title: "" };
    setFormData((prev) => ({ ...prev, agenda: [...prev.agenda, newSession] }));
  };

  // Agenda Logic: Update specific session
  const updateSession = (id, field, value) => {
    const updatedAgenda = formData.agenda.map((item) =>
      item.id === id ? { ...item, [field]: value } : item
    );
    setFormData((prev) => ({ ...prev, agenda: updatedAgenda }));
  };

  // Agenda Logic: Delete session
  const deleteSession = (id) => {
    setFormData((prev) => ({
      ...prev,
      agenda: prev.agenda.filter((item) => item.id !== id),
    }));
  };
  return (
    <div>
      <form className="space-y-8 pb-20" onSubmit={(e) => e.preventDefault()}>
        {/* SECTION: Event Banner */}
        <div className="bg-surface-dark rounded-xl p-8 border border-[#324467]">
          <h3 className="text-lg font-bold text-white mb-4">
            Event Banner Link
          </h3>

          <div className="space-y-4">
            {/* Input Field */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#92a4c9] group-focus-within:text-primary transition-colors">
                <span className="material-symbols-outlined text-[22px]">
                  link
                </span>
              </div>
              <input
                type="url"
                id="image" // Matches your backend 'image' key
                placeholder="https://example.com/your-image.jpg"
                className="block w-full pl-12 pr-4 py-4 bg-[#111722] border border-[#324467] rounded-xl text-white text-sm focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all outline-none"
                onChange={handleChange} // Reusing your existing handler
              />
            </div>

            {/* Helper Text & Red Alert */}
            <div className="flex flex-col gap-3">
              <p className="text-xs text-[#92a4c9] flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">
                  info
                </span>
                Paste a direct image URL (PNG, JPG, or GIF)
              </p>

              {/* The Red Styled Alert you requested */}
              <div className="text-center py-2">
                <span className="text-red-600 dark:text-red-500 font-bold text-sm">
                  Send us banner image URL to publish events.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION: Basic Information */}
        <div className="bg-surface-dark rounded-xl p-8 border border-[#324467] space-y-6">
          <h3 className="text-lg font-bold text-white mb-2 pb-4 border-b border-[#324467]">
            Basic Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-2">
              <label className="block text-sm font-medium text-white mb-2">
                Event Title
              </label>
              <input
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="block w-full rounded-lg border-0 bg-[#111722] py-2.5 px-4 text-white ring-1 ring-[#324467] focus:ring-2 focus:ring-primary outline-none"
                placeholder="e.g. Annual Tech Symposium 2024"
                type="text"
              />
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-medium text-white mb-2">
                Short Description
              </label>
              <textarea
                name="shortDescription"
                value={formData.shortDescription}
                onChange={handleChange}
                className="block w-full rounded-lg border-0 bg-[#111722] py-2.5 px-4 text-white ring-1 ring-[#324467] focus:ring-2 focus:ring-primary outline-none"
                placeholder="Brief summary for event cards"
                rows="2"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-white mb-2">
                Highlights
              </label>
              <input
                name="highlight"
                value={formData.highlight}
                onChange={handleChange}
                className="block w-full rounded-lg border-0 bg-[#111722] py-2.5 px-4 text-white ring-1 ring-[#324467] focus:ring-2 focus:ring-primary outline-none"
                placeholder="e.g. Annual Tech Symposium 2024"
                type="text"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-white mb-2">
                Organizer
              </label>
              <input
                name="organizer"
                value={formData.organizer}
                onChange={handleChange}
                className="block w-full rounded-lg border-0 bg-[#111722] py-2.5 px-4 text-white ring-1 ring-[#324467] focus:ring-2 focus:ring-primary outline-none"
                placeholder="e.g. Annual Tech Symposium 2024"
                type="text"
              />
              <div className="col-span-2 pt-4">
                <label className="block text-sm font-medium text-white mb-2">
                  Contact Us
                </label>
                <input
                  name="contactLink"
                  value={formData.title}
                  onChange={handleChange}
                  className="block w-full rounded-lg border-0 bg-[#111722] py-2.5 px-4 text-white ring-1 ring-[#324467] focus:ring-2 focus:ring-primary outline-none"
                  placeholder="Put your contact link"
                  type="text"
                />
              </div>
              <div className="col-span-2 pt-4">
                <label className="block text-sm font-medium text-white mb-2">
                  Entry Fee
                </label>
                <input
                  name="fee"
                  value={formData.title}
                  onChange={handleChange}
                  className="block w-full rounded-lg border-0 bg-[#111722] py-2.5 px-4 text-white ring-1 ring-[#324467] focus:ring-2 focus:ring-primary outline-none"
                  placeholder="RS."
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>

        {/* SECTION: Date & Location */}
        <div className="bg-surface-dark rounded-xl p-8 border border-[#324467] space-y-6">
          <h3 className="text-lg font-bold text-white mb-2 pb-4 border-b border-[#324467]">
            Date, Time & Location
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            <input
              type="datetime-local"
              name="startDate"
              onChange={handleChange}
              className="bg-[#111722] text-white p-2.5 rounded-lg border border-[#324467] [color-scheme:dark]"
            />
            <div className="col-span-2">
              <label className="block text-sm font-medium text-white mb-2">
                Event Status
              </label>
              <div className="relative">
                <select
                  name="highlight" // Changed to map directly to formData.highlight
                  value={formData.highlight}
                  onChange={handleChange}
                  className="block w-full rounded-lg border-0 bg-[#111722] py-2.5 px-4 text-white ring-1 ring-[#324467] focus:ring-2 focus:ring-primary outline-none appearance-none cursor-pointer"
                >
                  <option value="" disabled>
                    Select Status
                  </option>
                  <option value="ONLINE">ONLINE</option>
                  <option value="PHYSICAL">PHYSICAL</option>
                </select>

                {/* Custom Arrow Icon for the dropdown */}
                <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-400">
                  <span className="material-symbols-outlined text-[20px]">
                    expand_more
                  </span>
                </div>
              </div>
            </div>

            <div className="col-span-2">
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                  location_on
                </span>
                <input
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="block w-full rounded-lg bg-[#111722] py-2.5 pl-10 pr-4 text-white ring-1 ring-[#324467] focus:ring-2 focus:ring-primary outline-none"
                  placeholder="University"
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>

        {/* SECTION: Agenda (Dynamic) */}
        {/* <div className="bg-surface-dark rounded-xl p-8 border border-[#324467] space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-[#324467]">
          <h3 className="text-lg font-bold text-white">Schedule / Agenda</h3>
          <button 
            type="button" onClick={addSession}
            className="text-primary hover:text-primary/80 text-sm font-semibold flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-[18px]">add</span> Add Session
          </button>
        </div>
        
        <div className="space-y-4">
          {formData.agenda.map((session) => (
            <div key={session.id} className="flex flex-col sm:flex-row gap-4 items-start p-4 rounded-lg bg-[#111722] border border-[#324467]">
              <input 
                type="time" value={session.time} 
                onChange={(e) => updateSession(session.id, 'time', e.target.value)}
                className="bg-surface-dark text-white p-1.5 rounded border border-[#324467] [color-scheme:dark]" 
              />
              <input 
                type="text" value={session.title} placeholder="Session Title"
                onChange={(e) => updateSession(session.id, 'title', e.target.value)}
                className="flex-1 bg-surface-dark text-white p-1.5 rounded border border-[#324467] outline-none focus:ring-1 focus:ring-primary" 
              />
              <button 
                type="button" onClick={() => deleteSession(session.id)}
                className="p-1.5 text-gray-500 hover:text-red-400 transition-colors"
              >
                <span className="material-symbols-outlined">delete</span>
              </button>
            </div>
          ))}
        </div>
      </div> */}

        {/* Footer Buttons */}
        <div className="flex items-center justify-end gap-4 pt-6 border-t border-[#324467]">
          <button
            type="button"
            className="px-6 py-2.5 rounded-lg border border-[#324467] text-white hover:bg-[#324467]"
          >
            Save Draft
          </button>
          <button
            type="submit"
            className="px-8 py-2.5 rounded-lg bg-primary hover:bg-primary/90 text-white font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all"
          >
            Publish Event
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewEventForm;
