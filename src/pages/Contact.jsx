import React, { useState } from "react";
import axios from "axios";
import { ServerUrl } from "../App";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await axios.post(`${ServerUrl}/api/v1/sendmail`, formData);

      if (res.status === 200) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 px-4 py-12">
      <div className="w-full max-w-lg bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-2xl border border-white/20 transition-all duration-500 hover:shadow-blue-100">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Get in Touch
          </h2>
          <p className="text-gray-500 mt-2 font-medium">We'd love to hear from you!</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-700 ml-1">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition duration-200 placeholder:text-gray-400"
            />
          </div>

          {/* Email Field */}
          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition duration-200 placeholder:text-gray-400"
            />
          </div>

          {/* Message Field */}
          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-700 ml-1">Message</label>
            <textarea
              name="message"
              placeholder="How can we help?"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition duration-200 resize-none placeholder:text-gray-400"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full relative flex items-center justify-center py-4 px-6 rounded-xl font-bold text-white tracking-wide transition-all duration-300 transform ${
              loading 
                ? "bg-blue-400 cursor-not-allowed" 
                : "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 hover:-translate-y-1 active:scale-95 shadow-lg hover:shadow-blue-200"
            }`}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </button>
        </form>

        {/* Status Toast Notification */}
        {status && (
          <div className={`mt-6 p-4 rounded-xl text-center text-sm font-bold animate-fade-in ${
            status === "success" 
              ? "bg-green-50 text-green-700 border border-green-200" 
              : "bg-red-50 text-red-700 border border-red-200"
          }`}>
            {status === "success" ? "✨ Message sent successfully!" : "❌ Failed to send. Please try again."}
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;