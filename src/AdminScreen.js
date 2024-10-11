import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

const questions = [
  {
    question: 'What is the capital of India?',
    options: ['Mumbai', 'Delhi', 'Jaipur', 'Nagpur'],
    answer: 'Mumbai',
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

const AdminScreen = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const question = questions[currentQuestion];
  
  const nextQuestion = () => {
    setCurrentQuestion((prev) => (prev + 1) % questions.length);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>KBC Game - Scan QR-CODE to join the game</h1>
      
      {/* Single QR Code for all players to join the game */}
      <QRCodeSVG value="https://kbcgame-bsmgumvv4-aviraj-satputes-projects.vercel.app/join" size={256} />
      
      <h2>{question.question}</h2>
      <div>
        {question.options.map((option, index) => (
          <button key={index}>{option}</button>
        ))}
      </div>
      <button onClick={nextQuestion}>Next Question</button>
    </div>
  );
};

export default AdminScreen;


