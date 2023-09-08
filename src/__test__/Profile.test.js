import { configureStore } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import rocketsReducer from '../redux/rockets/rocketsSlice';
import missionsReducer from '../redux/missions/missionsSlice';
import Profile from '../components/Profile';

describe('Render profile components correctly', () => {
  test('Render joined mission and reserved rockets', () => {
    const store = configureStore({
      reducer: {
        rockets: rocketsReducer,
        missions: missionsReducer,
      },
      initialState: {
        rockets: {
          rockets: [
            { id: 1, name: 'Rocket A', reserved: true },
            { id: 2, name: 'Rocket B', reserved: false },
          ],
        },
        missions: {
          missions: [
            { id: 1, name: 'Missoion A', join: true },
            { id: 2, name: 'Missoion B', join: false },
          ],
        },
      },
    });

    const { container } = render(
      <Provider store={store}>
        <Router>
          <Profile />
        </Router>
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
