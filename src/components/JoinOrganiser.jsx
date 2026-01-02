import React from "react";
import { Link } from "react-router-dom";

const JoinOrganiser = () => {
  return (
    <div>
      <main className="flex-grow pt-20 pb-16">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white p-8 shadow-sm mb-12 dark:border-gray-800 dark:bg-surface-dark">
            {/* Background Decorative Icon */}
            <div className="pointer-events-none absolute top-0 right-0 p-8 opacity-5 dark:opacity-10">
              <span className="material-symbols-outlined text-[200px] text-primary">
                groups
              </span>
            </div>

            <div className="relative z-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div className="max-w-2xl">
                <h2 className="mb-3 text-2xl font-bold text-slate-900 dark:text-white">
                  Register as Organiser
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Lets build the community. Come join with us
                </p>
              </div>

              <div className="flex-shrink-0">
                <a
                  href="mailto:support@amity.edu?subject=Organiser%20Partnership%20Inquiry&body=Hello%20Amity%20Team%2C%0A%0AI%20am%20interested%20in%20connecting%20as%20an%20organiser."
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:translate-y-[-2px] hover:bg-primary-hover active:translate-y-[0px]"
                >
                  <span className="material-symbols-outlined">mail</span>
                  Connect with Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
              Registered Organisers
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Meet the leaders building communities across universities.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinOrganiser;
