import { configureStore } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import rocketsReducer from '../redux/rockets/rocketsSlice';
import Rockets from '../components/Rockets';

describe('Render Rockets view correctly', () => {
  test('Render rockets componect with actions correctly', () => {
    const store = configureStore({
      reducer: {
        rockets: rocketsReducer,
      },
      initialState: {
        rockets: {
          rockets: [
            {
              id: 1, name: 'Rocket A', image: 'image1.jpg', description: 'Rocket A Description', reserved: true,
            },
            {
              id: 2, name: 'Rocket B', image: 'image2.jpg', description: 'Rocket B Description', reserved: false,
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
          <Rockets />
        </Router>
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
