import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegHero from '../components/RegHero';
import Navbar from '../components/Navbar';
import axios from 'axios';

const RegForm = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    university: '',
    email: '',
    password: '',
    confirmPassword: '',
    subscribed: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    try {
      // Prepare payload matching your User entity
      const payload = {
        first_name: formData.first_name,
        last_name: formData.last_name,
        university: formData.university,
        email: formData.email,
        password: formData.password,
        subscribed: formData.subscribed,
        // role will default to USER on backend
      };

      await axios.post('http://localhost:8080/api/auth/register', payload);

      setSuccess(true);
      setTimeout(() => {
        navigate('/login'); // Redirect to login after success
      }, 2000);
    } catch (err) {
      const message =
        err.response?.data ||
        err.response?.data?.message ||
        "Registration failed. Please try again.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-x-hidden antialiased">
      <Navbar />

      <div className="flex-1 flex flex-col lg:flex-row h-full">
        {/* Left Hero Section */}
        <div className="hidden lg:flex lg:w-1/2 relative bg-[#192233] items-center justify-center overflow-hidden">
          <RegHero />
        </div>

        {/* Right Form Section */}
        <div className="flex-1 flex flex-col justify-center items-center p-8 sm:p-16 lg:p-16 lg:pt-24 bg-background-light dark:bg-background-dark">
          <div className="w-full max-w-md">
            <h2 className="text-4xl font-bold mb-2 text-center">Create Account</h2>
            <p className="text-slate-500 dark:text-slate-400 text-center mb-8">
              Join your university community today
            </p>

            {error && (
              <div className="mb-6 p-4 bg-red-900/30 border border-red-700 rounded-lg text-red-200 text-sm text-center">
                {error}
              </div>
            )}

            {success && (
              <div className="mb-6 p-4 bg-green-900/30 border border-green-700 rounded-lg text-green-200 text-sm text-center">
                Registration successful! Redirecting to login...
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className='flex flex-row justify-between'>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  required
                  className="w-full h-14 px-4 rounded-lg bg-[#192233] dark:bg-[#111722] border border-[#324467] focus:ring-2 focus:ring-blue-500 outline-none transition"
                  placeholder="John"
                />
              </div>
              {/* Test Last Name */}
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  required
                  className="w-full h-14 px-4 rounded-lg bg-[#192233] dark:bg-[#111722] border border-[#324467] focus:ring-2 focus:ring-blue-500 outline-none transition"
                  placeholder="Doe"
                />
              </div>
              </div>

              {/* Test University */}
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  University Name
                </label>
                <input
                  type="text"
                  name="university"
                  value={formData.university}
                  onChange={handleChange}
                  required
                  className="w-full h-14 px-4 rounded-lg bg-[#192233] dark:bg-[#111722] border border-[#324467] focus:ring-2 focus:ring-blue-500 outline-none transition"
                  placeholder="University Name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full h-14 px-4 rounded-lg bg-[#192233] dark:bg-[#111722] border border-[#324467] focus:ring-2 focus:ring-blue-500 outline-none transition"
                  placeholder="student@university.edu"
                />
              </div>

              {/* Password */}
              <div className='flex flex-row justify-between'>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full h-14 px-4 rounded-lg bg-[#192233] dark:bg-[#111722] border border-[#324467] focus:ring-2 focus:ring-blue-500 outline-none transition"
                  placeholder="••••••••"
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full h-14 px-4 rounded-lg bg-[#192233] dark:bg-[#111722] border border-[#324467] focus:ring-2 focus:ring-blue-500 outline-none transition"
                  placeholder="••••••••"
                />
              </div>
              </div>

             {/* test add subscribe or not */}    {/* add corect subscribe tick and description */}
              {/* <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Subscribe
                </label>
                <input
                  type="boolean"
                  name="subscribed"
                  value={formData.subscribed}
                  onChange={handleChange}
                  required
                  className="w-full h-14 px-4 rounded-lg bg-[#192233] dark:bg-[#111722] border border-[#324467] focus:ring-2 focus:ring-blue-500 outline-none transition"
                  placeholder="true or false"
                />
              </div> */}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full h-14 bg-blue-600 hover:bg-blue-700 disabled:opacity-70 disabled:cursor-not-allowed rounded-lg font-bold text-white transition flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Creating Account...
                  </>
                ) : (
                  "Register"
                )}
              </button>
            </form>

            <p className="mt-8 text-center text-slate-500 dark:text-slate-400 text-sm">
              Already have an account?{' '}
              <Link to="/login" className="text-blue-500 font-semibold hover:underline">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegForm;