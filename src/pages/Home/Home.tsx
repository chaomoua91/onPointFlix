import { useEffect, useState } from "react";
import { tmdbPopularUrl } from "../../constants";
import axios from "axios";
import { Movie } from "../../types";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import "./Home.css";
import Filter from "@/components/Filter/Filter.tsx";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

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
    <>
      <Filter />
      <div className="flex-container">
        {movieList.map((movie) => (
          <Link to="/info" key={movie.id}>
            <Card className="movie-card" onClick={() => console.log(movie)}>
              <CardContent style={{ padding: "0px" }} className="card-content">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="movie-poster"
                />
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
}
