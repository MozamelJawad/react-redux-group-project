import React from 'react';
import logo from '../assets/planet.png';

const Navigation = () => {
  return (
    <header>
      <div className="logo">
      <img src={logo} alt="Logo" /> {/* Use the imported logo */}
        <span>Space Travelers' Hub</span>
      </div>
      <nav>
        <ul>
          <li><a href="/rockets">Rockets</a></li>
          <li><a href="/missions">Missions</a></li>
          <li><a href="/profile">My Profile</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
