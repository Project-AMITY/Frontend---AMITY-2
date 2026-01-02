import React from 'react'
import Navbar from '../components/Navbar'
import OrgRegForm from '../components/OrgRegForm';
import Footer from '../components/Footer';

const OrgReg = () => {

    const MANAGE_HEADER_CONFIG = {
  icon: "edit_document",
  title: "Manage your events and opportunities",
  description: "Join our community of organisers to create meaningful experiences and connect with students across universities."
};

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-x-hidden antialiased selection:bg-primary selection:text-white">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 md:px-8 pt-20 pb-16">
                <div className="mb-10 text-center">
            {/* Icon Badge Container */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-blue-400/10 mb-6 border border-primary/20 shadow-lg shadow-primary/10">
                <span className="material-symbols-outlined text-4xl text-primary">
                {MANAGE_HEADER_CONFIG.icon}
                </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                {MANAGE_HEADER_CONFIG.title}
            </h1>

            {/* Subtext / Description */}
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
                {MANAGE_HEADER_CONFIG.description}
            </p>
            </div>
            <OrgRegForm />
      </div>
      <Footer />
    </div>
  )
}

export default OrgReg
