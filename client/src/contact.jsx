import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

export default function Contact() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Your message succesfully submitted!`);
    navigate("/");
  };

  return (
    <div className="container">
       
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
          <strong>Location:</strong> Toronto, On
        </p>
      </div>

      {/* form design*/}
      <form
        onSubmit={handleSubmit}
        style={{
          background: "white",
          padding: "1.5rem",
          borderRadius: "8px",
          border: "1px solid #e0e0e0",
        }}
      >
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

        <button type="submit" className="btn">
          Send Message
        </button>
      </form>
    </div>
  );
}
