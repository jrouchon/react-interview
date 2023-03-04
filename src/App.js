import logo from './assets/movies-rating-logo.png';
import { useEffect, useCallback } from 'react';
import { movies$ } from './data/movies.js';
import { useDispatch, useSelector } from 'react-redux';
import { setMoviesData } from './features/moviesSlice';
import MovieCard from "./components/movieCard";

function App() {
  //const [moviesData, setMoviesData] = useState([]);
  const dispatch = useDispatch()
  const moviesData = useSelector((state) => state.movies.movies)

  const fetchMovies = useCallback(async() => {
    const moviesList = await movies$.then(response => response);
    console.log(moviesList);
    //setMoviesData(moviesList);
    dispatch(setMoviesData(moviesList));
}, [dispatch]);

  useEffect(() => {
    fetchMovies();
}, [fetchMovies])

  return (
    <div className="App">
      <header className="header">
        <div className="logo-wrapper">
          <img src={logo} alt="Movies Rating logo" className='logo' />
          <h1>Movies Rating</h1>
        </div>
      </header>
      <main>
        <div className="cards-wrapper">
          {moviesData?.map((movie, index) => (
            <MovieCard key={index} movie={movie}/>
            ))}
        </div>
      
      </main>
    </div>
  );
}

export default App;

/*
        <div className="cards-wrapper">
          {moviesData?.map((movie, index) => (console.log(index, movie.id , "movie : ", movie.title)))}
        </div>
*/