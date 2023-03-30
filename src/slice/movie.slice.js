import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { base_url } from "../config";

const initialState = {
  data: {},
  loading: false,
};

// to get all the movie from api
export const GetAllMovieList = createAsyncThunk("movieList", async ({}) => {
  const request_url = base_url;
  const response = await axios.get(request_url);
  return response;
});

const MovieSlice = createSlice({
  name: "MovieReducer",
  initialState: initialState,
  extraReducers: {
    [GetAllMovieList.pending]: (state) => {
      state.loading = true;
    },
    [GetAllMovieList.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    },
    [GetAllMovieList.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default MovieSlice;
