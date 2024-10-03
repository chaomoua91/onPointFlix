import { useEffect, useState } from "react";
import { tmdbPopularUrl } from "../../constants";
import axios from "axios";
import { Movie } from "../../types";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import "./Home.css";
import Filter from "@/components/Filter/Filter";

export default function Home() {
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const navigate = useNavigate();

  const onMovieClick = (movie: Movie) => {
    navigate(`/info/${movie.id}`);
  };

  useEffect(() => {
    const fetchPopularMovies = async () => {
      const result = await axios.get(tmdbPopularUrl);
      setMovieList(result.data.results);
    };
    fetchPopularMovies();
  }, []);

  return (
    <>
      <main className="movie-display">
        <Filter />
        <div className="flex-container">
          {movieList.map((movie) => (
            <Card
              className="movie-card"
              key={movie.id}
              onClick={() => onMovieClick(movie)}
            >
              <CardContent style={{ padding: "0px" }} className="card-content">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="movie-poster"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </>
  );
}
