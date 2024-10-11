import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminScreen from './AdminScreen';
import JoinScreen from './JoinScreen';
import PlayerScreen from './PlayerScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminScreen />} />
        <Route path="/join" element={<JoinScreen />} />
        <Route path="/player" element={<PlayerScreen />} />
      </Routes>
    </Router>
  );
}
export default App;