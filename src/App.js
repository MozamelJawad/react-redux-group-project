import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Rockets from './components/Rockets';
import Missions from './components/Missions'; // Import Missions component
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} /> {/* Use 'element' prop instead of 'component' */}
        <Route path="/profile" element={<Profile />} /> {/* Use 'element' prop instead of 'component' */}
      </Routes>
    </Router>
  );
}

export default App;
