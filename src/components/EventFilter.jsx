import React from 'react'

const EventFilter = () => {
    const FILTER_CONFIG = {
  categories: [
    { label: "All Categories", value: "" },
    { label: "Technology", value: "technology" },
    { label: "Sports", value: "sports" },
    { label: "Education", value: "education" },
    { label: "Wellbeing", value: "wellbeing" },
    { label: "Career Guidance", value: "career" },
  ],
  eventTypes: [
    { label: "Any Event Type", value: "" },
    { label: "Online Events", value: "online" },
    { label: "Physical Events", value: "physical" },
  ],
  university: [
    { label: "All Universities", value: "" },
    { label: "University A", value: "university-a" },
    { label: "University B", value: "university-b" },
    { label: "University C", value: "university-c" }, 
  ]
};
  return (
    <main className="flex-grow pt-5 pb-2">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-2">
            Explore Opportunities
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Find the best events, hackathons, and workshops happening across universities.
          </p>
        </div>

        <div className="bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-900 p-4 md:p-10 shadow-sm mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Keyword Search (remains static) */}
            <div className="relative col-span-1 md:col-span-2 lg:col-span-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-gray-400 text-[20px]">filter_list</span>
              </div>
              <input
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-surface-darker text-sm text-slate-900 dark:text-white focus:ring-primary focus:border-primary placeholder-gray-400 dark:placeholder-gray-500"
                placeholder="Filter by keyword..."
                type="text"
              />
            </div>

            {/* Reusable Select Mapping logic */}
            {[
              { key: 'categories', options: FILTER_CONFIG.categories },
              { key: 'eventTypes', options: FILTER_CONFIG.eventTypes },
              { key: 'university', options: FILTER_CONFIG.university },
            ].map((filter) => (
              <div key={filter.key} className="relative">
                <select className="w-full pl-4 pr-10 py-2.5 rounded-lg border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-surface-darker text-sm text-slate-900 dark:text-white focus:ring-primary focus:border-primary appearance-none cursor-pointer">
                  {filter.options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-gray-400 text-[20px]">expand_more</span>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </main>
  )
}

export default EventFilter