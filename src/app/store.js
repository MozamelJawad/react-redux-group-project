import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from '../redux/rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
  },
});

export default store;
