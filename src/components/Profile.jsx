import React from 'react';
import '../redux/profiles/profile.css';
import { useSelector } from 'react-redux';

function Profile() {
  const { rockets } = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <div className="profile">
      <div className="mission">
        <h2>My Missions</h2>

      </div>

      <div className="rockets">
        <h2>My Rockets</h2>
        { reservedRockets.length > 0 ? (
          <div className="mission-list">
            {
                    reservedRockets.map((rocket) => <p key={rocket.id} className="profile-list">{rocket.name}</p>)
                }
          </div>
        ) : <p className="notExist">There is no reserved rocket.</p>}
      </div>
    </div>
  );
}

export default Profile;
