import React from "react";
import { Link } from 'react-router-dom';
import ScrollReveal from "./ScrollReveal";

const HomepageHero = () => {
  const logos = [
  { 
    id: "A", 
    src: "https://res.cloudinary.com/dqr689650/image/upload/v1/assets/uni-1.png" 
  },
  { 
    id: "B", 
    src: "https://res.cloudinary.com/dqr689650/image/upload/v1/assets/uni-2.png" 
  },
  { 
    id: "C", 
    src: "https://res.cloudinary.com/dqr689650/image/upload/v1/assets/uni-3.png" 
  },
  { 
    id: "D", 
    src: "https://res.cloudinary.com/dqr689650/image/upload/v1/assets/uni-4.png" 
  },
  { 
    id: "E", 
    src: "https://res.cloudinary.com/dqr689650/image/upload/v1/assets/uni-5.png" 
  },
];
  return (
    <ScrollReveal>
    <header className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-32">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none -z-10 opacity-60"></div>

      <div className="max-w-[1280px] mx-auto px-4 md:px-8 text-center flex flex-col items-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-dark border border-gray-700 mb-6 animate-fade-in-up">
          <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-xs font-medium text-gray-300">
            New opportunities added today
          </span>
        </div>

        {/* Main Heading */}
        <ScrollReveal>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-4xl mb-6 leading-[1.1]">
            Your gateway to <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-primary to-purple-500">
              Inter-University Opportunities
            </span>
          </h1>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mb-10 leading-relaxed">
            Amity centralises events, workshops and opportunities across
            universities. Find your community, learn new skills, and connect — all
            in one place.
          </p>
        </ScrollReveal>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <Link to="/opportunities">
            <button className="h-12 px-8 rounded-lg bg-primary hover:bg-primary-hover text-white font-semibold shadow-lg shadow-primary/30 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
              Explore Opportunities
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </button>
          </Link>
        </div>
      </div>
      

      {/* University Logos Slider */}
      <div className="mt-20 w-full relative">
        <div className="overflow-hidden flex gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center justify-around w-full min-w-max animate-scroll gap-12 animate-scroll">
            {logos.map((logo) => (
              <img
                key={logo.id}
                alt={`University Logo ${logo.id}`}
                className="h-10 md:h-12 object-contain"
                src={logo.src}
              />
            ))}
            {/* Repeat logos if needed for infinite scroll effect */}
          </div>
          <div
            className="flex items-center justify-around w-full min-w-max animate-scroll gap-12 animate-scroll"
            aria-hidden="true"
          >
            {logos.map((logo) => (
              <img
                key={logo.id}
                alt={`University Logo ${logo.id}`}
                className="h-10 md:h-12 object-contain"
                src={logo.src}
              />
            ))}
          </div>
        </div>
        <p className="text-center text-sm text-gray-500 mt-6 font-medium">
          Trusted by leading universities worldwide
        </p>
      </div>
    </header>
    </ScrollReveal>
  );
};

export default HomepageHero;
