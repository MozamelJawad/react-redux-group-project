import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  missions: [],
  isLoading: false,
  error: '',
};

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  const response = await axios('https://api.spacexdata.com/v3/missions');
  return response.data;
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = '';
      state.missions = action.payload.map((mission) => {
        /* eslint-disable camelcase */
        const { mission_name, mission_id, description } = mission;
        return {
          mission_name,
          mission_id,
          description,
        };
      });
    });
    builder.addCase(fetchMissions.pending, (state) => {
      state.isLoading = true;
      state.error = '';
    });
    builder.addCase(fetchMissions.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default missionsSlice.reducer;
