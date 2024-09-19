import { useEffect, useState } from "react";
import { tmdbMovieDetailsUrl, tmdbMovieCreditsUrl } from "@/constants";
import axios from "axios";
import { Movie } from "@/types";
import { useParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import "./InfoPage.css";

// import { Button } from "@/components/ui/button";

export default function InfoPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie>();

  const [credits, setCredits] = useState<any>();

  useEffect(() => {
    const fetchMovieCredits = async () => {
      const result = await axios.get(
        tmdbMovieCreditsUrl.replace("{movie_id}", id!)
      );
      console.log(result.data);
      setCredits(result.data);
    };
    fetchMovieCredits();
  }, [id]);

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
            <CardContent className="text-white flex font-Poppins">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className=" w-500px mr-12 ml-6 mt-12"
              />
              <div className="flex flex-col justify-center">
                <h2 className="movieTitle">{movie.title}</h2>
                <div className="movieInfo">
                  <p>{new Date(movie.release_date).getFullYear()}</p>
                  <p> ⭐ {movie.vote_average.toFixed(1)} </p>
                  <p>{movie.overview}</p>
                  <p>
                    Director:{" "}
                    {
                      credits?.crew?.find((member) => member.job === "Director")
                        ?.name
                    }
                  </p>
                  <p>
                    Cast:{" "}
                    {credits?.cast
                      ?.slice(0, 5)
                      .map((member) => member.name)
                      .join(", ")}
                  </p>
                  <p>
                    Genres: {movie.genres.map((genre) => genre.name).join(", ")}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </>
  );
}
