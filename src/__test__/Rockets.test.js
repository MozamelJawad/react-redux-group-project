import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';
import Rockets from '../components/Rockets';
import { rocketsReserved } from '../redux/rockets/rocketsSlice';
import '@testing-library/jest-dom';

const mockStore = configureStore([]);

test('Renders rockets componenct correctly with all button actions', () => {
  const initialState = {
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
  };

  const store = mockStore(initialState);

  render(
    <Provider store={store}>
      <Router>
        <Rockets />
      </Router>
    </Provider>,
  );

  const rocket1 = screen.getByText('Rocket A');
  const description1 = screen.getByText('Rocket A Description');
  const button1 = screen.getByText('Cancel Reservation');

  const rocket2 = screen.getByText('Rocket B');
  const description2 = screen.getByText('Rocket B Description');
  const button2 = screen.getByText('Reserve Rockets');

  expect(rocket1).toBeInTheDocument();
  expect(description1).toBeInTheDocument();
  expect(button1).toBeInTheDocument();

  expect(rocket2).toBeInTheDocument();
  expect(description2).toBeInTheDocument();
  expect(button2).toBeInTheDocument();

  userEvent.click(button2);

  const expectedAction = rocketsReserved({ id: 2 });
  const actions = store.getActions();
  expect(actions).toContainEqual(expectedAction);
});
