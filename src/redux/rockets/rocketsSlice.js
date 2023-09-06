import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  rockets: [],
  isLoading: false,
  error: '',
};

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  const response = await axios('https://api.spacexdata.com/v4/rockets');
  return response.data;
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    rocketsReserved: (state, action) => {
      const { id } = action.payload;
      const rocket = state.rockets.find((rocket) => rocket.id === id);
      rocket.reserved = !rocket.reserved;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = '';
      state.rockets = action.payload.map((rocket) => {
        const {
          name, description, id, flickr_images: image,
        } = rocket;
        return {
          name, description, id, image,
        };
      });
    });
    builder.addCase(fetchRockets.pending, (state) => {
      state.isLoading = true;
      state.error = '';
    });
    builder.addCase(fetchRockets.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const { rocketsReserved } = rocketsSlice.actions;

export default rocketsSlice.reducer;
