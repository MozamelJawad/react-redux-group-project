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
  reducers: {
    joinMission: (state, action) => {
      const {mission_id}  = action.payload;
      const mission = state.missions.find((mission) => mission.mission_id === mission_id);
      mission.join = !mission.join;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchMissions.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = '';
      state.missions = action.payload.map((mission) => ({
        mission_id: mission.mission_id,
        mission_name: mission.mission_name,
        description: mission.description,
        // reserved: false,
      }));
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

export const {joinMission} = missionsSlice.actions;

export default missionsSlice.reducer;
