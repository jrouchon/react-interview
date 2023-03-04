import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        movies: null,
    },
    reducers: {
        setMoviesData: (state, action) => {
            state.movies = action.payload;
        },
    },
});

export const {setMoviesData} = moviesSlice.actions;
export default moviesSlice.reducer;