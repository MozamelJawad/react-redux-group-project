import { configureStore } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import missionsReducer from '../redux/missions/missionsSlice';
import Missions from '../components/Missions';

describe('Render Missions component correctly', () => {
  test('Render missions component with actions correctly', async () => {
    const store = configureStore({
      reducer: {
        missions: missionsReducer,
      },
      initialState: {
        missions: {
          missions: [
            {
              mission_id: '1',
              mission_name: 'Mission A',
              description: 'Mission A Description',
              join: true,
            },
            {
              mission_id: '2',
              mission_name: 'Mission B',
              description: 'Mission B Description',
              join: false,
            },
          ],
          isLoading: false,
          error: '',
        },
      },
    });

    const { container } = render(
      <Provider store={store}>
        <Router>
          <Missions />
        </Router>
      </Provider>,
    );

    expect(container).toMatchSnapshot();
  });
});
