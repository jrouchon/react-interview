import logo from './assets/movies-rating-logo.png';
import { useEffect, useCallback } from 'react';
import { movies$ } from './data/movies.js';
import { useDispatch, useSelector } from 'react-redux';
import { setMoviesData } from './features/moviesSlice';
import MovieCard from "./components/movieCard";

import Select from 'react-select';

function App() {
  //const [moviesData, setMoviesData] = useState([]);
  const dispatch = useDispatch()
  const moviesData = useSelector((state) => state.movies.movies)

  const fetchMovies = useCallback(async() => {
    const moviesList = await movies$.then(response => response);
    console.log(moviesList); //a enlever
    dispatch(setMoviesData(moviesList));
}, [dispatch]);

  useEffect(() => {
    fetchMovies();
}, [fetchMovies])

  function categoriesList(moviesData) {
    const categoriesOption = []
    const categoriesList = moviesData?.map((movie) => (movie.category))
    if(categoriesList) {
      for ( const category of categoriesList) {
        if (!categoriesOption.includes(category)) {
          categoriesOption.push(category)
        }
      }
    }
    return (categoriesOption)
  }

  
  const handleChangeCategorySelection = (selectedOption) => {
    console.log("selected option", selectedOption);
    // todo pagination et render du tri
  }

  const categories = categoriesList(moviesData);
  //console.log("categories :", categories)
  
  const selectCategoryOptions = categories.map((category) => ({
    label: category,
    value: category,
  }))
  //console.log("selectCategoryOptions", selectCategoryOptions)

  return (
    <div className="App">
      <header className="header">
        <div className="logo-wrapper">
          <img src={logo} alt="Movies Rating logo" className='logo' />
          <h1>Movies Rating</h1>
        </div>
      </header>
      <main>
        <div className="multiselect-wrapper">
          <Select className="multiselect" options={selectCategoryOptions} onChange={handleChangeCategorySelection} placeholder={"Filtrer par genre"} isMulti/>
        </div>
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

        <Select
          //value={selectedOptions}
          options={categoryOption}
          //onChange={onChange}
          closeMenuOnSelect={false}
          isMulti
          name="movie category"
          placeholder="Filtrer par catégorie"
        />
*/