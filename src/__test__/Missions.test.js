import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { joinMission } from '../redux/missions/missionsSlice';
import Missions from '../components/Missions';
import '@testing-library/jest-dom';

const mockStore = configureStore([]);

test('Render mission component with all button actions', () => {
  const initialState = {
    missions: {
      missions: [
        {
          mission_id: 1, mission_name: 'Mission A', description: 'Description Mission A', join: true,
        },
        {
          mission_id: 2, mission_name: 'Mission B', description: 'Description Mission B', join: false,
        },
      ],
      loading: false,
      error: null,
    },
  };

  const store = mockStore(initialState);

  render(
    <Provider store={store}>
      <Router>
        <Missions />
      </Router>
    </Provider>,
  );

  const mission1 = screen.getByText('Mission A');
  const description1 = screen.getByText('Description Mission A');
  const mission2 = screen.getByText('Mission B');
  const description2 = screen.getByText('Description Mission B');

  expect(mission1).toBeInTheDocument();
  expect(description1).toBeInTheDocument();
  expect(mission2).toBeInTheDocument();
  expect(description2).toBeInTheDocument();

  const missionJoinedBtn = screen.getByText('Join Mission');
  userEvent.click(missionJoinedBtn);

  const expectedAction = joinMission({ mission_id: 2 });
  const actions = store.getActions();
  expect(actions).toContainEqual(expectedAction);
});
