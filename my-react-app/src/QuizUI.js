import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function QuizUI() {
  const [userName, setUserName] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [quizData, setQuizData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate fetching quiz data (replace with actual data fetch)
    const fetchedQuizData = [
      {
        category: 'Physical Characteristics',
        question: 'How would you describe your body frame?',
        options: [
          { text: 'Thin and light', value: 'Vata' },
          { text: 'Medium and muscular', value: 'Pitta' },
          { text: 'Large and sturdy', value: 'Kapha' },
        ],
      },
      {
        category: 'Digestion',
        question: 'How is your digestion typically?',
        options: [
          { text: 'Irregular, prone to gas/bloating', value: 'Vata' },
          { text: 'Strong, quick, sometimes acidic', value: 'Pitta' },
          { text: 'Slow and heavy', value: 'Kapha' },
        ],
      },
      {
        category: 'Mental & Emotional State',
        question: 'Which best describes your typical mental state?',
        options: [
          { text: 'Creative, sometimes anxious or worried', value: 'Vata' },
          { text: 'Intelligent, focused, can be irritable', value: 'Pitta' },
          { text: 'Calm, stable, sometimes resistant to change', value: 'Kapha' },
        ],
      },
      {
        category: 'Energy Levels',
        question: 'How are your energy levels throughout the day?',
        options: [
          { text: 'Variable, bursts of energy followed by fatigue', value: 'Vata' },
          { text: 'Strong and consistent, driven', value: 'Pitta' },
          { text: 'Steady and enduring, slow to start', value: 'Kapha' },
        ],
      },
      {
        category: 'Sleep Patterns',
        question: 'How do you typically sleep?',
        options: [
          { text: 'Light sleeper, sometimes have insomnia', value: 'Vata' },
          { text: 'Sound sleeper, but wake up easily if hot', value: 'Pitta' },
          { text: 'Deep and long sleeper, hard to wake up', value: 'Kapha' },
        ],
      },
      {
        category: 'Response to Stress',
        question: 'How do you typically respond to stress?',
        options: [
          { text: 'Become anxious, worried, or fearful', value: 'Vata' },
          { text: 'Become irritable, frustrated, or angry', value: 'Pitta' },
          { text: 'Become withdrawn or resistant, may overeat', value: 'Kapha' },
        ],
      },
      {
        category: 'Climate Preference',
        question: 'What climate do you prefer?',
        options: [
          { text: 'Warm and humid', value: 'Vata' },
          { text: 'Cool and dry', value: 'Pitta' },
          { text: 'Warm and dry', value: 'Kapha' },
        ],
      },
      {
        category: 'Skin and Hair',
        question: 'Describe your skin and hair:',
        options: [
          { text: 'Dry, thin, prone to cracking', value: 'Vata' },
          { text: 'Oily, prone to breakouts, fine hair', value: 'Pitta' },
          { text: 'Smooth, thick, oily, abundant hair', value: 'Kapha' },
        ],
      },
    ];
    setQuizData(fetchedQuizData);

    // Simulate fetching username from localStorage
    const storedUserName = localStorage.getItem('userName') || 'Friend'; // Default to 'Friend' if not found
    setUserName(storedUserName);
  }, []);

  const handleAnswerChange = (event) => {
    const { name, value } = event.target;
    setAnswers({ ...answers, [name]: value });
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const submitQuiz = () => {
    // Calculate Dosha based on answers (simplified for example)
    const doshaCounts = { Vata: 0, Pitta: 0, Kapha: 0 };
    Object.values(answers).forEach(dosha => {
      if (doshaCounts[dosha] !== undefined) {
        doshaCounts[dosha]++;
      }
    });

    const dominantDosha = Object.keys(doshaCounts).reduce((a, b) => doshaCounts[a] > doshaCounts[b] ? a : b, 'Vata');

    console.log('Quiz submitted. Dominant Dosha:', dominantDosha);
    localStorage.setItem('dominantDosha', dominantDosha);
    navigate('/result'); // Navigate to the result page (replace with actual path)
  };

  if (quizData.length === 0) {
    return <div>Loading Quiz...</div>;
  }

  const currentQuestion = quizData[currentQuestionIndex];
  const totalQuestions = quizData.length;
  const percentComplete = Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100);

  return (
    <div className="container">
      <h1 className="title">Dosha Assessment</h1>
      <p className="subtitle" id="username">
        Hi {userName}! Answer these questions to discover your unique constitution
      </p>

      {/* Progress Section */}
      <div className="progress-section">
        <span id="question-count">Question {currentQuestionIndex + 1} of {totalQuestions}</span>
        <span id="percent-complete">{percentComplete}% Complete</span>
      </div>

      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${percentComplete}%` }} id="progress-fill"></div>
      </div>

      {/* Question Card */}
      <div className="card">
        <div className="card-header">
          <span className="dot"></span>
          <span className="category" id="category">{currentQuestion.category}</span>
        </div>

        <h2 className="question" id="question-text">{currentQuestion.question}</h2>

        <form className="options" id="options-form">
          {currentQuestion.options.map((option, index) => (
            <label key={index} className="custom-radio">
              <input
                type="radio"
                name={`question-${currentQuestionIndex}`}
                value={option.value}
                checked={answers[`question-${currentQuestionIndex}`] === option.value}
                onChange={handleAnswerChange}
              />
              <span className="radio-circle"></span>
              {option.text}
            </label>
          ))}
        </form>

        <div className="buttons">
          <button className="btn previous" onClick={prevQuestion} disabled={currentQuestionIndex === 0}>
            <span className="text">Previous</span>
          </button>
          {currentQuestionIndex < quizData.length - 1 ? (
            <button className="btn next" onClick={nextQuestion}>
              <span className="text">Next</span>
            </button>
          ) : (
            <button className="btn res" id="get-results-btn" onClick={submitQuiz}>
              <span className="text">Get Results</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default QuizUI;
