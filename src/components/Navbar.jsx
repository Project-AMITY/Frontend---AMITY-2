import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; // Import the decoder

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const checkAuth = () => {
    const token = localStorage.getItem('JWTtoken');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser(decoded); // Store decoded token (contains role, sub, etc.)
      } catch (error) {
        console.error("Invalid token:", error);
        handleLogout();
      }
    } else {
      setUser(null);
    }
  };

  useEffect(() => {
    checkAuth();
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/');
  };

  const navLinks = [
    { name: "Opportunities", to: "/opportunities" },
    { name: "Organisers", to: "/organisers" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-[#111722]/80 backdrop-blur-md">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-3">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          <Link className="flex items-center gap-3 group" to="/">
            <div className="size-8 bg-gradient-to-br from-primary to-blue-400 rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/20 transition-transform group-hover:scale-105">
              <span className="material-symbols-outlined text-[20px]">handshake</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Amity</span>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-md w-full px-2">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-gray-400">search</span>
              </div>
              <input 
                className="block w-full pl-10 pr-3 py-2 bg-gray-100 dark:bg-surface-dark border-transparent focus:border-primary focus:bg-white dark:focus:bg-surface-darker focus:ring-2 focus:ring-primary/50 rounded-lg text-sm transition-all duration-200" 
                placeholder="Search events..." 
                type="text"
              />
            </div>
          </div>

          <div className="flex items-center gap-4 md:gap-6 w-full md:w-auto justify-center md:justify-end">
            {navLinks.map((link, index) => (
              <Link 
                key={index}
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary transition-colors whitespace-nowrap" 
                to={link.to}
              >
                {link.name}
              </Link>
            ))}
            
            {/* JWT-BASED CONDITIONAL RENDERING */}
            {user ? (
              <div className="flex items-center gap-4 border-l border-gray-200 dark:border-gray-700 pl-4">
                <button className="text-gray-500 hover:text-primary transition-colors relative">
                  <span className="material-symbols-outlined">notifications</span>
                  <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full border border-white"></span>
                </button>
                
                {/* DYNAMIC PROFILE ROUTING */}
                <Link 
                  to={user.role === "ROLE_ORGANIZER" ? "/organiser/profile" : "/user/profile"} 
                  className="flex items-center gap-2 group"
                >
                  <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <span className="material-symbols-outlined text-[20px]">person</span>
                  </div>
                  <span className="hidden lg:block text-xs font-semibold text-gray-400">
                    {user.sub || "Profile"}
                  </span>
                </Link>

                <button 
                  onClick={handleLogout}
                  className="text-xs font-bold text-red-500 hover:text-red-600 uppercase tracking-tighter"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Link className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary transition-colors" to="/login">
                  Login
                </Link>
                <Link 
                  to="/register"
                  className="flex items-center justify-center px-4 py-2 bg-primary hover:bg-primary-hover text-white text-sm font-semibold rounded-lg shadow-lg shadow-primary/25 transition-all" 
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;