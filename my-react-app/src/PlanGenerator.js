import React, { useState } from 'react';
import './PlanGenerator.css';

const PlanGenerator = () => {
  const [selectedDosha, setSelectedDosha] = useState(null);

  const handleDoshaSelect = (dosha) => {
    setSelectedDosha(dosha);
  };

  const handleGeneratePlan = () => {
    // Add logic to generate plan based on selectedDosha
    console.log(`Generating plan for ${selectedDosha}`);
  };

  return (
    <div>
      <header className="site-header">
        <div className="logo-section">
          <img src="images/leaf.png" alt="Logo" className="logo" />
          <h1 className="site-title">Tridosha AI</h1>
        </div>
        <nav className="nav-links">
          <a href="landing page.html">Home</a>
          <a href="About.html">About</a>
          <a href="contact.html">Contact</a>
          <a href="#">SignIn</a>
          <a href="#">SignUp</a>
        </nav>
      </header>

      <main className="plan-generator-container">
        <h1>Ayurvedic Plan Generator</h1>
        <p className="subheading">
          Select your dominant dosha to receive personalized recommendations for diet, lifestyle, and herbs.
        </p>

        <section className="dosha-selection">
          <h2>Select Your Dosha</h2>
          <div className="dosha-options">
            <button
              className={`dosha-button vata ${selectedDosha === 'vata' ? 'selected' : ''}`}
              onClick={() => handleDoshaSelect('vata')}
            >
              Vata
            </button>
            <button
              className={`dosha-button pitta ${selectedDosha === 'pitta' ? 'selected' : ''}`}
              onClick={() => handleDoshaSelect('pitta')}
            >
              Pitta
            </button>
            <button
              className={`dosha-button kapha ${selectedDosha === 'kapha' ? 'selected' : ''}`}
              onClick={() => handleDoshaSelect('kapha')}
            >
              Kapha
            </button>
          </div>
        </section>

        {selectedDosha && (
          <section className="plan-output">
            <h2>Personalized Plan for {selectedDosha.charAt(0).toUpperCase() + selectedDosha.slice(1)}</h2>
            {/* This is a placeholder for the generated plan content */}
            <div className="plan-details">
              <h3>Diet Recommendations:</h3>
              <p>Recommendations specific to {selectedDosha} dosha...</p>
              <h3>Lifestyle Tips:</h3>
              <p>Tips specific to {selectedDosha} dosha...</p>
              <h3>Herbal Recommendations:</h3>
              <p>Herbs specific to {selectedDosha} dosha...</p>
            </div>
          </section>
        )}

        <section className="cta">
          <h3>Ready for Your Personalized Plan?</h3>
          <button onClick={handleGeneratePlan} disabled={!selectedDosha}>
            Generate My Plan
          </button>
        </section>
      </main>

      {/* Footer Placeholder */}
      <footer style={{ backgroundColor: '#2d3d2f', color: 'white', padding: '3px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: 'auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {/* Brand Section */}
          <div style={{ flex: '1 1 300px', marginBottom: '20px' }}>
            <h2 style={{ display: 'flex', alignItems: 'left' }}>
              <span style={{ marginRight: '10px' }}>
                <img className="flogo" src="images/leaf.png" alt="AyurBalance Logo" />
              </span>
              Tridosha AI
            </h2>
            <p>
              Combining 5,000 years of Ayurvedic wisdom with modern AI to provide
              personalized wellness guidance for optimal health and balance.
            </p>
            <div style={{ marginTop: '15px' }}>
              <a href="#" style={{ marginRight: '10px' }}><i data-lucide="facebook"></i></a>
              <a href="#" style={{ marginRight: '10px' }}><i data-lucide="twitter"></i></a>
              <a href="#" style={{ marginRight: '10px' }}><i data-lucide="instagram"></i></a>
            </div>
          </div>

          {/* Quick Links */}
          <div style={{ flex: '1 1 200px', marginBottom: '20px' }}>
            <h3>Quick Links</h3>
            <ul style={{ listStyle: 'none', paddingLeft: '190px' }}>
              <li><a href="landing page.html" style={{ color: 'white' }}>Home</a></li>
              <li><a href="learn.html" style={{ color: 'white' }}>Learn Ayurveda</a></li>
              <li><a href="About.html" style={{ color: 'white' }}>About Us</a></li>
              <li><a href="contact.html" style={{ color: 'white' }}>Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div style={{ flex: '1 1 250px', marginBottom: '20px' }}>
            <h3 className="con">Contact</h3>
            <p className="ficon">
              <i data-lucide="mail"></i>
              <a href="mailto:support@Tridosh.ai" style={{ color: 'white' }}>support@Tridosha.ai</a>
            </p>
            <p className="ficon"><i data-lucide="phone"></i> +1 (555) 123-4567</p>
            <p className="ficon">
              <i data-lucide="map-pin"></i>123 Wellness Street<br />Mindful City, MC 12345
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div style={{ textAlign: 'center', borderTop: '1px solid #444', paddingTop: '20px', marginTop: '5px', fontSize: '14px' }}>
          © 2025 Tridosha AI. All rights reserved.
          <div style={{ marginTop: '10px' }}>
            <a href="privacy policy.html" style={{ color: 'white', margin: '0 10px' }}>Privacy Policy</a>
            <a href="#" style={{ color: 'white', margin: '0 10px' }}>Terms of Service</a>
            <a href="cookies policy.html" style={{ color: 'white', margin: '0 10px' }}>Cookie Policy</a>
          </div>
        </div>
      </footer>

      {/* Modal Placeholders */}
      <div className="modal-overlay" id="signinModal">
        <div className="signin-modal">
          <span className="close-btn">×</span>
          <h2>Welcome Back</h2>
          {/* Sign In Form */}
        </div>
      </div>

      <div className="modal-overlay" id="signupModal">
        <div className="signup-modal">
          <span className="close-btn">×</span>
          <h2>Create Account</h2>
          {/* Sign Up Form */}
        </div>
      </div>
    </div>
  );
};

export default PlanGenerator;