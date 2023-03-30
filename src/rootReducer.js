import { combineReducers } from "redux";
import MovieSlice from "./slice/movie.slice";
const RootReducer = combineReducers({
  movie: MovieSlice.reducer,
});

export default RootReducer;
