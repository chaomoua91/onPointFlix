import { useEffect, useState } from 'react';
import './App.css';
import { tmdbPopularUrl } from './constants';
import axios from 'axios';
import { Movie } from './types';

function App() {
  const [movieList, setMovieList] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      const result = await axios.get(tmdbPopularUrl);
      console.log(result.data);
      setMovieList(result.data.results);
    };
    fetchPopularMovies();
  }, []);

  return (
    <>
      {movieList.map((movie) => (
        <h1 className="text-3xl font-bold underline">{movie.title}</h1>
      ))}
    </>
  );
}

export default App;
