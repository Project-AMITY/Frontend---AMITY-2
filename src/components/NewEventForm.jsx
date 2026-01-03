import React from 'react'
import { useState } from 'react';

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
  ]
};

const [formData, setFormData] = useState(INITIAL_EVENT_DATA);

  // Handle simple input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Agenda Logic: Add new session
  const addSession = () => {
    const newSession = { id: Date.now(), time: "12:00", title: "" };
    setFormData(prev => ({ ...prev, agenda: [...prev.agenda, newSession] }));
  };

  // Agenda Logic: Update specific session
  const updateSession = (id, field, value) => {
    const updatedAgenda = formData.agenda.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    );
    setFormData(prev => ({ ...prev, agenda: updatedAgenda }));
  };

  // Agenda Logic: Delete session
  const deleteSession = (id) => {
    setFormData(prev => ({
      ...prev,
      agenda: prev.agenda.filter(item => item.id !== id)
    }));
  };
  return (
    <div>
      <form className="space-y-8 pb-20" onSubmit={(e) => e.preventDefault()}>
      
      {/* SECTION: Event Banner */}
      <div className="bg-surface-dark rounded-xl p-8 border border-[#324467]">
        <h3 className="text-lg font-bold text-white mb-4">Event Banner</h3>
        <div className="w-full flex justify-center rounded-xl border-2 border-dashed border-[#324467] px-6 py-10 hover:border-primary/50 hover:bg-[#111722]/50 transition-all cursor-pointer group relative">
          <div className="text-center">
            <div className="mx-auto h-12 w-12 text-[#92a4c9] group-hover:text-primary transition-colors flex items-center justify-center rounded-full bg-[#111722]">
              <span className="material-symbols-outlined text-2xl">image</span>
            </div>
            <div className="mt-4 flex text-sm leading-6 text-gray-400 justify-center">
              <label className="relative cursor-pointer rounded-md bg-transparent font-semibold text-primary hover:text-primary/80">
                <span>Upload a file</span>
                <input className="sr-only" type="file" />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs leading-5 text-[#92a4c9]">PNG, JPG, GIF up to 10MB</p>
          </div>
        </div>
      </div>

      {/* SECTION: Basic Information */}
      <div className="bg-surface-dark rounded-xl p-8 border border-[#324467] space-y-6">
        <h3 className="text-lg font-bold text-white mb-2 pb-4 border-b border-[#324467]">Basic Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-2">
            <label className="block text-sm font-medium text-white mb-2">Event Title</label>
            <input 
              name="title" value={formData.title} onChange={handleChange}
              className="block w-full rounded-lg border-0 bg-[#111722] py-2.5 px-4 text-white ring-1 ring-[#324467] focus:ring-2 focus:ring-primary outline-none" 
              placeholder="e.g. Annual Tech Symposium 2024" type="text" 
            />
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium text-white mb-2">Short Description</label>
            <textarea 
              name="shortDescription" value={formData.shortDescription} onChange={handleChange}
              className="block w-full rounded-lg border-0 bg-[#111722] py-2.5 px-4 text-white ring-1 ring-[#324467] focus:ring-2 focus:ring-primary outline-none" 
              placeholder="Brief summary for event cards" rows="2"
            />
          </div>
        </div>
      </div>

      {/* SECTION: Date & Location */}
      <div className="bg-surface-dark rounded-xl p-8 border border-[#324467] space-y-6">
        <h3 className="text-lg font-bold text-white mb-2 pb-4 border-b border-[#324467]">Date, Time & Location</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="datetime-local" name="startDate" onChange={handleChange} className="bg-[#111722] text-white p-2.5 rounded-lg border border-[#324467] [color-scheme:dark]" />
          <input type="datetime-local" name="endDate" onChange={handleChange} className="bg-[#111722] text-white p-2.5 rounded-lg border border-[#324467] [color-scheme:dark]" />
          
          <div className="col-span-2">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">location_on</span>
              <input 
                name="location" value={formData.location} onChange={handleChange}
                className="block w-full rounded-lg bg-[#111722] py-2.5 pl-10 pr-4 text-white ring-1 ring-[#324467] focus:ring-2 focus:ring-primary outline-none" 
                placeholder="e.g. Building 4, Lecture Hall A" type="text" 
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
        <button type="button" className="px-6 py-2.5 rounded-lg border border-[#324467] text-white hover:bg-[#324467]">Save Draft</button>
        <button type="submit" className="px-8 py-2.5 rounded-lg bg-primary hover:bg-primary/90 text-white font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all">Publish Event</button>
      </div>
    </form>
    </div>
  )
}

export default NewEventForm