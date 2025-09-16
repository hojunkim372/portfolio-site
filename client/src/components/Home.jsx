import React from "react";
import { Link } from "react-router-dom";
import "../App.css"; 

export default function Home() {
  return (
    // Container div to wrap all elements on the page
    <div className="container">
      <h2>Welcome to My Portfolio</h2>
      <p>
        Hello! I'm <strong>Hojun Kim</strong>, AI software engineering student at centennial college.
      </p>

      <h2>My Mission</h2>
      <p>
       My mission is to grow as a Data Analysist who can solve real-world problems
       through technology and continuous learning, while contributing to impactful
       projects in the future. I aim to transform complex challenges into simple
       solutions by leveraging data, creating applications that make information
       easier to visualize, manage, and use effectively for every user.
      </p>

       {/* Navigation Button to About Page */}
      <div style={{ marginTop: "2rem" }}>
        <Link to="/about" className="btn">
          Learn More About Me
        </Link>
      </div>
    </div>
  );
}
