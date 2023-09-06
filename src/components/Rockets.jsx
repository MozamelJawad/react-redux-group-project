import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets, rocketsReserved } from '../redux/rockets/rocketsSlice';
import '../redux/rockets/rockets.css';

function Rockets() {
  const { rockets, isLoading, error } = useSelector((store) => store.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  if (isLoading) {
    return <div><h3>Loading ... </h3></div>
  }

  if (error) {
    return <div><h3>Error: {error}</h3></div>
  }

  const handleClick = (id) => {
    dispatch(rocketsReserved(id));
  };

  return (
    <main>
      <ul className="rocketsList">
        {
      rockets.map((rocket) => {
        const { id, name, description, image, reserved } = rocket;
        return (
          <li key={id}>
            <img className="rocketImg" src={image} alt="" />
            <div className="rocketDetails">
              <h2 className="rocketName">{name}</h2>
              <p className="rocketDesc">{description}</p>

              <button
                type="button"
                className={`reserveBtn ${reserved ? 'booked' : 'noBooked'}`}

                onClick={() => handleClick({ id })} >
                  
               { reserved ? 'Cancel Reservation' : 'Reserve Rockets'}
              </button>
            </div>
          </li>
        );
      })
      }
      </ul>
    </main>
  );
}

export default Rockets;
