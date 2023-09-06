import React from 'react';
import { NavLink } from 'react-router-dom'; // Import Link and NavLink
import logo from '../assets/planet.png';

const Navigation = () => (
  <header>
    <div className="logo">
      <img src={logo} alt="Logo" />
      <span>Space Travelers&apos; Hub</span>
    </div>
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              textDecoration: isActive ? 'underline' : 'none',
            })}
          >
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/missions"
            style={({ isActive }) => ({
              textDecoration: isActive ? 'underline' : 'none',
            })}
          >
            Missions
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile"
            style={({ isActive }) => ({
              textDecoration: isActive ? 'underline' : 'none',
            })}
          >
            My Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navigation;
