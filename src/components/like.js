import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { likeMovieAction, dislikeMovieAction } from "../features/moviesSlice";
/*
blue : #3F51B5
red : #e00206
*/


const Likes = ({ movie }) => {
    const dispatch = useDispatch();
    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);

    useEffect(() => {
        setLiked(movie.liked);
        setDisliked(movie.disliked)
    }, [movie.liked, movie.disliked])
    
    function handleLike(movie) {
        const likeData = {
            id: movie.id,
            likes: movie.likes,
            dislikes: movie.dislikes,
            isLiked: 1, //a enlever
            wasLiked: liked,
            wasDisliked: disliked,
        }
        dispatch(likeMovieAction(likeData));
    }

    function handleDislike(movie) {
        const dislikeData = {
            id: movie.id,
            likes: movie.likes,
            dislikes: movie.dislikes,
            isDisliked: 1, //a enlever
            wasLiked: liked,
            wasDisliked: disliked,
        }
        dispatch(dislikeMovieAction(dislikeData));
    }

    return(
        <div className="likesDislikes-wrapper">
            <div className="likesDislikes-toggle-wrapper">
                <i className="fas fa-solid fa-thumbs-up likeToggle ldtoggle toggle" 
                    onClick={() => {
                        handleLike(movie);
                    }} 
                    style={movie.liked ? { color: "#3F51B5" } : { color: "#424242"}}
                    >
                </i>
                <p className="count-toggle">{movie.likes}</p>
            </div>
            <div className="likesDislikes-toggle-wrapper">
                <i className="fas fa-solid fa-thumbs-down dislikeToggle ldtoggle toggle" 
                    onClick={() => {
                        handleDislike(movie);
                    }} 
                    style={ disliked ? { color: "#e00206" } : { color: "#424242"}}>
                </i>
                <p className="count-toggle">{movie.dislikes}</p>
            </div>
        </div>
    )
}

export default Likes;

