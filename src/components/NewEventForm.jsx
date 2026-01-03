import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewEventForm = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const [showSuccessModal, setShowSuccessModal] = useState(false);

    // Initial form data structure
    const INITIAL_EVENT_DATA = {
        title: "",
        image: "", 
        description: "",
        organizer: "",
        highlight: "",
        fee: "Free",
        category: "Technology",
        university: "",
        eventType: "PHYSICAL",
        eventDate: "", 
        eventTime: "", 
        contactlink: "",
    };

    const [formData, setFormData] = useState(INITIAL_EVENT_DATA);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Retrieve the JWT token from storage. This must match the key used in the login function.
            const token = localStorage.getItem("jwtToken"); 
            
            // Safety Check: If token is missing, redirect and stop the request.
            if (!token || token.length < 10) { 
                alert("Authentication required. The token is missing or invalid. Please log in.");
                setLoading(false);
                navigate("/login"); 
                return;
            }
            
            const formattedData = {
                ...formData,
                eventTime:
                    formData.eventTime.length === 5
                        ? `${formData.eventTime}:00`
                        : formData.eventTime,
            };

            const response = await axios.post(
                "http://localhost:8080/api/event",
                formattedData,
                {
                    // Ensure Authorization Header is correctly attached
                    headers: {
                        Authorization: `Bearer ${token}`, 
                        "Content-Type": "application/json",
                    },
                }
            );

            if (response.status === 201 || response.status === 200) {
                // FIX: Remove native alert and immediate navigation
                // alert("Event successfully published!"); // REMOVED
                // navigate("/opportunities"); // REMOVED
                
                // Show the custom modal instead
                setShowSuccessModal(true);
                // The navigation will now happen when the user clicks the button inside the modal.
            }
        } catch (err) {
            console.error("Error publishing event:", err.response || err);
            
            // Improved error message to reflect the possible 403 Forbidden issue if the user is not an Admin.
            const status = err.response?.status;
            let userAlertMessage = "Failed to publish event. ";

            if (status === 403) {
                userAlertMessage += "Forbidden: You may not have the required Admin role.";
            } else if (status === 401) {
                userAlertMessage += "Unauthorized: Your session is expired. Please log in again.";
            } else {
                userAlertMessage += "Check server logs for details.";
            }
            
            alert(userAlertMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <form className="space-y-8 pb-20" onSubmit={handleSubmit}>
                {/* SECTION: Event Banner Link */}
                <div className="bg-surface-dark rounded-xl p-8 border border-[#324467]">
                    <h3 className="text-lg font-bold text-white mb-4">
                        Event Banner Link
                    </h3>
                    <div className="space-y-4">
                        <div className="relative group">
                            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#92a4c9]">
                                link
                            </span>
                            <input
                                type="url"
                                name="image" 
                                value={formData.image}
                                placeholder="https://example.com/your-image.jpg"
                                className="block w-full pl-12 pr-4 py-4 bg-[#111722] border border-[#324467] rounded-xl text-white text-sm focus:ring-2 focus:ring-primary outline-none"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="text-center py-2">
                            <span className="text-red-600 dark:text-red-500 font-bold text-sm">
                                Send us banner image URL to publish events.
                            </span>
                        </div>
                    </div>
                </div>

                {/* SECTION: Basic Information */}
                <div className="bg-surface-dark rounded-xl p-8 border border-[#324467] space-y-6">
                    <h3 className="text-lg font-bold text-white mb-2 pb-4 border-b border-[#324467]">
                        Basic Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="col-span-2">
                            <label className="block text-sm font-medium text-white mb-2">
                                Event Title
                            </label>
                            <input
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                required
                                className="block w-full rounded-lg bg-[#111722] py-2.5 px-4 text-white ring-1 ring-[#324467] outline-none"
                                placeholder="Event Name"
                                type="text"
                            />
                        </div>

                        <div className="col-span-2">
                            <label className="block text-sm font-medium text-white mb-2">
                                Description
                            </label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                required
                                className="block w-full rounded-lg bg-[#111722] py-2.5 px-4 text-white ring-1 ring-[#324467] outline-none"
                                placeholder="Detailed description..."
                                rows="3"
                            />
                        </div>

                        <div className="col-span-1">
                            <label className="block text-sm font-medium text-white mb-2">
                                Organizer
                            </label>
                            <input
                                name="organizer"
                                value={formData.organizer}
                                onChange={handleChange}
                                required
                                className="block w-full rounded-lg bg-[#111722] py-2.5 px-4 text-white ring-1 ring-[#324467] outline-none"
                                placeholder="Club or Society Name"
                                type="text"
                            />
                        </div>

                        <div className="col-span-1">
                            <label className="block text-sm font-medium text-white mb-2">
                                University
                            </label>
                            <input
                                name="university"
                                value={formData.university}
                                onChange={handleChange}
                                required
                                className="block w-full rounded-lg bg-[#111722] py-2.5 px-4 text-white ring-1 ring-[#324467] outline-none"
                                placeholder="Host University"
                                type="text"
                            />
                        </div>

                        <div className="col-span-2">
                            <label className="block text-sm font-medium text-white mb-2">
                                Highlight
                            </label>
                            <input
                                name="highlight"
                                value={formData.highlight}
                                onChange={handleChange}
                                className="block w-full rounded-lg bg-[#111722] py-2.5 px-4 text-white ring-1 ring-[#324467] outline-none"
                                placeholder="Key feature or guest speaker"
                                type="text"
                            />
                        </div>

                        <div className="col-span-1">
                            <label className="block text-sm font-medium text-white mb-2">
                                Entry Fee
                            </label>
                            <input
                                name="fee"
                                value={formData.fee}
                                onChange={handleChange}
                                className="block w-full rounded-lg bg-[#111722] py-2.5 px-4 text-white ring-1 ring-[#324467] outline-none"
                                placeholder="e.g. Free or RS. 500"
                                type="text"
                            />
                        </div>

                        <div className="col-span-1">
                            <label className="block text-sm font-medium text-white mb-2">
                                Category
                            </label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="block w-full rounded-lg bg-[#111722] py-2.5 px-4 text-white ring-1 ring-[#324467] outline-none appearance-none"
                            >
                                <option value="Technology">Technology</option>
                                <option value="Wedding">Wedding</option>
                                <option value="Sports">Sports</option>
                                <option value="Education">Education</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* SECTION: Date & Location */}
                <div className="bg-surface-dark rounded-xl p-8 border border-[#324467] space-y-6">
                    <h3 className="text-lg font-bold text-white mb-2 pb-4 border-b border-[#324467]">
                        Date & Time
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-white mb-2">
                                Event Date
                            </label>
                            <input
                                type="date"
                                name="eventDate"
                                value={formData.eventDate}
                                onChange={handleChange}
                                required
                                className="w-full bg-[#111722] text-white p-2.5 rounded-lg border border-[#324467] [color-scheme:dark]"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white mb-2">
                                Event Time
                            </label>
                            <input
                                type="time"
                                name="eventTime"
                                value={formData.eventTime}
                                onChange={handleChange}
                                required
                                className="w-full bg-[#111722] text-white p-2.5 rounded-lg border border-[#324467] [color-scheme:dark]"
                            />
                        </div>
                        <div className="col-span-1">
                            <label className="block text-sm font-medium text-white mb-2">
                                Event Type
                            </label>
                            <select
                                name="eventType"
                                value={formData.eventType}
                                onChange={handleChange}
                                className="block w-full rounded-lg bg-[#111722] py-2.5 px-4 text-white ring-1 ring-[#324467] outline-none appearance-none"
                            >
                                <option value="ONLINE">ONLINE</option>
                                <option value="PHYSICAL">PHYSICAL</option>
                            </select>
                        </div>
                        <div className="col-span-1">
                            <label className="block text-sm font-medium text-white mb-2">
                                Contact Link / Meeting Link
                            </label>
                            <input
                                name="contactlink"
                                value={formData.contactlink}
                                onChange={handleChange}
                                className="block w-full rounded-lg bg-[#111722] py-2.5 px-4 text-white ring-1 ring-[#324467] outline-none"
                                placeholder="URL link"
                                type="url"
                            />
                        </div>
                    </div>
                </div>

                {/* Footer Buttons */}
                <div className="flex items-center justify-end gap-4 pt-6 border-t border-[#324467]">
                    <button
                        type="button"
                        onClick={() => navigate(-1)}
                        className="px-6 py-2.5 rounded-lg border border-[#324467] text-white hover:bg-[#324467]"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        disabled={loading}
                        className="px-8 py-2.5 rounded-lg bg-primary hover:bg-primary/90 text-white font-bold shadow-lg shadow-primary/20 transition-all disabled:opacity-50"
                    >
                        {loading ? "Publishing..." : "Publish Event"}
                    </button>
                </div>
            </form>
            {/* Custom Success Modal (This will now correctly show on successful submission) */}
            {showSuccessModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
                    <div className="relative bg-[#111722] border border-[#324467] rounded-3xl p-10 max-w-sm w-full shadow-2xl text-center transform transition-all animate-in zoom-in duration-300">
                        <div className="size-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/20">
                            <span className="material-symbols-outlined text-green-500 text-5xl">verified</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">Event Published!</h3>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Your event is now live and visible to the community.
                        </p>
                        <button
                            onClick={() => navigate("/opportunities")}
                            className="w-full py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl shadow-lg shadow-primary/25 transition-all hover:scale-[1.02] active:scale-95"
                        >
                            Continue to Dashboard
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NewEventForm;