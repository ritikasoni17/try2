import React, { useState } from 'react';
import './learn.css'; // Assuming you'll have a learn.css

// ... (modal state and handlers remain the same as in the original LandingPage component)
const LearnAyurveda = () => {
  // State for menu toggle (if applicable from the original HTML)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Placeholder for modal state and handlers (will be implemented later)
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const openSignInModal = () => setIsSignInModalOpen(true);
  const closeSignInModal = () => setIsSignInModalOpen(false);
  const openSignUpModal = () => setIsSignUpModalOpen(true);
  const closeSignUpModal = () => setIsSignUpModalOpen(false);
  const switchToSignUp = () => { closeSignInModal(); openSignUpModal(); };
  const switchToSignIn = () => { closeSignUpModal(); openSignInModal(); };

  // State to manage which main section is visible
  const [visibleSection, setVisibleSection] = useState('intro'); // 'intro', 'doshas', 'principles', 'practice'

  // State to manage visibility of sections within 'principles'
  const [visiblePrinciplesSection, setVisiblePrinciplesSection] = useState(null); // 'agni', 'ama', 'ojas', 'dinchariya'

  const handleButtonClick = (section) => {
    setVisibleSection(section);
  };

  const handlePrinciplesButtonClick = (section) => {
    setVisiblePrinciplesSection(visiblePrinciplesSection === section ? null : section);
  };
  return (
    <div>
      {/* Site Navigation (assuming similar structure to landing page) */}
      <header className="site-header">
        <div className="logo-section">
          <img src="images/leaf.png" alt="Logo" className="logo" />
          <h1 className="site-title">Tridosha AI</h1>
        </div>
        <nav className="nav-links">
          <a href="landing page.html">Home</a>
          <a href="About.html">About</a>
          <a href="contact.html">Contact</a>
          <button onClick={openSignInModal}>SignIn</button>
          <button onClick={openSignUpModal}>SignUp</button>
        </nav>
      </header>

      <div id="main-content">
        {/* Hero section for Learn Ayurveda page */}
        <section className="learn-hero">
          <h1>Deep Dive into Ayurveda</h1>
          <p>Explore the ancient science of life and its principles for holistic wellness.</p>
        </section>

        {/* Content sections for Learn Ayurveda */}
        <section className="ayurveda-introduction">
          <h2>What is Ayurveda?</h2>
          <p>
            Ayurveda, a Sanskrit word meaning "science of life," is an ancient Indian system
            of medicine that focuses on a holistic approach to health and well-being. It
            emphasizes the balance of mind, body, and spirit.
          </p>
        </section>

        <section className="tridosha-explanation">
          <h2>The Three Doshas: Vata, Pitta, Kapha</h2>
          <p>
            Ayurveda teaches that everything in the universe, including ourselves, is made up
            of five elements: space, air, fire, water, and earth. These elements combine to
            form three fundamental energies or principles that are present in everyone and
            everything, but in different proportions. These are the three doshas: Vata,
            Pitta, and Kapha.
          </p>
          <div className="dosha-details">
            <div className="dosha-card vata">
              <h3>Vata (Air & Space)</h3>
              <p>
                Associated with movement, creativity, and adaptability. When in balance,
                Vata individuals are energetic and enthusiastic. Imbalance can lead to
                anxiety and restlessness.
              </p>
            </div>
            <div className="dosha-card pitta">
              <h3>Pitta (Fire & Water)</h3>
              <p>
                Associated with metabolism, digestion, and transformation. When in balance,
                Pitta individuals are focused and driven. Imbalance can lead to anger and
                inflammation.
              </p>
            </div>
            <div className="dosha-card kapha">
              <h3>Kapha (Earth & Water)</h3>
              <p>
                Associated with structure, lubrication, and stability. When in balance,
                Kapha individuals are calm and grounded. Imbalance can lead to lethargy and
                congestion.
              </p>
            </div>
          </div>
        </section>

        <section className="ayurveda-practices">
          <h2>Ayurvedic Practices for Balance</h2>
          <p>
            Ayurveda offers a range of practices to maintain or restore dosha balance,
            including:
          </p>
          <ul>
            <li>Dietary recommendations based on your dosha.</li>
            <li>Lifestyle adjustments for daily and seasonal routines.</li>
            <li>Herbal remedies and therapies.</li>
            <li>Yoga and meditation.</li>
          </ul>
        </section>

        {/* Footer (assuming similar structure to landing page) */}
        <footer style={{ backgroundColor: '#2d3d2f', color: 'white', padding: '3px 20px' }}>
            <div style={{ maxWidth: '1200px', margin: 'auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
              <div style={{ flex: '1 1 300px', marginBottom: '20px' }}>
                <h2>
                  <span style={{ marginRight: '10px' }}>
                    <img className="flogo" src="images/leaf.png" alt="AyurBalance Logo" />
                  </span>
                  Tridosha AI
                </h2>
                <p>
                  Combining 5,000 years of Ayurvedic wisdom with modern AI to provide personalized wellness guidance for optimal health and balance.
                </p>
                <div style={{ marginTop: '15px' }}>
                  <a href="#" style={{ marginRight: '10px' }}>
                    <i data-lucide="facebook"></i>
                  </a>
                  <a href="#" style={{ marginRight: '10px' }}>
                    <i data-lucide="twitter"></i>
                  </a>
                  <a href="#" style={{ marginRight: '10px' }}>
                    <i data-lucide="instagram"></i>
                  </a>
                </div>
              </div>
              <div style={{ flex: '1 1 200px', marginBottom: '20px' }}>
                <h3>Quick Links</h3>
                <ul style={{ listStyle: 'none', paddingLeft: '190px' }}>
                  <li><a href="landing page.html" style={{ color: 'white' }}>Home</a></li>
                  <li><a href="learn.html" style={{ color: 'white' }}>Learn Ayurveda</a></li>
                  <li><a href="About.html" style={{ color: 'white' }}>About Us</a></li>
                  <li><a href="contact.html" style={{ color: 'white' }}>Contact</a></li>
                </ul>
              </div>
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
            <div style={{ textAlign: 'center', borderTop: '1px solid #444', paddingTop: '20px', marginTop: '5px', fontSize: '14px' }}>
              © 2025 Tridosha AI. All rights reserved.
              <div style={{ marginTop: '10px' }}>
                <a href="#" style={{ color: 'white', margin: '0 10px' }} >Privacy Policy</a>
                <a href="#" style={{ color: 'white', margin: '0 10px' }}>Terms of Service</a>
                <a href="#" style={{ color: 'white', margin: '0 10px' }}>Cookie Policy</a>
              </div>
            </div>
          </footer>
      </div>

      {/* Placeholder for Sign In Modal */}
      {isSignInModalOpen && (
        <div className="modal-overlay active">
          <div className="signin-modal">
            <span className="close-btn" onClick={closeSignInModal}>×</span>
            <h2>Welcome Back</h2>
            {/* Sign In Form content will go here */}
            <p>Sign In form goes here</p>
            <div className="modal-footer">
              <p><a href="#">Forgot password?</a></p>
              <p>Don't have an account? <a href="#" onClick={switchToSignUp}>Sign Up</a></p>
            </div>
          </div>
        </div>
      )}

      {/* Placeholder for Sign Up Modal */}
      {isSignUpModalOpen && (
        <div className="modal-overlay active">
          <div className="signup-modal">
            <span className="close-btn" onClick={closeSignUpModal}>×</span>
            <h2>Create Account</h2>
            {/* Sign Up Form content will go here */}
            <p>Sign Up form goes here</p>
            <div className="modal-footer">
              <p>Already have an account? <a href="#" onClick={switchToSignIn}>Sign In</a></p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LearnAyurveda;