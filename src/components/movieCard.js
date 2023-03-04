//import { useEffect, useState } from "react";
import { FaTrashAlt } from 'react-icons/fa';
import Likes from "./like.js";


//id: '1', title: 'Oceans 8', category: 'Comedy', likes: 4, dislikes: 1 
// to do : 
// onclick delete fatrashalt
//
//
const MovieCard = ({ movie }) => {
    
    

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
                        <FaTrashAlt className="deleteToggle toggle" />
                    </div>
                </div>
            </div>
            

        </div>
    )
}

/*
    <Like post={post} />
    <div className="postGestion-wrapper">
        <FontAwesomeIcon icon={faTrash} className="deleteToggle action-btn" onClick={deleteToggle} />
            { deleted ? <DeletePost post={post} /> : null }
    </div>
*/

export default MovieCard;