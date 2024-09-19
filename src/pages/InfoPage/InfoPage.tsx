import { useEffect, useState } from "react";
import { tmdbMovieDetailsUrl } from "@/constants";
import axios from "axios";
import { Movie } from "@/types";
import { useParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import "./InfoPage.css";

// import { Button } from "@/components/ui/button";

export default function InfoPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const result = await axios.get(
        tmdbMovieDetailsUrl.replace("{movie_id}", id!)
      );
      console.log(result.data);
      setMovie(result.data);
    };
    fetchMovieDetails();
  }, [id]);
  return (
    <>
      <div>
        {movie && (
          <Card>
            <CardContent className="text-white">
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <p>Release Date: {movie.release_date}</p>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </CardContent>
          </Card>
        )}
      </div>
    </>
  );
}
