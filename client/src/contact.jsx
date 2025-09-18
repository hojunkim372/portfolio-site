/* 
  File: contact.jsx
  Name: Hojun Kim
  Student ID: 301459546
  Date: Sept 18, 2025
*/

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

// Contact component (functional component)
export default function Contact() {
  const navigate = useNavigate();

  // State object to store form input values
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  // Handle changes for input fields (updates formData state)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Your message successfully submitted!`);
    navigate("/"); // Redirect back to Home page
  };

  return (
    // Main container for the Contact Page
    <div className="container">
       
      {/* Contact Information Card */}
      <div
        className="card"
        style={{
          backgroundColor: "#e8f9f0",
          border: "1px solid #2ecc71",
          marginBottom: "2rem",
        }}
      >
        <h2>My Contact Information</h2>
        <p>
          <strong>Email:</strong> hojunkim105@gmail.com <br />
          <strong>Phone:</strong> +1 (437) 955-1098 <br />
          <strong>Location:</strong> Toronto, ON
        </p>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        style={{
          background: "white",
          padding: "1.5rem",
          borderRadius: "8px",
          border: "1px solid #e0e0e0",
        }}
      >
        {/* First Name Field */}
        <div style={{ marginBottom: "1rem" }}>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        {/* Last Name Field */}
        <div style={{ marginBottom: "1rem" }}>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        {/* Phone Number Field */}
        <div style={{ marginBottom: "1rem" }}>
          <label>Contact Number:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        {/* Email Address Field */}
        <div style={{ marginBottom: "1rem" }}>
          <label>Email Address:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        {/* Message Textarea */}
        <div style={{ marginBottom: "1rem" }}>
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "8px",
              marginTop: "5px",
              height: "120px",
            }}
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn">
          Send Message
        </button>
      </form>
    </div>
  );
}
