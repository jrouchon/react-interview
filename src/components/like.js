import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { likeMovieAction } from "../features/moviesSlice";
/*
onClick={() => { 
    like(post)
    .then(() => {liked ? setLiked(false) : setLiked(true)})
    .then(() => {liked ? setPostNum(postNum - 1) : setPostNum(postNum + 1)})
}} style={ liked ? { color: "#fd2d01" } : { color: "#4e5166"}}>
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
            isLiked: 1,
            wasLiked: liked,
            wasDisliked: disliked,
        }
        dispatch(likeMovieAction(likeData));
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
                <button style={liked ? { color: "#3F51B5" } : { color: "424242"}}> </button>
                <p className="count-toggle">{movie.likes}</p>
            </div>
            <div className="likesDislikes-toggle-wrapper">
                <i className="fas fa-solid fa-thumbs-down dislikeToggle ldtoggle toggle" onClick={() => {
                    disliked ? setDisliked(false) : setDisliked(true);
                    }} 
                    style={ disliked ? { color: "#e00206" } : { color: "424242"}}>
                </i>
                <p className="count-toggle">{movie.dislikes}</p>
            </div>
        </div>
    )
}

export default Likes;

