import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rocketsSlice';
import '../redux/rockets/rockets.css';

function Rockets() {
  const { rockets } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <main>
      <ul className="rocketsList">
        { rockets.map((rocket) => (
          <li key={rocket.id}>
            <img className="rocketImg" src={rocket.image} alt="" />
            <div className="rocketDetails">
              <h2 className="rocketName">{rocket.name}</h2>
              <p className="rocketDesc">{rocket.description}</p>
              <button type="button" className="reserveBtn">Reserve Rocket</button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Rockets;
