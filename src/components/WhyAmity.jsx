import React from "react";
import ScrollReveal from "./ScrollReveal";

const WhyAmity = () => {
  const features = [
    {
      title: "Real-time Updates",
      icon: "update",
      description:
        "Stay in the loop with instant notifications for new events and schedule changes. Never miss an opportunity again.",
    },
    {
      title: "Verified Opportunities",
      icon: "verified_user",
      description:
        "Every event and workshop is vetted by our team to ensure quality, safety, and relevance for university students.",
    },
    {
      title: "Cross Campus Networking",
      icon: "hub",
      description:
        "Connect with peers from other universities. Build your network beyond your campus walls and collaborate on projects.",
    },
  ];
  return (
    <div>
      <section className="py-20 bg-surface-darker/5 dark:bg-surface-darker relative overflow-hidden">
        {/* Abstract Decoration */}
        <div className="absolute -right-20 top-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-[1280px] mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <ScrollReveal>
              <span className="text-primary font-bold text-sm tracking-wide uppercase mb-2 block">
                Why Choose Amity?
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                We bridge the gap between universities
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Bringing opportunities directly to you. No more endless
                searching on different university websites.
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-surface-dark p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col items-center text-center transition-all hover:shadow-md"
                >
                  <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <span className="material-symbols-outlined text-[32px]">
                      {feature.icon}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default WhyAmity;
