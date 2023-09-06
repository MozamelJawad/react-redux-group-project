import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, joinMission } from '../redux/missions/missionsSlice';
import '../redux/missions/missions.css';

function Missions() {
  const { missions, isLoading, error } = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="loading">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        Error:
        {error}
      </div>
    );
  }

  return (
    <div className="table-container">
      <table className="mission-table">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th className="status">Status</th>
            <th className="status"></th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => {
        const {
          mission_id, mission_name, description, join,
        } = mission;
          
          return (
            <tr key={mission_id}>
              <td className="missionName">{mission_name}</td>
              <td className="missionDesc">{description}</td>
              <td className="status">
                <button type="button"
                  className={`${join ? 'activeMember' : 'notMember'} memberBtn`}>
                   {join ? 'Active Member' : 'Not a Member'}
                </button>
              </td>
              <td className="status">
                  <button
                    type="button"
                    className={`leaveBtnMission ${join ? 'joined' : 'notJoined'}`}
                    onClick={() => 
                    dispatch(joinMission({mission_id}))}
                    >
                      {join ? 'Leave Mission' : 'Join Misson'}
                    </button>
              </td>
            </tr>
          );
                  })
        }
        </tbody>
      </table>
    </div>
  );
}

export default Missions;
