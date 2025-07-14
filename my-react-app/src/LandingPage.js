import React, { useState, useEffect } from 'react';
import './landing page.css'; 
import leafImage from './assets/leaf.png';
function LandingPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Placeholder functions for navigation
    const handleHomeClick = (event) => {
        event.preventDefault();
        // Add navigation logic here if using React Router or similar
        console.log("Navigate to Home");
    };

    const handleAboutClick = (event) => {
        event.preventDefault();
        console.log("Navigate to About");
    };

    const handleSymptomsClick = (event) => {
        event.preventDefault();
        console.log("Navigate to Symptoms");
    };

    const handlePlanGeneratorClick = (event) => {
        event.preventDefault();
        console.log("Navigate to Plan Generator");
    };

    const handleLearnMoreClick = (event) => {
        event.preventDefault();
        console.log("Navigate to Learn More");
    };

    const handleChatbotClick = (event) => {
        event.preventDefault();
        console.log("Navigate to Chatbot");
    };

    const handleGetStartedClick = (event) => {
        event.preventDefault();
        console.log("Navigate to Get Started");
    };

    const handleContactClick = (event) => {
        event.preventDefault();
        console.log("Navigate to Contact");
    };


    return (
        <div>
            <header>
                <div className="navbar">
                    <div className="logo"><a href="#">MindfulLeaf</a></div>
                    <ul className={`links ${isMenuOpen ? 'open' : ''}`}>
                        <li><a href="landing page.html" onClick={handleHomeClick}>Home</a></li>
                        <li><a href="About.html" onClick={handleAboutClick}>About</a></li>
                        <li><a href="Symptoms.html" onClick={handleSymptomsClick}>Symptoms</a></li>
                        <li><a href="PlanGenerator.html" onClick={handlePlanGeneratorClick}>Plan Generator</a></li>
                        <li><a href="learn.html" onClick={handleLearnMoreClick}>Learn</a></li>
                        <li><a href="Chatbot.html" onClick={handleChatbotClick}>Chatbot</a></li>
                    </ul>
                    <a href="quiz ui.html" className="action_btn" onClick={handleGetStartedClick}>Get Started</a>
                    <div className="toggle_btn" onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
                    </div>
                </div>
                <div className={`dropdown_menu ${isMenuOpen ? 'open' : ''}`}>
                    <li><a href="landing page.html" onClick={handleHomeClick}>Home</a></li>
                    <li><a href="About.html" onClick={handleAboutClick}>About</a></li>
                    <li><a href="Symptoms.html" onClick={handleSymptomsClick}>Symptoms</a></li>
                    <li><a href="PlanGenerator.html" onClick={handlePlanGeneratorClick}>Plan Generator</a></li>
                    <li><a href="learn.html" onClick={handleLearnMoreClick}>Learn</a></li>
                    <li><a href="Chatbot.html" onClick={handleChatbotClick}>Chatbot</a></li>
                    <li><a href="quiz ui.html" className="action_btn" onClick={handleGetStartedClick}>Get Started</a></li>
                </div>
            </header>

            <main>
                <section id="hero">
                    <h1>Cultivate Your Inner Garden: Find Peace and Growth.</h1>
                    <p>Discover personalized strategies and resources to manage stress and anxiety effectively.</p>
                    <button onClick={handleLearnMoreClick}>Learn More</button>
                </section>

                <section id="features">
                    <div className="feature">
                        <img src="src/assets/magic.png" alt="Feature 1"/>
                        <h2>Personalized Plans</h2>
                        <p>Tailored strategies based on your unique needs and symptoms.</p>
                    </div>
                    <div className="feature">
                        <img src="src/assets/bot.svg" alt="Feature 2"/>
                        <h2>Interactive Chatbot</h2>
                        <p>Get instant support and guidance whenever you need it.</p>
                    </div>
                    <div className="feature">
                        <img src="src/assets/book.png" alt="Feature 3"/>
                        <h2>Educational Resources</h2>
                        <p>Access articles, guides, and tools to deepen your understanding.</p>
                    </div>
                </section>

                <section id="about">
                    <h2>About MindfulLeaf</h2>
                    <p>We are dedicated to providing accessible and effective tools for mental wellness. Our mission is to empower individuals to take control of their mental health journey through personalized support and educational resources.</p>
                </section>

                <section id="testimonials">
                    <h2>What Our Users Say</h2>
                    <div className="testimonial">
                        <p>"MindfulLeaf has been a game-changer for my anxiety. The personalized plans are incredibly helpful."</p>
                        <span>- Happy User</span>
                    </div>
                    <div className="testimonial">
                        <p>"I love the chatbot! It's like having a supportive friend available 24/7."</p>
                        <span>- Grateful User</span>
                    </div>
                </section>

                <section id="contact">
                    <h2>Contact Us</h2>
                    <p>Have questions or feedback? We'd love to hear from you.</p>
                    <button onClick={handleContactClick}>Get in Touch</button>
                </section>
            </main>

            <footer>
                <div className="footer-content">
                    <div className="footer-section about">\n                        <h3>MindfulLeaf</h3>
                        <p>Your partner in cultivating inner peace and growth.</p>
                    </div>
                    <div className="footer-section links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="About.html" onClick={handleAboutClick}>About Us</a></li>
                            <li><a href="contact.html" onClick={handleContactClick}>Contact Us</a></li>
                            <li><a href="privacy policy.html">Privacy Policy</a></li>
                            <li><a href="cookies policy.html">Cookies Policy</a></li>
                        </ul>
                    </div>
                    <div className="footer-section social">
                        <h3>Follow Us</h3>
                        {/* Add social media links here if needed */}
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2023 MindfulLeaf. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default LandingPage;
