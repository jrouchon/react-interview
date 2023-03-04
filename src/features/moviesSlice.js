import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        movies: null,
    },
    reducers: { //a destructurer
        setMoviesData: (state, action) => {
            state.movies = action.payload;
        },
        likeMovieAction: (state, { payload }) => {
            state.movies = state.movies.map((movie) => {
                if(movie.id === payload.id) {
                    if(payload.wasDisliked) {
                        movie.dislikes -= 1;
                    }
                    if(payload.wasLiked) {
                        movie.likes -= 1;
                        movie.liked = false;
                    } else {
                        movie.likes += 1;
                        movie.liked = true;
                    }
                    movie.disliked = false;

                }
                return (movie);
            })
        },
    },
});

export const { setMoviesData, likeMovieAction } = moviesSlice.actions;
export default moviesSlice.reducer;