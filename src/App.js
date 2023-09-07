import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navigation from './components/Navigation';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import Profile from './components/Profile';
import { fetchRockets } from './redux/rockets/rocketsSlice';
import { fetchMissions } from './redux/missions/missionsSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
