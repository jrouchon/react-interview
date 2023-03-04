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
        dislikeMovieAction: (state, { payload }) => {
            state.movies = state.movies.map((movie) => {
                if(movie.id === payload.id) {
                    if(payload.wasLiked) {
                        movie.likes -= 1;
                    }
                    if(payload.wasDisliked) {
                        movie.dislikes -= 1;
                        movie.disliked = false;
                    } else {
                        movie.dislikes += 1;
                        movie.disliked = true;
                    }
                    movie.liked = false;

                }
                return (movie);
            })
        },
        deleteMovieAction: (state, {payload}) => {
            state.movies = state.movies.filter((movie) => movie.id !== payload);

        },
    },
});

export const { setMoviesData, likeMovieAction, dislikeMovieAction, deleteMovieAction } = moviesSlice.actions;
export default moviesSlice.reducer;