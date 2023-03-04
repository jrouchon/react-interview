//import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { FaTrashAlt } from 'react-icons/fa';
import Likes from "./like.js";
import { deleteMovieAction } from "../features/moviesSlice";

//id: '1', title: 'Oceans 8', category: 'Comedy', likes: 4, dislikes: 1 
// to do : 
//
//
const MovieCard = ({ movie }) => {
    const dispatch = useDispatch();
    

    return (
        <div className="card-wrapper" key={movie.id}>
            
            <div className="card">
                <div className='cardHeader'>
                    <p className='movieTitle'>{movie.title}</p>
                </div>
                <div className="cardContent-wrapper">
                    <p className="movieCategory">{movie.category}</p>
                </div>
                <div className="cardAction">
                    <Likes movie={movie} />
                    <div className="movieDelete-wrapper">
                        <FaTrashAlt className="deleteToggle toggle" onClick={() => { dispatch(deleteMovieAction(movie.id)) }}/>
                    </div>
                </div>
            </div>
            

        </div>
    )
}

export default MovieCard;