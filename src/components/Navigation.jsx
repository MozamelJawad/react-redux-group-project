import React from 'react';
import { NavLink } from 'react-router-dom'; // Import Link and NavLink
import logo from '../assets/planet.png';

const Navigation = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo" />
        <span>Space Travelers' Hub</span>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/rockets" activeClassName="active">
              Rockets
            </NavLink>
          </li>
          <li>
            <NavLink to="/missions" activeClassName="active">
              Missions
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" activeClassName="active">
              My Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
