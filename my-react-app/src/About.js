import React, { useState } from 'react';
import './About.css'; // Assuming you will have an About.css

function About() {
  // State for modals (placeholders)
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  // Placeholder functions for modals
  const openSignInModal = () => {
    setIsSignInModalOpen(true);
    // Add blur effect logic here if needed
  };

  const closeSignInModal = () => {
    setIsSignInModalOpen(false);
    // Remove blur effect logic here if needed
  };

  const openSignUpModal = () => {
    setIsSignUpModalOpen(true);
    // Add blur effect logic here if needed
  };

  const closeSignUpModal = () => {
    setIsSignUpModalOpen(false);
    // Remove blur effect logic here if needed
  };

  const switchToSignUp = () => {
    closeSignInModal();
    openSignUpModal();
  };

  const switchToSignIn = () => {
    closeSignUpModal();
    openSignInModal();
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
          <a href="#" onClick={openSignInModal}>SignIn</a>
          <a href="#" onClick={openSignUpModal}>SignUp</a>
        </nav>
      </header>

      <div id="main-content">
        <section className="hero">
          <div className="container">
            <h1>About Us</h1>
            <p>Our Mission, Values, and Team</p>
          </div>
        </section>

        <section className="mission-values">
          <div className="container">
            <h2>Our Mission</h2>
            <p>
              At Tridosha AI, we are dedicated to blending the ancient wisdom of Ayurveda with the power of modern artificial intelligence. Our mission is to empower individuals to understand their unique mind-body constitution (Dosha) and provide personalized guidance for a balanced and healthy life. We aim to make the profound benefits of Ayurveda accessible to everyone, fostering a community focused on holistic well-being.
            </p>

            <h2>Our Values</h2>
            <ul>
              <li><strong>Holistic Well-being:</strong> We believe in the interconnectedness of mind, body, and spirit.</li>
              <li><strong>Accessibility:</strong> We strive to make Ayurvedic knowledge and personalized wellness accessible to all.</li>
              <li><strong>Innovation:</strong> We leverage technology to enhance ancient practices and provide data-driven insights.</li>
              <li><strong>Empowerment:</strong> We empower individuals to take an active role in their health journey.</li>
              <li><strong>Authenticity:</strong> We stay true to the core principles of Ayurveda while embracing modern science.</li>
            </ul>
          </div>
        </section>

        <section className="team">
          <div className="container">
            <h2>Meet the Team</h2>
            <div className="team-members">
              <div className="team-member">
                <img src="images/team-member1.jpg" alt="Team Member 1" />
                <h3>Jane Doe</h3>
                <p>Founder & Ayurvedic Practitioner</p>
                <p>Jane is a certified Ayurvedic practitioner with over 10 years of experience. She is passionate about bringing ancient healing to the modern world.</p>
              </div>
              <div className="team-member">
                <img src="images/team-member2.jpg" alt="Team Member 2" />
                <h3>John Smith</h3>
                <p>Lead AI Engineer</p>
                <p>John is an expert in artificial intelligence and machine learning. He leads the development of our personalized assessment and guidance system.</p>
              </div>
              <div className="team-member">
                <img src="images/team-member3.jpg" alt="Team Member 3" />
                <h3>Sarah Lee</h3>
                <p>Wellness Coach</p>
                <p>Sarah is a certified wellness coach who provides support and guidance to our users on their wellness journeys.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-about">
          <div className="container">
            <h2>Get in Touch</h2>
            <p>Have questions or want to learn more? Contact us!</p>
            <a href="contact.html" className="btn">Contact Us</a>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: '#2d3d2f', color: 'white', padding: '3px 20px' }}>
        <div
          style={{
            maxWidth: '1200px',
            margin: 'auto',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}
        >
          {/* Brand Section */}
          <div style={{ flex: '1 1 300px', marginBottom: '20px' }}>
            <h2 className="fh2" style={{ display: 'flex', alignItems: 'left' }}>
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
              <a href="#" style={{ marginRight: '10px' }}>
                {/* Placeholder for Facebook icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" style={{ marginRight: '10px' }}>
                 {/* Placeholder for Twitter icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.4-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.5-.7 3.1-1.1 4.7-1.3z"/></svg>
              </a>
              <a href="#" style={{ marginRight: '10px' }}>
                 {/* Placeholder for Instagram icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37a4 4 0 1 1-7.202-1.827L9 11.37A4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div style={{ flex: '1 1 200px', marginBottom: '20px' }}>
            <h3>Quick Links</h3>
            <ul style={{ listStyle: 'none', paddingLeft: '190px' }}>
              <li><a href="landing page.html" style={{ color: 'white' }}>Home</a></li>
              <li>
                <a href="learn.html" style={{ color: 'white' }}>Learn Ayurveda</a>
              </li>
              <li><a href="About.html" style={{ color: 'white' }}>About Us</a></li>
              <li><a href="contact.html" style={{ color: 'white' }}>Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div style={{ flex: '1 1 250px', marginBottom: '20px' }}>
            <h3 className="con">Contact</h3>
            <p className="ficon">
               {/* Placeholder for Mail icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              <a href="mailto:support@Tridosha.ai" style={{ color: 'white' }}>
                support@Tridosha.ai
              </a>
            </p>
            <p className="ficon">
               {/* Placeholder for Phone icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-3.86-4.04C5.55 11.37 7.1 7.22 7.31 6.39A4.83 4.83 0 0 0 5.18 2H2.82A2 2 0 0 0 .11 4.07c.53 4.2 3.52 7.26 7.65 11.39a17.42 17.42 0 0 0 5.54 4.24c.3.17.62.3.95.41.2.08.42.15.64.21.18.05.36.08.54.1l.07.01a6.7 6.7 0 0 0 .79.02 2 2 0 0 0 2-1.72v-3.17a2 2 0 0 0-2-2h-3.17a2 2 0 0 1-2-2.18Z"/></svg>
              +1 (555) 123-4567
            </p>
            <p className="ficon">
               {/* Placeholder for Map Pin icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M12 20.5S4 17 4 10A8 8 0 0 1 12 2a8 8 0 0 1 8 8c0 7-8 10.5-8 10.5z"/><circle cx="12" cy="10" r="3"/></svg>
              123 Wellness Street<br />Mindful City, MC 12345
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div
          style={{
            textAlign: 'center',
            borderTop: '1px solid #444',
            paddingTop: '20px',
            marginTop: '5px',
            fontSize: '14px',
          }}
        >
          © 2025 Tridosha AI. All rights reserved.
          <div style={{ marginTop: '10px' }}>
            <a href="privacy policy.html" style={{ color: 'white', margin: '0 10px' }}>Privacy Policy</a>
            <a href="#" style={{ color: 'white', margin: '0 10px' }}>Terms of Service</a>
            <a href="cookies policy.html" style={{ color: 'white', margin: '0 10px' }}>Cookie Policy</a>
          </div>
        </div>
      </footer>


      {/* Sign In Modal (Placeholder) */}
      {isSignInModalOpen && (
        <div className="modal-overlay active">
          <div className="signin-modal">
            <span className="close-btn" onClick={closeSignInModal}>×</span>
            <h2>Welcome Back</h2>
            {/* Sign In Form content goes here */}
            <div className="modal-footer">
              <p><a href="#">Forgot password?</a></p>
              <p>
                Don't have an account?
                <a href="#" onClick={switchToSignUp}>Sign Up</a>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Sign Up Modal (Placeholder) */}
      {isSignUpModalOpen && (
        <div className="modal-overlay active">
          <div className="signup-modal">
            <span className="close-btn" onClick={closeSignUpModal}>×</span>
            <h2>Create Account</h2>
            {/* Sign Up Form content goes here */}
            <div className="modal-footer">
              <p>
                Already have an account?
                <a href="#" onClick={switchToSignIn}>Sign In</a>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default About;