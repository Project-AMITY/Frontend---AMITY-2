import React from "react";

const RegHero = () => {
  const REGISTER_HERO_CONFIG = {
    image:"75jjPKmlQmJPJCIWlNjTh9fyL0_eSZiwUaiZICGjNSLLxyFj4UEJJgAWNZSHCFyFDeQfP8G2Dg4zOdiDbsYVUpE8BdxTPKG1zEXZHrvN2c619EmB3p77ZkSVmoXijZfg7bgg4uyFjC6E9SKiGqXFbmG0Xt9YoSkbyrnuRk9FL34V4aFzXSEv5_Z55G1EgCtTRSime3ehPc0FbQBIuXMeCFJogjTB3Wp7ayfwuhaQ_L",
    title: "Discover your next opportunity",
    description:
      "Join the centralised hub for inter-university opportunities. Connect with peers across the globe, share resources, and grow together.",
    features: [
      { icon: "public", label: "Global Network" },
      { icon: "event", label: "Exclusive Events" },
      { icon: "groups", label: "Peer Mentorship" },
      { icon: "rocket_launch", label: "Career Launchpad" },
    ],
  };
  return (
    <div className="ml-16">
      <div>
        {/* Background Image Layer with Overlay */}
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay">
          <img
            src={REGISTER_HERO_CONFIG.image}
            alt="University students collaborating"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#161e2e] to-primary/30 z-0" />

        {/* Content Container */}
        <div className="relative z-10 max-w-lg px-10 text-center lg:text-left">
          {/* Icon Badge */}
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/20 text-primary backdrop-blur-sm">
            <span className="material-symbols-outlined text-4xl">school</span>
          </div>

          {/* Heading */}
          <h1 className="text-white text-5xl font-black leading-tight tracking-[-0.033em] mb-6">
            {REGISTER_HERO_CONFIG.title}
          </h1>

          {/* Description */}
          <p className="text-[#92a4c9] text-xl font-normal leading-relaxed">
            {REGISTER_HERO_CONFIG.description}
          </p>

          {/* Feature Grid - Using .map() for cleaner code */}
          <div className="mt-12 grid grid-cols-2 gap-6">
            {REGISTER_HERO_CONFIG.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">
                  {feature.icon}
                </span>
                <span className="text-white font-medium">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegHero;
