// QuizApp.js
import React, { useState } from 'react';
import './QuizApp.css';

const questions = [
  {
    q: '1). What is the national flower of India?',
    a: 'Lotus',
    b: 'Rose',
    c: 'Sunflower',
    d: 'Hibiscus',
    correct: 'a',
  },
  {
    q: '2). What is the capital city of India?',
    a: 'New Delhi',
    b: 'Mumbai',
    c: 'Kolkata',
    d: 'Chennai',
    correct: 'a',
  },
  {
    q: '3). Which is the national sport of India?',
    a: 'Cricket',
    b: 'Hockey',
    c: 'Kabadi',
    d: 'Football',
    correct: 'b',
  },
  {
    q: '4). Who is popularly known as the “Iron Man” of India?',
    a: 'Lal Bahadur Shastri',
    b: 'Sardar Vallabh Bhai Patel',
    c: 'Mahatma Gandhi',
    d: 'Dr. B.R Ambedkar',
    correct: 'b',
  },
  {
    q: '5). Who discovered India?',
    a: 'Vasco da Gama',
    b: 'Christopher Columbus',
    c: 'James Cook',
    d: 'Willem Janszoon',
    correct: 'a',
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
    <>
    <header className="header">
        <h1>Know More About India!</h1>
      </header>
    <div className="quiz-container">
      
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
              {index > 0 && 
                <button className="btn" onClick={handlePrevious}>Previous</button>
              }
              {index < questions.length - 1 &&
                <button className="btn" onClick={handleNext}>Next</button>
              }
              <button className="btn-submit" onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        </main>
      )}
    </div>
    </>
  );
  
};

export default QuizApp;
