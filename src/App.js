
import { useState } from 'react';
import './App.css';
import Filter from './components/filter/filter';
import MovieList from './components/movielist/movielist';

const moviesList = [
  {
      title:'Movie 01 ',
      description: 'Mouvie description 01',
      rating: 9,
      posterurl: 'url 01'
  },
  {
      title:'Movie 02 ',
      description: 'Mouvie description 02',
      rating: 6,
      posterurl: 'url 02'
  },
  {
      title:'Movie 03 ',
      description: 'Mouvie description 03',
      rating: 4,
      posterurl: 'url 03'
  },
  {
      title:'Movie 04 ',
      description: 'Mouvie description 04',
      rating: 9,
      posterurl: 'url 04'
  }
]

const App = ()=> {
  const [movies, setMovies] = useState(moviesList)
  return (
  
       <>
        <Filter/>
        <MovieList movies={movies} />

     </>
  
  );
}

export default App;
