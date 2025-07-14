import React from 'react';
import { Link } from 'react-router-dom'; // Placeholder for React Router Link
import './PrivacyPolicy.css';

function PrivacyPolicy() {
  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <img src="images/leaf.png" alt="Tridosha Logo" />
          <span className="logo-text">Tridosha AI</span>
        </div>
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last updated: January 2025</p>
      </div>

      <div className="content">
        <h2>Introduction</h2>
        <p>
          Welcome to Tridosha AI. We are committed to protecting your privacy.
          This Privacy Policy explains how we collect, use, disclose, and
          safeguard your information when you visit our website and use our
          services.
        </p>

        <h2>Information We Collect</h2>
        <p>We may collect personal information that you voluntarily provide to us when you register on the platform, express an interest in obtaining information about us or our products and services, when you participate in activities on the platform or otherwise contact us.</p>
        <p>The personal information that we collect depends on the context of your interactions with us and the platform, the choices you make and the products and features you use. The personal information we collect may include the following:</p>
        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Age</li>
          <li>Gender</li>
          <li>Health information (including symptoms and wellness goals you share)</li>
          <li>Dosha assessment results</li>
          <li>Usage data (how you interact with the platform)</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use personal information collected via our platform for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations. We indicate the specific processing grounds we rely on next to each purpose listed below:</p>
        <ul>
          <li>To provide and maintain our services</li>
          <li>To personalize your experience on the platform</li>
          <li>To provide personalized Ayurvedic recommendations and wellness plans</li>
          <li>To communicate with you about our services and updates</li>
          <li>To analyze usage and improve our platform</li>
          <li>To ensure security and prevent fraud</li>
        </ul>

        <h2>Disclosure of Your Information</h2>
        <p>We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing efforts.</p>
        <p>We may also disclose your information in the following situations:</p>
        <ul>
          <li>When required by law or legal process</li>
          <li>To protect our rights and property</li>
          <li>With your consent</li>
        </ul>

        <h2>Security of Your Information</h2>
        <p>
          We use administrative, technical, and physical security measures to
          help protect your personal information. While we have taken reasonable
          steps to secure the personal information you provide to us, please be
          aware that despite our efforts, no security measures are perfect or
          impenetrable, and no method of data transmission can be guaranteed
          against any interception or other type of misuse.
        </p>

        <h2>Your Privacy Rights</h2>
        <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
        <ul>
          <li>The right to access your personal information</li>
          <li>The right to rectify inaccurate personal information</li>
          <li>The right to request erasure of your personal information</li>
          <li>The right to restrict processing of your personal information</li>
          <li>The right to data portability</li>
          <li>The right to object to the processing of your personal information</li>
        </ul>
        <p>To exercise these rights, please contact us using the contact information provided below.</p>

        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page. You are
          advised to review this Privacy Policy periodically for any changes.
        </p>

        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy, please contact us
            at:
          </p>
          <p>
            Email: privacy@Tridosha.ai<br />
            Phone: +1 (555) 123-4567
          </p>
        </div>
      </div>

      <Link to="/" className="back-link"> {/* Placeholder Link */}
        <svg
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          ></path>
        </svg>
        Back to Home
      </Link>

      <div className="footer">
        <p>&copy; 2025 Tridosha AI. All rights reserved.</p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;