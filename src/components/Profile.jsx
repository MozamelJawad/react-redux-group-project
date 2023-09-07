import React from 'react';
import '../redux/profiles/profile.css';
import { useSelector } from 'react-redux';

function Profile() {
  const { rockets } = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  const { missions } = useSelector((state) => state.missions);
  const joinedMission = missions.filter((mission) => mission.join);

  return (
    <div className="profile">
      <div className="mission">
        <h2>My Missions</h2>
        { joinedMission.length > 0 ? (
          <div className="mission-list">
            {
                    joinedMission.map((mission) => (
                      <p
                        key={mission.mission_id}
                        className="profile-list"
                      >
                        {mission.mission_name}
                      </p>
                    ))
                }
          </div>
        ) : <p className="notExist">There is no joined mission.</p>}
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
