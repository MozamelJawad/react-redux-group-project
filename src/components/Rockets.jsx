import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rocketsReserved } from '../redux/rockets/rocketsSlice';

function Rockets() {
  const { rockets, isLoading, error } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  if (isLoading) {
    return <div className="loading">Loading ... </div>;
  }

  if (error) {
    return (
      <div className="error">
        Error:
        { error }
      </div>
    );
  }

  const handleClick = (id) => {
    dispatch(rocketsReserved(id));
  };

  return (
    <main>
      <ul className="rocketsList">
        {
      rockets.map((rocket) => {
        const {
          id, name, description, image, reserved,
        } = rocket;
        return (
          <li key={id}>
            <img className="rocketImg" src={image} alt="" />
            <div className="rocketDetails">
              <h2 className="rocketName">{name}</h2>
              <p className="rocketDesc">
                {reserved && <button type="button" className="reseved-btn"> Reserved</button>}
                {' '}
&nbsp;
                { description }
              </p>

              <button
                type="button"
                className={`reserveBtn ${reserved ? 'booked' : 'noBooked'}`}
                onClick={() => handleClick({ id })}
              >
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
