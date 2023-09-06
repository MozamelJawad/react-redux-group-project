import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from '../redux/rockets/rocketsSlice';
import missionsReducer from '../redux/missions/missionsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsReducer,
  },
});

export default store;
