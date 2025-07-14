import React from 'react';
import './Symptoms.css';

function Symptoms() {
  return (
    <div>
      <div className="Symptoms">
        <div className="arrow">
          <button className="arrow-btn" onClick={() => window.location.href='dashboard.html'}>
            <img className="arrow-img" src="./images/down-arrow.png" alt="" />Back to Dashboard
          </button>
        </div>

        <header>
          <div className="left">
            <div className="header-bot-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bot h-6 w-6 text-white">
                <path d="M12 8V4H8"></path>
                <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                <path d="M2 14h2"></path>
                <path d="M20 14h2"></path>
                <path d="M15 13v2"></path>
                <path d="M9 13v2"></path>
              </svg>
            </div>
            <div className="left-data">
              <h1>Symptom Analysis</h1>
              <p>Analyze your symptoms to understand your current state</p>
            </div>
          </div>
        </header>

        <main>
          <p className="main-heading">Analyze Your Symptoms</p>
          <div className="Symptoms-text-heading">
            <p>List your current symptoms or health concerns:</p>
          </div>
          <textarea rows="10" name="Symptoms" id="Symptoms" placeholder="e.g., Frequent headaches, digestive issues, fatigue, anxiety, skin problems..."></textarea>

          <button className="get-solution">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-activity mr-2 h-5 w-5">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
            Analyze Symptoms
          </button>
        </main>
      </div>
    </div>
  );
}

export default Symptoms;