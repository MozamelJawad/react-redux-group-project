import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  missions: [],
  isLoading: false,
  error: '',
};

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  const response = await fetch('https://api.spacexdata.com/v3/missions');
  const date = response.json();
  return date;
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      /* eslint-disable camelcase */
      const { mission_id } = action.payload;
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

export const { joinMission } = missionsSlice.actions;

export default missionsSlice.reducer;
