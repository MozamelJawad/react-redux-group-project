// missionsSlice.js
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

export const joinMission = createAsyncThunk('missions/joinMission', async (missionId) => {
  await axios.post('https://api.spacexdata.com/v3/missions');
  return missionId;
});

export const leaveMission = createAsyncThunk('missions/leaveMission', async (missionId) => {
  await axios.post('https://api.spacexdata.com/v3/missions');
  return missionId;
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = '';
      state.missions = action.payload.map((mission) => ({
        mission_id: mission.mission_id,
        mission_name: mission.mission_name,
        description: mission.description,
        reserved: false,
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

    builder.addCase(joinMission.fulfilled, (state, action) => {
      // Find the mission by ID and mark it as reserved.
      state.missions = state.missions.map((mission) => {
        if (mission.mission_id === action.payload) {
          return { ...mission, reserved: true };
        }
        return mission;
      });
    });

    builder.addCase(leaveMission.fulfilled, (state, action) => {
      // Find the mission by ID and mark it as not reserved.
      state.missions = state.missions.map((mission) => {
        if (mission.mission_id === action.payload) {
          return { ...mission, reserved: false };
        }
        return mission;
      });
    });
  },
});

export default missionsSlice.reducer;
