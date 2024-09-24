import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-container">
       <div className="hero">
     <img src="c1b10ae0801aa8e415bea928a0ab0431.jpg"></img>
     </div>
      {/* Hero Section */}
      <div className="hero-text">
        <h1>Faith,<br/> Community And <br/>Excellence</h1>
        <p>Education is an environment of faith and virtue.</p>
      </div>

      {/* Content Section */}
      <div className="content-section">
      
        <div className="content-item">
          <img src="OIP (1).jpg" alt="School Building" />
          <a href="#" className="content-link">Who we are →</a>
        </div>
        <div className="content-item">
          <img src="download.jpg" alt="Students Learning" />
          <a href="#" className="content-link">Academic →</a>
        </div>
        <div className="content-item">
          <img src="community.jpg" alt="Community" />
          <a href="#" className="content-link">Community →</a>
        </div>
        
      </div>
    </div>
  );
}

export default HomePage;
