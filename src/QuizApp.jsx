
import React, { useState } from 'react';
import './QuizApp.css';

const questions = [
  {
    q: '1). What is the capital of France?',
    a: 'Paris',
    b: 'London',
    c: 'Berlin',
    d: 'Madrid',
    correct: 'a',
  },
  {
    q: '2). Which planet is known as the Red Planet?',
    a: 'Earth',
    b: 'Mars',
    c: 'Jupiter',
    d: 'Saturn',
    correct: 'b',
  },
  {
    q: '3). Who wrote "To Kill a Mockingbird"?',
    a: 'Harper Lee',
    b: 'Mark Twain',
    c: 'Ernest Hemingway',
    d: 'F. Scott Fitzgerald',
    correct: 'a',
  },
  {
    q: '4). What is the largest ocean on Earth?',
    a: 'Atlantic Ocean',
    b: 'Indian Ocean',
    c: 'Arctic Ocean',
    d: 'Pacific Ocean',
    correct: 'd',
  },
  {
    q: '5). Who painted the Mona Lisa?',
    a: 'Vincent van Gogh',
    b: 'Pablo Picasso',
    c: 'Leonardo da Vinci',
    d: 'Claude Monet',
    correct: 'c',
  },
];

const QuizApp = () => {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [showScore, setShowScore] = useState(false);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = () => {
    if (selectedOption === questions[index].correct) {
      setScore(score + 1);
    }
    setSelectedOption('');
    if (index < questions.length - 1) {
      setIndex(index + 1);
    } else {
      setShowScore(true);
    }
  };

  const handlePrevious = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const handleNext = () => {
    if (index < questions.length - 1) {
      setIndex(index + 1);
    }
  };

  return (
    <div className="quiz-container">
      <header className={`header ${showScore ? 'down' : ''}`}>
        <h1>Random Quiz Challenge!</h1>
      </header>
      {showScore ? (
        <div className="score-container">
          <h3 className="score-text">Hi, you've scored {score} / {questions.length}</h3>
        </div>
      ) : (
        <main className="main">
          <div className="container">
            <h2 id="question">{questions[index].q}</h2>
            <div className="options">
              <input type="radio" value="a" id="option1" checked={selectedOption === 'a'} onChange={handleOptionChange} />
              <label htmlFor="option1">{questions[index].a}</label>
            </div>
            <div className="options">
              <input type="radio" value="b" id="option2" checked={selectedOption === 'b'} onChange={handleOptionChange} />
              <label htmlFor="option2">{questions[index].b}</label>
            </div>
            <div className="options">
              <input type="radio" value="c" id="option3" checked={selectedOption === 'c'} onChange={handleOptionChange} />
              <label htmlFor="option3">{questions[index].c}</label>
            </div>
            <div className="options">
              <input type="radio" value="d" id="option4" checked={selectedOption === 'd'} onChange={handleOptionChange} />
              <label htmlFor="option4">{questions[index].d}</label>
            </div>

            <div className="button-container">
              {index > 0 && index < questions.length - 1 && 
                <button className="btn" onClick={handlePrevious}>Previous</button>
              }
              {index === questions.length - 1 &&
                <button className="btn-center" onClick={handlePrevious}>Previous</button>
              }
              {index < questions.length - 1 &&
                <button className={`btn ${index === 0 ? 'btn-center' : ''}`} onClick={handleNext}>Next</button>
              }
              {index === questions.length - 1 && (
                <button className="btn-submit" onClick={handleSubmit}>Submit</button>
              )}
            </div>
          </div>
        </main>
      )}
    </div>
  );
};

export default QuizApp;
