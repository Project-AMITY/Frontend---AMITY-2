import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// --- Helper function to retrieve the JWT ---
const getAuthToken = () => {
  // Retrieve the token saved during the login process (must match the key used in Login.jsx)
  return localStorage.getItem("jwtToken");
};

const OrgRegForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    designation: "",
    university: "",
    email: "",
    nic: "",
    phone: "",
    approval: "", // Matches the id="phone" in the input field
  });

  // *** DISABLED: State for the selected file is commented out ***
  // const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // *** DISABLED: Handler for file change is commented out ***
  // const handleFileChange = (e) => {
  //     const file = e.target.files[0];
  //     if (file) {
  //         setSelectedFile(file);
  //     }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // 1. Check for the JWT
    const token = getAuthToken();
    if (!token) {
      alert("Authentication required. Please log in to submit a request.");
      setLoading(false);
      navigate("/login");
      return;
    }

    // 2. Create the DTO object with keys matching your Spring Boot backend (snake_case)
    const adminRequestDto = {
      // Mapped from React's camelCase state to backend's snake_case DTO
      first_name: formData.firstName,
      last_name: formData.lastName,
      designation: formData.designation,
      university: formData.university,
      email: formData.email,
      nic: formData.nic,
      phone_number: formData.phone,
      approval: formData.approval, // Use phone_number as expected by backend
    };

    // *** FIX: Changed to send pure JSON data ***
    // Send the JSON object directly to Axios. Axios will automatically use
    // Content-Type: application/json. This removes the need for FormData/file headers.
    const dataToSend = adminRequestDto;

    try {
      const response = await axios.post(
        "http://localhost:8080/api/admin-requests",
        dataToSend, // Sending JSON object
        {
          headers: {
            // We only need the Authorization header now
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        alert(
          "Registration Request Sent Successfully! Awaiting Admin approval."
        );
        navigate("/organiser/profile");
      }
    } catch (error) {
      console.error("Registration Error:", error);

      // Handle server error responses
      if (error.response?.status === 401 || error.response?.status === 403) {
        alert("Authentication failed or session expired. Please log in again.");
        localStorage.removeItem("jwtToken");
        navigate("/login");
      } else {
        // Display specific error message from the backend if available
        alert(
          error.response?.data?.message ||
            `Error ${
              error.response?.status || ""
            }: Failed to submit request. Check server logs.`
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-surface-dark rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl overflow-hidden">
      <div className="p-8 md:p-10">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                className="block text-sm font-semibold text-slate-700 dark:text-gray-300"
                htmlFor="firstName"
              >
                {" "}
                First Name{" "}
              </label>
              <input
                id="firstName"
                type="text"
                required
                value={formData.firstName}
                onChange={handleChange}
                placeholder="John"
                className="block w-full px-4 py-3 bg-gray-50 dark:bg-surface-darker border border-gray-200 dark:border-gray-700 rounded-xl outline-none text-slate-900 dark:text-white"
              />
            </div>
            <div className="space-y-2">
              <label
                className="block text-sm font-semibold text-slate-700 dark:text-gray-300"
                htmlFor="lastName"
              >
                {" "}
                Last Name{" "}
              </label>
              <input
                id="lastName"
                type="text"
                required
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Doe"
                className="block w-full px-4 py-3 bg-gray-50 dark:bg-surface-darker border border-gray-200 dark:border-gray-700 rounded-xl outline-none text-slate-900 dark:text-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                className="block text-sm font-semibold text-slate-700 dark:text-gray-300"
                htmlFor="designation"
              >
                {" "}
                Designation{" "}
              </label>
              <input
                id="designation"
                type="text"
                required
                value={formData.designation}
                onChange={handleChange}
                className="block w-full px-4 py-3 bg-gray-50 dark:bg-surface-darker border border-gray-200 dark:border-gray-700 rounded-xl text-slate-900 dark:text-white"
              />
            </div>
            <div className="space-y-2">
              <label
                className="block text-sm font-semibold text-slate-700 dark:text-gray-300"
                htmlFor="university"
              >
                {" "}
                University{" "}
              </label>
              <input
                id="university"
                type="text"
                required
                value={formData.university}
                onChange={handleChange}
                className="block w-full px-4 py-3 bg-gray-50 dark:bg-surface-darker border border-gray-200 dark:border-gray-700 rounded-xl text-slate-900 dark:text-white"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              className="block text-sm font-semibold text-slate-700 dark:text-gray-300"
              htmlFor="email"
            >
              {" "}
              Email Address{" "}
            </label>
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="block w-full px-4 py-3 bg-gray-50 dark:bg-surface-darker border border-gray-200 dark:border-gray-700 rounded-xl text-slate-900 dark:text-white"
            />
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="space-y-2">
              <label
                className="block text-sm font-semibold text-slate-700 dark:text-gray-300"
                htmlFor="nic"
              >
                {" "}
                NIC{" "}
              </label>
              <input
                id="nic"
                type="text"
                required
                value={formData.nic}
                onChange={handleChange}
                className="block w-full px-4 py-3 bg-gray-50 dark:bg-surface-darker border border-gray-200 dark:border-gray-700 rounded-xl text-slate-900 dark:text-white"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              className="block text-sm font-semibold text-slate-700 dark:text-gray-300"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <div className="flex group shadow-sm">
              {/* The Solid Brick (Prefix) */}
              <span className="inline-flex items-center px-4 rounded-l-xl border border-r-0 border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-surface-dark bg-opacity-50 text-gray-500 dark:text-gray-400 font-medium text-sm">
                +94
              </span>

              {/* The Input Field */}
              <input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="7X XXX XXXX"
                className="block w-full px-4 py-3 bg-gray-50 dark:bg-surface-darker border border-gray-200 dark:border-gray-700 rounded-r-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all outline-none"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              className="block text-sm font-semibold text-slate-700 dark:text-gray-300"
              htmlFor="approval"
            >
              {" "}
              Add University Approval Letter{" "}
            </label>
            <input
              id="approval"
              type="tel"
              required
              value={formData.approval}
              onChange={handleChange}
              className="block w-full px-4 py-3 bg-gray-50 dark:bg-surface-darker border border-gray-200 dark:border-gray-700 rounded-xl text-slate-900 dark:text-white"
            />
          </div>

          {/* File Upload Section - COMMENTED OUT/DISABLED */}
          {/* <div className="bg-gray-50 dark:bg-surface-darker rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                        <h3 className="text-sm font-bold text-slate-700 dark:text-gray-300 mb-4">University Verification Letter</h3>
                        <div className="w-full flex justify-center rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-700 px-6 py-8 hover:bg-primary/5 transition-all cursor-pointer relative">
                            <div className="text-center">
                                <label className="cursor-pointer font-semibold text-primary">
                                    <span>Upload confirmation letter</span>
                                    <input 
                                        id="verificationFile"
                                        type="file" 
                                        className="sr-only" 
                                        accept=".pdf,.jpg,.jpeg,.png"
                                    />
                                </label>
                                <p className="text-xs text-gray-500">
                                    PDF, PNG, JPG up to 10MB
                                </p>
                            </div>
                        </div>
                    </div> 
                    */}

          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary hover:bg-primary-hover text-white font-bold text-lg rounded-xl shadow-lg transition-all disabled:opacity-50"
            >
              <span className="material-symbols-outlined">how_to_reg</span>
              {loading ? "Processing..." : "Join Now"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrgRegForm;
