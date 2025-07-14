import React, { useState } from 'react';
import './contact.css'; // Assuming you'll have a contact.css file
import leafImage from './images/leaf.png'; // Update with correct path if needed

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
 successMessageVisible: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ ...formData, successMessageVisible: true });
    // Simulate form submission success and reset
 setFormData({ name: '', email: '', subject: '', message: '', successMessageVisible: true });
 setTimeout(() => {
 setFormData(prevState => ({ ...prevState, successMessageVisible: false }));
    }, 5000);
  };

  // Placeholder functions for modal handling (assuming modals are handled at a higher level)
  const openSignIn = () => {
    console.log('Open Sign In Modal');
    // Implement logic to show Sign In modal
  };

  const openSignUp = () => {
    console.log('Open Sign Up Modal');
    // Implement logic to show Sign Up modal
  };

  return (
    <div>
      <header className="site-header">
        <div className="logo-section" id="main-content">
          <img src={leafImage} alt="Logo" className="logo" />
          <h1 className="site-title">Tridosha AI</h1>
        </div>
        <nav className="nav-links">
          <a href="landing page.html">Home</a>
          <a href="About.html">About</a>
          <a href="contact.html">Contact</a>
          <button onClick={openSignIn}>SignIn</button>
          <button onClick={openSignUp}>SignUp</button>
        </nav>
      </header>

 <div className="container">
 <div className="header-section">
 <h1>Get in Touch</h1>
 <p>Have questions about Ayurveda or need help with your wellness journey?<br />
 We're here to support you every step of the way.</p>
 </div>

 <div className="content-grid">
 <div className="contact-form">
 <h2>Send us a Message</h2>
 <p className="subtitle">Fill out the form below and we'll get back to you as soon as possible.</p>

 {formData.successMessageVisible && (
 <div className="success-message">
 Thank you for your message! We'll get back to you soon.
 </div>
 )}

 <form onSubmit={handleSubmit}>
 <div className="form-row">
 <div className="form-group">
 <label htmlFor="name">Name</label>
 <input
 type="text"
 id="name"
 name="name"
 placeholder="Your full name"
 value={formData.name}
 onChange={handleInputChange}
 required
 />
 </div>
 <div className="form-group">
 <label htmlFor="email">Email</label>
 <input
 type="email"
 id="email"
 name="email"
 placeholder="your@email.com"
 value={formData.email}
 onChange={handleInputChange}
 required
 />
 </div>
 </div>

 <div className="form-group full-width">
 <label htmlFor="subject">Subject</label>
 <input
 type="text"
 id="subject"
 name="subject"
 placeholder="What's this about?"
 value={formData.subject}
 onChange={handleInputChange}
 required
 />
 </div>

 <div className="form-group full-width">
 <label htmlFor="message">Message</label>
 <textarea
 id="message"
 name="message"
 placeholder="Tell us how we can help you..."
 value={formData.message}
 onChange={handleInputChange}
 required
 ></textarea>
 </div>

 <button type="submit" className="submit-btn">Send Message</button>
 </form>
 </div>

 <div className="contact-info">
 <h2>Contact Information</h2>
 <p className="subtitle">Reach out to us through any of these channels:</p>

 <div className="contact-item">
 <div className="contact-icon">📧</div>
 <div className="contact-details">
 <h3>Email</h3>
 <p>support@Tridosha.ai</p>
 </div>
 </div>

 <div className="contact-item">
 <div className="contact-icon">📞</div>
 <div className="contact-details">
 <h3>Phone</h3>
 <p>+1 (555) 123-4567</p>
 </div>
 </div>

 <div className="contact-item">
 <div className="contact-icon">📍</div>
 <div className="contact-details">
 <h3>Address</h3>
 <p>123 Wellness Street<br />
 Mindful City, MC 12345<br />
 United States</p>
 </div>
 </div>
 </div>
 </div>

 <div className="faq-section">
 <h2>Frequently Asked Questions</h2>

 <div className="faq-item">
 <div className="faq-question">How accurate are the AI recommendations?</div>
 <div className="faq-answer">Our AI is trained on traditional Ayurvedic texts and validated by certified practitioners, providing guidance with high accuracy for general wellness.</div>
 </div>

 <div className="faq-item">
 <div className="faq-question">Is this a replacement for medical care?</div>
 <div className="faq-answer">No, our platform provides wellness guidance and should complement, not replace, professional medical advice.</div>
 </div>

 <div className="faq-item">
 <div className="faq-question">How do I get started?</div>
 <div className="faq-answer">Simply take our dosha assessment on the homepage to receive personalized recommendations based on your unique constitution.</div>
 </div>
 </div>
 </div>

      {/* Sign In Modal */}
      {/* Assuming modals are separate components or handled in App.js */}
      <div className="modal-overlay" id="signinModal">
        <div className="signin-modal">
          <span className="close-btn" id="closeSignInModal">×</span>
          <h2>Welcome Back</h2>

          <form id="signinForm">
            <div className="input-with-icon">
              <input type="email" placeholder="Email" required />
              {/* <i className="input-icon" data-lucide="mail"></i> */} {/* Placeholder for icon */}
            </div>

            <div className="password-container">
              <input
                type="password"
                placeholder="Password"
                id="signInPasswordField"
                required
              />
              <button
                className="toggle-password"
                type="button"
                // onClick={() => togglePassword('signInPasswordField', 'signInEyeIcon')} // Placeholder for toggle function
              >
                {/* <i id="signInEyeIcon" data-lucide="eye"></i> */} {/* Placeholder for icon */}
              </button>
            </div>

            <div className="checkbox-container">
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">Remember me</label>
            </div>

            <button type="submit">Sign In</button>
          </form>

          <div className="modal-footer">
            <p><a href="#">Forgot password?</a></p>
            <p>
              Don't have an account?
              <a href="#" onClick={() => console.log('Switch to Sign Up')}>Sign Up</a> {/* Placeholder for switch function */}
            </p>
          </div>
        </div>
      </div>

      {/* Sign Up Modal */}
      {/* Assuming modals are separate components or handled in App.js */}
      <div className="modal-overlay" id="signupModal">
        <div className="signup-modal">
          <span className="close-btn" id="closeSignUpModal">×</span>
          <h2>Create Account</h2>

          <form id="signupForm">
            <div className="input-with-icon">
              <input
                type="text"
                placeholder="Username"
                id="usernameField"
                required
              />
              {/* <i className="input-icon" data-lucide="user"></i> */} {/* Placeholder for icon */}
            </div>

            <div className="input-with-icon">
              <input
                type="email"
                placeholder="Email"
                id="emailField"
                required
              />
              {/* <i className="input-icon" data-lucide="mail"></i> */} {/* Placeholder for icon */}
            </div>

            <div className="password-container">
              <input
                type="password"
                placeholder="Password"
                id="signUpPasswordField"
                required
              />
              <button
                className="toggle-password"
                type="button"
                // onClick={() => togglePassword('signUpPasswordField', 'signUpEyeIcon')} // Placeholder for toggle function
              >
                {/* <i id="signUpEyeIcon" data-lucide="eye"></i> */} {/* Placeholder for icon */}
              </button>
            </div>
            <div className="password-error" id="passwordError">
              Password must contain at least 8 characters, one uppercase
              letter, one number, and one special symbol.
            </div>

            <div className="checkbox-container">
              <input type="checkbox" id="agreeTerms" required />
              <label htmlFor="agreeTerms"
                >I agree to the terms and conditions</label
              >
            </div>

            <button type="submit" id="registerBtn" disabled>Register</button>
          </form>

          <div className="modal-footer">
            <p>
              Already have an account?
              <a href="#" onClick={() => console.log('Switch to Sign In')}>Sign In</a> {/* Placeholder for switch function */}
            </p>
          </div>
        </div>
      </div>

      {/* Placeholder for Footer */}
      {/* Assuming footer is a separate component or handled in App.js */}
      {/* <Footer /> */}

      {/* Placeholder for Modals */}
      {/* Assuming modals are separate components or handled in App.js */}
      {/* <SignInModal /> */}
 </div>
  );
}

export default Contact;