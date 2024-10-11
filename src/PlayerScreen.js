import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const questions = [
    {
        question: 'What is the capital of India?',
        options: ['Mumbai', 'Delhi', 'Jaipur', 'Nagpur'],
        answer: 'Delhi',
      },
      {
        question: 'Which planet is known as the Red Planet?',
        options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
        answer: 'Mars',
      },
      {
        question: 'National Animal of India',
        options: ['Tiger', 'Elephant', 'Lion', 'Dog'],
        answer: 'Lion',
      },
      {
        question: 'What is the largest mammal in the world?',
        options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
        answer: 'Blue Whale',
      },
      {
        question: 'Independence day of India',
        options: ['15 Aug', '22 Aug', '26 Jan', '2 Oct'],
        answer: '15 Aug',
      }
];

const PlayerScreen = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [message, setMessage] = useState('');
  const location = useLocation();
  const playerName = new URLSearchParams(location.search).get('name');

  const handleSubmit = (e) => {
    e.preventDefault();
    const question = questions[currentQuestion];
    if (selectedOption === question.answer) {
      setMessage(`Congratulations, ${playerName}! Correct answer.`);
    } else {
      setMessage(`Sorry, ${playerName}. Wrong answer.`);
    }
  };

  const handleNextQuestion = () => {
    // Proceed to the next question
    setCurrentQuestion((prev) => (prev + 1) % questions.length);
    // Reset state
    setSelectedOption('');
    setMessage('');
  };

  const question = questions[currentQuestion];

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Question for {playerName}</h1>
      <h2>{question.question}</h2>
      <form onSubmit={handleSubmit}>
        {/* Render the options as radio buttons */}
        {question.options.map((option, index) => (
          <div key={index}>
            <label>
              <input
                type="radio"
                value={option}
                checked={selectedOption === option}
                onChange={() => setSelectedOption(option)}
                required
              />
              {option}
            </label>
          </div>
        ))}
        <button type="submit">Submit Answer</button>
      </form>
      {message && <h3>{message}</h3>}
      
      {/* Next Question Button */}
      {message && (
        <button onClick={handleNextQuestion}>Next Question</button>
      )}
    </div>
  );
};

export default PlayerScreen;
