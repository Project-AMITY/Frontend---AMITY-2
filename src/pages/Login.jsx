import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    identifier: "", // email OR student ID
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  // Handle input change (OBJECT BASED)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // This object goes to backend
    console.log("Login Payload:", formData);

    /*
      Example API call:
      axios.post("/api/auth/login", formData)
    */
  };

  return (
    <div className="min-h-screen flex bg-[#111722] text-white pt-16">
      <Navbar />
      {/* LEFT IMAGE SECTION */}
      <div className="hidden lg:flex w-1/2 relative">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuChC9Y0r6CFYfrbFiW2pNscPYKgv9hLeBRj6yG5k8sg8Da8_K_V5TYrRv4Br02diXmPCAdZUTluYC8rGONx7z4vl5RMo_mx3hGO5ogqoTgibQdH0319dHaqpCHi6nujzA5Vvzl8UkS9bj_uz3X-OIoDzatv53MhP8ZbA0bW81Yz0cFFKPMUaE4gWv5WGJjoIviKXafVkox80jvhXGQhFmu4ZyYt5_c1YFSize8BM8cJQFNHEEHnTw6buiUYMsVSyl-L0h5Q6lFUwOo"
          alt="Campus"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111722] via-[#111722]/70 to-transparent" />

        {/* Content */}
        <div className="relative z-10 p-16 pb-80 flex flex-col justify-end">
          <h1 className="text-5xl font-bold leading-tight">
            Unlock Your <br /> Campus Network
          </h1>
          <p className="mt-4 text-slate-300 max-w-md">
            Connect with peers, discover events, and build your future today.
          </p>
        </div>
      </div>

      {/* RIGHT FORM SECTION */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6">
        <div className="w-full max-w-md">
          <h2 className="text-4xl font-bold mb-2">Welcome Back</h2>
          <p className="text-slate-400 mb-8">
            Enter your credentials to access your account.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email / Student ID */}
            <div>
              <label className="text-sm text-slate-300">
                Email or Student ID
              </label>
              <input
                type="text"
                name="identifier"
                value={formData.identifier}
                onChange={handleChange}
                placeholder="student@university.edu"
                className="mt-2 w-full h-14 rounded-lg bg-[#192233] border border-[#324467] px-4 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between items-center">
                <label className="text-sm text-slate-300">Password</label>
                <a href="#" className="text-sm text-blue-500">
                  Forgot Password?
                </a>
              </div>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="mt-2 w-full h-14 rounded-lg bg-[#192233] border border-[#324467] px-4 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Login Button */}
            <div className="pt-2">
              <Link to="/user/profile">
            <button
              type="submit"
              className="w-full h-12 bg-blue-600 rounded-lg font-bold hover:bg-blue-700 transition"
            >
              Log In
            </button>
            </Link>
            </div>
          </form>

          {/* Divider */}

          <p className="mt-6 text-center text-slate-400 text-sm">
            New here?{" "}
            <Link to="/register" className="text-blue-500 font-semibold">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;