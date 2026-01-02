import React from 'react'

const OrganiserEvenrCard = () => {
    const ORGANISER_EVENTS = [
  {
    id: 1,
    title: "Hackathon 2024",
    status: "Active",
    date: "Oct 12, 09:00 AM",
    location: "Student Union, Hall A",
    registered: "142 Registered",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBB_HoqpDGbezcFvYeEqc1PJGoiWInnrC0iwTVdBNb1-KmzzIsdEt8n_nYfddhP0FRRsfjuyALMUvPZ4fhvIMpP16ol8Ddkmi60a6VJBuaYPNl1W_voZyCzABZfHk1wpROwZR_-6vrYltipFXVBGh_3EMSdREHJqefuwsy1nDvqVdtHx2mMgRbItprVjaT4zVQ7-RPWlvxL43vkwZoVZz0pwWxjpDybPcPpeoMI-3mLALLFIc7d7C1JPVTJExlFdqi203N2X0YwzBU",
  },
  {
    id: 2,
    title: "Resume Workshop",
    status: "Active",
    date: "Oct 15, 02:00 PM",
    location: "Career Center, Room 302",
    registered: "45 Registered",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCRYKhcwBXAqE_Kt_ZXnfvDr41_eF-9wTG3scscfKTSdbihbB1fJ32YhuzXQRof7kq9GXwbtagDi2r9y1hNAtSUjI2xlONi0s5fwKbm0zKMbo5Ag6PQyudeuyHDhzuGWaAxEgs8EgSooGPP7mInv18w3za2XALSpgAt4b0zFjzr-094HqJ9IkHDuCGz8U_VhVdJIZViIsn8X6MMupicsdUiiNm2tJDb5iNYFaYgBd9leOcsYXE9Zv8V5XbHzcs9kgZrRzX-DZmjTA",
  },
  {
    id: 3,
    title: "Campus Mixer",
    status: "Draft",
    date: "Oct 20, 06:00 PM",
    location: "Main Quad",
    registered: "--",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4ujDm4JoUjH24M7yzuIcGMlGm6vH1vZ0j1n0u1OE3Bx5Jn6xgLh-tYy-NSyytPKh6n4BO5oLx4l3dPSZzwMoei_AipI9-FE0tTEN3MGDs17GVDUDOLCv_a-4yqlQy2CLJPCJ6pp_sIPCmKuqbRFYD3pJrLW1ph1jPxWB9AtW8fO-ZKQqjxw2rapZyk2YdGITdKGlW_Iz6LlbWANJMstxvxZGe0EafyzDascc2QZCh8t0KbyrQvp8G3y8J0iq7L-TidBPESu-iocQ",
  }
];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
      {ORGANISER_EVENTS.map((event) => (
        <div key={event.id} className="group relative flex flex-col bg-surface-dark rounded-xl overflow-hidden border border-[#324467] hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
          
          {/* Image & Header Overlay */}
          <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: `url("${event.image}")` }}>
            <div className="absolute inset-0 bg-gradient-to-t from-[#111722]/90 via-transparent to-transparent"></div>
            
            {/* Action Overlay */}
            <div className="absolute top-3 right-3 flex gap-2">
              <button className="text-white bg-black/40 hover:bg-black/60 p-2 rounded-full backdrop-blur-sm transition-colors border border-white/10" title="Edit Event">
                <span className="material-symbols-outlined text-[18px]">edit</span>
              </button>
            </div>

            {/* Dynamic Status Badge */}
            <div className="absolute top-3 left-3">
              <span className={`backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded border border-white/10 ${
                event.status === 'Active' ? 'bg-green-500/90' : 'bg-gray-500/90'
              }`}>
                {event.status}
              </span>
            </div>
          </div>

          {/* Card Content */}
          <div className="p-5 flex flex-col gap-3 flex-1">
            <h3 className="text-white text-lg font-bold leading-snug group-hover:text-primary transition-colors">
              {event.title}
            </h3>

            <div className="space-y-2 mt-auto">
              <div className="flex items-center gap-2.5 text-gray-400 text-sm">
                <span className="material-symbols-outlined text-[18px] text-primary">calendar_month</span>
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2.5 text-gray-400 text-sm">
                <span className="material-symbols-outlined text-[18px] text-primary">location_on</span>
                <span className="truncate">{event.location}</span>
              </div>
              <div className="flex items-center gap-2.5 text-gray-400 text-sm">
                <span className="material-symbols-outlined text-[18px] text-primary">group</span>
                <span>{event.registered}</span>
              </div>
            </div>

            {/* Dynamic Conditional Buttons */}
            <div className="grid grid-cols-2 gap-2 mt-3">
              {event.status === "Active" ? (
                <>
                  <button className="w-full py-2 rounded-lg bg-[#111722] text-sm font-semibold text-white hover:bg-primary transition-colors border border-[#324467]">Manage</button>
                  <button className="w-full py-2 rounded-lg bg-[#111722] text-sm font-semibold text-white hover:bg-surface-dark border border-[#324467]">Stats</button>
                </>
              ) : (
                <>
                  <button className="w-full py-2 rounded-lg bg-primary text-sm font-semibold text-white hover:bg-primary/90 transition-colors border border-[#324467]">Publish</button>
                  <button className="w-full py-2 rounded-lg bg-[#111722] text-sm font-semibold text-white hover:bg-surface-dark border border-[#324467]">Edit</button>
                </>
              )}
            </div>
          </div>
          </div>
      ))}

      {/* Static "Create New Event" Placeholder */}
      <div className="group relative flex flex-col items-center justify-center bg-surface-dark/50 border-2 border-dashed border-[#324467] rounded-xl p-8 hover:border-primary/50 hover:bg-surface-dark transition-all cursor-pointer min-h-[300px]">
        <div className="size-16 rounded-full bg-[#111722] flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
          <span className="material-symbols-outlined text-4xl text-[#92a4c9] group-hover:text-primary">add</span>
        </div>
        <h3 className="text-white text-lg font-bold mb-2">Create New Event</h3>
        <p className="text-[#92a4c9] text-sm text-center">Start planning your next big campus event</p>
      </div>
    </div>
  )
}

export default OrganiserEvenrCard