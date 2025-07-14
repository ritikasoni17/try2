import React from 'react';
// import { Link } from 'react-router-dom'; // Uncomment when setting up React Router
import './cookie-policy.css';

function CookiePolicy() {
  return (
    <div>
      <header className="site-header">
        <div className="logo-section">
          <img src="images/leaf.png" alt="Logo" className="logo" />
          <h1 className="site-title">Tridosha AI</h1>
        </div>
        <nav className="nav-links">
          {/* Replace with Link components when setting up React Router */}
          <a href="landing page.html">Home</a>
          <a href="About.html">About</a>
          <a href="contact.html">Contact</a>
          <a href="#">SignIn</a>
          <a href="#">SignUp</a>
          {/* <Link to="/">Home</Link> */}
          {/* <Link to="/about">About</Link> */}
          {/* <Link to="/contact">Contact</Link> */}
          {/* Add SignIn/SignUp links or buttons with handlers */}
        </nav>
      </header>

      <div className="container">
        <h1>Cookie Policy for Tridosha AI</h1>
        <p>Last updated: October 26, 2023</p>

        <p>
          This Cookie Policy explains what Cookies are and how We use them.
          You should read this policy so You can understand what type of cookies
          We use, or the information We gather using Cookies and how that information
          is used. This Cookie Policy has been created with the help of the
          <a href="https://www.termsfeed.com/cookie-policy-generator/" target="_blank">TermsFeed Cookie Policy Generator</a>.
        </p>

        <p>
          Cookies do not typically contain any information that personally identifies
          a user, but personal information that we store about You may be linked to
          the information stored in and obtained from Cookies. For further information
          on how We use, store and keep your personal data secure, see our Privacy Policy.
        </p>

        <p>
          We do not store sensitive personal information, such as mailing addresses,
          account passwords, etc. in the Cookies We use.
        </p>

        <h2>Interpretation and Definitions</h2>
        <h3>Interpretation</h3>
        <p>
          The words of which the initial letter is capitalized have meanings defined
          under the following conditions. The following definitions shall have the
          same meaning regardless of whether they appear in singular or in plural.
        </p>

        <h3>Definitions</h3>
        <p>For the purposes of this Cookie Policy:</p>
        <ul>
          <li>
            <strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our"
            in this Cookies Policy) refers to Tridosha AI.
          </li>
          <li>
            <strong>Cookies</strong> means small files that are placed upon Your computer,
            cell device or another digital machine by means of a website, containing
            info regarding Your browsing history on that website among its many uses.
          </li>
          <li>
            <strong>Website</strong> refers to Tridosha AI, accessible from
            <a href="https://tridoshaai.netlify.app/" target="_blank">https://tridoshaai.netlify.app/</a>
          </li>
          <li>
            <strong>You</strong> means the individual accessing or using the Website, or a
            company, or any legal entity on behalf of which such individual is
            accessing or using the Website, as applicable.
          </li>
        </ul>

        <h2>The use of the Cookies</h2>
        <h3>Type of Cookies We Use</h3>
        <p>
          Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies
          remain on your personal computer or mobile device when You go offline,
          while Session Cookies are deleted as soon as You close your web browser.
          We use both session and persistent cookies for the purposes set out below:
        </p>
        <ul>
          <li>
            <p><strong>Necessary / Essential Cookies</strong></p>
            <p>Type: Session Cookies</p>
            <p>Administered by: Us</p>
            <p>
              Purpose: These Cookies are essential to provide You with services available
              through the Website and to enable You to use some of its features.
              They help to authenticate users and prevent fraudulent use of user
              accounts. Without these Cookies, the services that You have asked for
              cannot be provided, and We only use these Cookies to provide You with
              those services.
            </p>
          </li>
          <li>
            <p><strong>Functionality Cookies</strong></p>
            <p>Type: Persistent Cookies</p>
            <p>Administered by: Us</p>
            <p>
              Purpose: These Cookies allow us to remember choices You make when
              You use the Website, such as remembering your login details or language
              preference. The purpose of these Cookies is to provide You with a more
              personal experience and to avoid You having to re-enter your preferences
              every time You use the Website.
            </p>
          </li>
        </ul>

        <h2>Your Choices Regarding Cookies</h2>
        <p>
          If You prefer to avoid the use of Cookies on the Website, first You
          must disable the use of Cookies in your browser and then delete the
          Cookies saved in your browser associated with this website. You may
          use this option for preventing the use of Cookies at any time.
        </p>
        <p>
          If You do not accept Our Cookies, You may experience some inconvenience
          in your use of the Website and some features may not function properly.
        </p>
        <p>
          If You'd like to delete Cookies or instruct your web browser to delete
          or refuse Cookies, please visit the help pages of your web browser.
        </p>
        <ul>
          <li>
            For the Chrome web browser, please visit this page from Google:
            <a href="https://support.google.com/accounts/answer/32050" target="_blank">
              https://support.google.com/accounts/answer/32050
            </a>
          </li>
          <li>
            For the Internet Explorer web browser, please visit this page from Microsoft:
            <a href="http://support.microsoft.com/kb/278835" target="_blank">
              http://support.microsoft.com/kb/278835
            </a>
          </li>
          <li>
            For the Firefox web browser, please visit this page from Mozilla:
            <a href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored" target="_blank">
              https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored
            </a>
          </li>
          <li>
            For the Safari web browser, please visit this page from Apple:
            <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank">
              https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac
            </a>
          </li>
        </ul>
        <p>
          For any other web browser, please visit your web browser's official
          web pages.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Cookies Policy, You can contact us:
        </p>
        <ul>
          <li>By email: support@Tridosha.ai</li>
        </ul>
      </div>

      {/* Footer component can be added here later */}
      {/* Assuming the footer is a separate component */}
      {/* <Footer /> */}
    </div>
  );
}

export default CookiePolicy;