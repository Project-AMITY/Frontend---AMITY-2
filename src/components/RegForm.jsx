import React from 'react'
import { useState } from 'react';

const RegForm = () => {
    // 1. Unified State Object for Backend Delivery
    const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });
  // 2. Dynamic Change Handler
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // 3. Submit Handler for Backend API
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic Validation logic before sending
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Data ready for Backend:", formData);
    // Here you would use fetch() or axios.post('/api/register', formData)
  };
  return (
    <div>
      <div className="w-full max-w-[520px] space-y-8">
      {/* --- Mobile Only Header --- */}
      <div className="lg:hidden text-center mb-8">
        <h1 className="text-gray-900 dark:text-white text-3xl font-black tracking-tight mb-3">Create an account</h1>
        <p className="text-gray-600 dark:text-[#92a4c9] text-base">Join the centralised hub for inter-university opportunities.</p>
      </div>

      {/* --- Registration Form --- */}
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        
        {/* Row: First & Last Name */}
        <div className="flex flex-col sm:flex-row gap-5">
          <label className="flex flex-col flex-1 gap-2">
            <span className="text-gray-900 dark:text-white text-sm font-semibold">First name</span>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-[#92a4c9] pointer-events-none text-[20px]">person</span>
              <input 
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="form-input w-full rounded-lg border-gray-200 dark:border-[#324467] bg-white dark:bg-[#192233] text-gray-900 dark:text-white h-12 pl-11 pr-4 focus:ring-1 focus:ring-primary outline-none transition-all" 
                placeholder="Jane" 
                type="text" 
                required
              />
            </div>
          </label>
          <label className="flex flex-col flex-1 gap-2">
            <span className="text-gray-900 dark:text-white text-sm font-semibold">Last name</span>
            <input 
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="form-input w-full rounded-lg border-gray-200 dark:border-[#324467] bg-white dark:bg-[#192233] text-gray-900 dark:text-white h-12 px-4 focus:ring-1 focus:ring-primary outline-none transition-all" 
              placeholder="Doe" 
              type="text" 
              required
            />
          </label>
        </div>

        {/* Email Address */}
        <label className="flex flex-col gap-2">
          <span className="text-gray-900 dark:text-white text-sm font-semibold">Email address</span>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-[#92a4c9] pointer-events-none text-[20px]">mail</span>
            <input 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input w-full rounded-lg border-gray-200 dark:border-[#324467] bg-white dark:bg-[#192233] text-gray-900 dark:text-white h-12 pl-11 pr-4 focus:ring-1 focus:ring-primary outline-none transition-all" 
              placeholder="jane@university.edu" 
              type="email" 
              required
            />
          </div>
        </label>

        {/* Password */}
        <label className="flex flex-col gap-2">
          <span className="text-gray-900 dark:text-white text-sm font-semibold">Password</span>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-[#92a4c9] pointer-events-none text-[20px]">lock</span>
            <input 
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-input w-full rounded-lg border-gray-200 dark:border-[#324467] bg-white dark:bg-[#192233] text-gray-900 dark:text-white h-12 pl-11 pr-4 focus:ring-1 focus:ring-primary outline-none transition-all" 
              placeholder="Create a password" 
              type="password" 
              minLength="8"
              required
            />
          </div>
          <p className="text-xs text-gray-500 dark:text-[#64748b] mt-1">Must be at least 8 characters</p>
        </label>

        {/* Confirm Password */}
        <label className="flex flex-col gap-2">
          <span className="text-gray-900 dark:text-white text-sm font-semibold">Confirm password</span>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-[#92a4c9] pointer-events-none text-[20px]">lock_reset</span>
            <input 
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="form-input w-full rounded-lg border-gray-200 dark:border-[#324467] bg-white dark:bg-[#192233] text-gray-900 dark:text-white h-12 pl-11 pr-4 focus:ring-1 focus:ring-primary outline-none transition-all" 
              placeholder="Confirm your password" 
              type="password" 
              required
            />
          </div>
        </label>

        {/* Terms Checkbox */}
        <div className="flex items-start gap-3 mt-2">
          <div className="flex items-center h-5">
            <input 
              id="terms" 
              name="agreeToTerms"
              type="checkbox" 
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className="w-4 h-4 rounded border-gray-300 dark:border-[#324467] text-primary focus:ring-primary dark:bg-[#192233]" 
              required
            />
          </div>
          <label className="text-sm text-gray-600 dark:text-[#92a4c9]" htmlFor="terms">
            I agree to the <a className="text-primary hover:underline" href="#">Terms of Service</a> and <a className="text-primary hover:underline" href="#">Privacy Policy</a>.
          </label>
        </div>

        {/* Submit Button */}
        <button type="submit" className="mt-4 flex w-full cursor-pointer items-center justify-center rounded-lg h-12 bg-primary hover:bg-blue-600 text-white text-base font-bold transition-colors shadow-lg shadow-blue-900/20">
          Create Account
        </button>
      </form>

      <p className="text-center text-sm text-gray-500 dark:text-[#64748b] lg:hidden">
        Already have an account? <a className="text-primary font-bold hover:underline" href="#">Log in</a>
      </p>
    </div>
    </div>
  )
}

export default RegForm