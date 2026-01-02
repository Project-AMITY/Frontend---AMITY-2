import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const OrgRegForm = () => {
    const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    designation: '',
    university: '',
    email: '',
    nic: '',
    gender: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value, // Matches the 'id' attribute of the input to the key in formData
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Sending data to API:", formData);
    
    /* Example API Call:
    try {
      const response = await fetch('YOUR_API_URL/organisers/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      // handle success
    } catch (error) {
      // handle error
    }
    */
  };


  return (
    <div>
      <div className="bg-white dark:bg-surface-dark rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl overflow-hidden">
      <div className="p-8 md:p-10">
        <form className="space-y-6" onSubmit={handleSubmit}>
          
          {/* Row 1: Names */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700 dark:text-gray-300" htmlFor="firstName"> First Name </label>
              <input 
                id="firstName"
                type="text" 
                required
                value={formData.firstName}
                onChange={handleChange}
                placeholder="John"
                className="block w-full px-4 py-3 bg-gray-50 dark:bg-surface-darker border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all outline-none text-slate-900 dark:text-white"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700 dark:text-gray-300" htmlFor="lastName"> Last Name </label>
              <input 
                id="lastName"
                type="text" 
                required
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Doe"
                className="block w-full px-4 py-3 bg-gray-50 dark:bg-surface-darker border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all outline-none text-slate-900 dark:text-white"
              />
            </div>
          </div>

          {/* Row 2: Designation & University */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700 dark:text-gray-300" htmlFor="designation"> Designation </label>
              <input 
                id="designation"
                type="text"
                required
                value={formData.designation}
                onChange={handleChange}
                placeholder="e.g. Club President"
                className="block w-full px-4 py-3 bg-gray-50 dark:bg-surface-darker border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all outline-none text-slate-900 dark:text-white"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700 dark:text-gray-300" htmlFor="university"> University </label>
              <div className="relative">
                <select 
                  id="university"
                  required
                  value={formData.university}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 bg-gray-50 dark:bg-surface-darker border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary/50 appearance-none cursor-pointer text-slate-900 dark:text-white"
                >
                  <option value="" disabled>Select University</option>
                  <option value="uva">Uva Wellassa University</option>
                  <option value="colombo">University of Colombo</option>
                  <option value="kelaniya">University of Kelaniya</option>
                  <option value="moratuwa">University of Moratuwa</option>
                  <option value="nsbm">NSBM Green University</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                  <span className="material-symbols-outlined">expand_more</span>
                </div>
              </div>
            </div>
          </div>

          {/* Email Row */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700 dark:text-gray-300" htmlFor="email"> Email Address </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                <span className="material-symbols-outlined text-[20px]">mail</span>
              </div>
              <input 
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="block w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-surface-darker border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary/50 outline-none text-slate-900 dark:text-white"
              />
            </div>
          </div>

          {/* Row 3: NIC & Gender */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700 dark:text-gray-300" htmlFor="nic"> NIC </label>
              <input 
                id="nic"
                type="text"
                required
                value={formData.nic}
                onChange={handleChange}
                placeholder="National Identity Card No"
                className="block w-full px-4 py-3 bg-gray-50 dark:bg-surface-darker border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary/50 outline-none text-slate-900 dark:text-white"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700 dark:text-gray-300" htmlFor="gender"> Gender </label>
              <div className="relative">
                <select 
                  id="gender"
                  required
                  value={formData.gender}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 bg-gray-50 dark:bg-surface-darker border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary/50 appearance-none cursor-pointer text-slate-900 dark:text-white"
                >
                  <option value="" disabled>Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                  <span className="material-symbols-outlined">expand_more</span>
                </div>
              </div>
            </div>
          </div>

          {/* Phone Number Row */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700 dark:text-gray-300" htmlFor="phone"> Phone Number </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                <span className="material-symbols-outlined text-[20px]">call</span>
              </div>
              <input 
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+94 7X XXX XXXX"
                className="block w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-surface-darker border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary/50 outline-none text-slate-900 dark:text-white"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Link to="/organiser/profile">
            <button 
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary hover:bg-primary-hover text-white font-bold text-lg rounded-xl shadow-lg shadow-primary/25 transition-all hover:translate-y-[-2px] active:translate-y-[0px] focus:ring-4 focus:ring-primary/30 outline-none"
            >
              <span className="material-symbols-outlined">how_to_reg</span> 
              Join Now 
            </button>
            </Link>
          </div>

          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4"> 
            Already have an account? <a className="text-primary hover:text-primary-hover font-semibold transition-colors" href="#">Log in</a>
          </p>
        </form>
      </div>
      <div className="h-2 w-full bg-gradient-to-r from-blue-400 via-primary to-blue-600"></div>
    </div>
    </div>
  )
}

export default OrgRegForm