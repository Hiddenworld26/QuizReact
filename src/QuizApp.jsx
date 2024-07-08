import React, { useState } from 'react';
import './QuizApp.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

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
    if (!selectedOption) {
      toast.error('Please select an option!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    

    setSelectedOption('');
    if (index < questions.length - 1) {
      setIndex(index + 1);
    } else {
      setShowScore(true);
      if(score==5)
      {
        toast.success('All answers are  Right!', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
      }

      else
      {
        toast.error(`${score} are correct!`, {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
      }
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
      <ToastContainer />
      {showScore ? (
        <div className="score-container">
          <h3 className="score-text">Hi, you've scored {score} / {questions.length}</h3>
        </div>
      ) : (
        <main className="main">
          <div className="container">
            <h2 id="question">{questions[index].q}</h2>
            <div className="options">
              <input
                type="radio"
                value="a"
                id="option1"
                checked={selectedOption === 'a'}
                onChange={handleOptionChange}
              />
              <label htmlFor="option1">
                <span className="circle"><FaChevronRight /></span> {questions[index].a}
              </label>
            </div>
            <div className="options">
              <input
                type="radio"
                value="b"
                id="option2"
                checked={selectedOption === 'b'}
                onChange={handleOptionChange}
              />
              <label htmlFor="option2">
                <span className="circle"><FaChevronRight /></span> {questions[index].b}
              </label>
            </div>
            <div className="options">
              <input
                type="radio"
                value="c"
                id="option3"
                checked={selectedOption === 'c'}
                onChange={handleOptionChange}
              />
              <label htmlFor="option3">
                <span className="circle"><FaChevronRight /></span> {questions[index].c}
              </label>
            </div>
            <div className="options">
              <input
                type="radio"
                value="d"
                id="option4"
                checked={selectedOption === 'd'}
                onChange={handleOptionChange}
              />
              <label htmlFor="option4">
                <span className="circle"><FaChevronRight /></span> {questions[index].d}
              </label>
            </div>

            <div className="button-container">
              {index !== 0 && (
                <button className="btn btn-center" onClick={handlePrevious}>
                  <FaChevronLeft /> 
                </button>
              )}
              {index !== questions.length - 1 && (
                <button className="btn btn-center" onClick={handleNext}>
                 <FaChevronRight />
                </button>
              )}
             
            </div>

            <button className="btn btn-submit" onClick={handleSubmit}>
                Submit
              </button>
          </div>
        </main>
      )}
    </div>
  );
};

export default QuizApp;
