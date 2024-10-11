
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const JoinScreen = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store the player's name and navigate to the game screen
    navigate(`/player?name=${name}`);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Join the Game</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">Join</button>
      </form>
    </div>
  );
};

export default JoinScreen;
