import { useEffect, useState } from "react";
// import "./App.css";
import { tmdbPopularUrl } from "../../constants";
import axios from "axios";
import { Movie } from "../../types";

export default function Home() {
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
    <div>
      {movieList.map((movie) => (
        <h1
          key={movie.id}
          className="text-3xl font-bold underline"
          onClick={() => console.log(movie)}
        >
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          {movie.title}
        </h1>
      ))}
    </div>
  );
}
