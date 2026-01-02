import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:8080/api/auth/login", {
        email: formData.email,
        password: formData.password,
      });

      const { token, user } = response.data;

      // Store token and user info
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      console.log("Login successful:", user);

      // Redirect to dashboard
      navigate("/");
    } catch (err) {
      const message =
        err.response?.data?.message ||
        err.response?.data ||
        "Invalid email or password. Please try again.";
      setError(message);
      console.error("Login failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-[#111722] text-white pt-16">
      <Navbar/>

      {/* LEFT IMAGE SECTION */}
      <div className="hidden lg:flex w-1/2 relative">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuChC9Y0r6CFYfrbFiW2pNscPYKgv9hLeBRj6yG5k8sg8Da8_K_V5TYrRv4Br02diXmPCAdZUTluYC8rGONx7z4vl5RMo_mx3hGO5ogqoTgibQdH0319dHaqpCHi6nujzA5Vvzl8UkS9bj_uz3X-OIoDzatv53MhP8ZbA0bW81Yz0cFFKPMUaE4gWv5WGJjoIviKXafVkox80jvhXGQhFmu4ZyYt5_c1YFSize8BM8cJQFNHEEHnTw6buiUYMsVSyl-L0h5Q6lFUwOo"
          alt="Campus"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#111722] via-[#111722]/70 to-transparent" />

        <div className="relative z-10 p-16 flex flex-col justify-end">
          <h1 className="text-5xl font-bold leading-tight">
            Unlock Your <br /> Campus Network
          </h1>
          <p className="mt-4 text-slate-300 max-w-md">
            Connect with peers, discover events, and build your future today.
          </p>

          <div className="mt-6 flex items-center gap-3 text-sm text-slate-300">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-[#111722]" />
              <div className="w-8 h-8 rounded-full bg-slate-500 border-2 border-[#111722]" />
              <div className="w-8 h-8 rounded-full bg-slate-600 border-2 border-[#111722]" />
            </div>
            <span>+2k students joined this week</span>
          </div>
        </div>
      </div>

      {/* RIGHT FORM SECTION */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6">
        <div className="w-full max-w-md">
          <h2 className="text-4xl font-bold mb-2">Welcome Back</h2>
          <p className="text-slate-400 mb-8">
            Enter your credentials to access your account.
          </p>

          {error && (
            <div className="mb-6 p-4 bg-red-900/50 border border-red-700 rounded-lg text-red-200 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="text-sm text-slate-300">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="student@university.edu"
                required
                className="mt-2 w-full h-14 rounded-lg bg-[#192233] border border-[#324467] px-4 outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm text-slate-300">Password</label>
                <a href="#" className="text-sm text-blue-500 hover:underline">
                  Forgot Password?
                </a>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  className="w-full h-14 rounded-lg bg-[#192233] border border-[#324467] px-4 pr-12 outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full h-12 bg-blue-600 rounded-lg font-bold hover:bg-blue-700 transition disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Logging in...
                  </span>
                ) : (
                  "Log In"
                )}
              </button>
            </div>
          </form>

          <p className="mt-8 text-center text-slate-400 text-sm">
            New here?{" "}
            <Link to="/register" className="text-blue-500 font-semibold hover:underline">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;