import { useEffect, useState } from "react";
import {
  tmdbMovieDetailsUrl,
  tmdbMovieCreditsUrl,
  tmdbMovieTrailerUrl,
} from "@/constants";
import axios from "axios";
import { Movie } from "@/types";
import { useParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import "./InfoPage.css";

import { Button } from "@/components/ui/button";

interface Credits {
  cast: { name: string }[];
  crew: { job: string; name: string }[];
}

export default function InfoPage() {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie>();
  const [credits, setCredits] = useState<Credits | null>(null);
  const [trailer, setTrailer] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [movieDetails, movieCredits, movieTrailer] = await Promise.all([
          axios.get(tmdbMovieDetailsUrl.replace("{movie_id}", id!)),
          axios.get(tmdbMovieCreditsUrl.replace("{movie_id}", id!)),
          axios.get(tmdbMovieTrailerUrl.replace("{movie_id}", id!)),
        ]);

        console.log("Movie Details:", movieDetails.data);
        console.log("Movie Credits:", movieCredits.data);
        console.log("Movie Trailer:", movieTrailer.data);

        setMovie(movieDetails.data);
        setCredits(movieCredits.data as Credits);
        setTrailer(
          movieTrailer.data.results.find(
            (video: { type: string; key: string }) => video.type === "Trailer"
          )?.key
        );
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="info-container">
      <Card className="card">
        <CardContent className="info-content">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
            alt={movie?.title}
            className=" w-auto mr-12 ml-6"
          />
          <div className="movie-info">
            <div className="movie-title">
              <h1>{movie?.title}</h1>
              <Button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2 mr-4">
                Add To Watchlist
              </Button>
            </div>
            <div className="movie-content">
              <p>
                {movie?.release_date
                  ? new Date(movie.release_date).getFullYear()
                  : "N/A"}
              </p>
              <p> ⭐ {movie?.vote_average.toFixed(1)} </p>
              <p>{movie?.overview}</p>
              <p>
                <span>Director:</span>{" "}
                {
                  credits?.crew?.find(
                    (member: { job: string; name: string }) =>
                      member.job === "Director"
                  )?.name
                }
              </p>
              <p>
                <span>Cast:</span>{" "}
                {credits?.cast
                  ?.slice(0, 5)
                  .map((member: { name: string }) => member.name)
                  .join(", ")}
              </p>
              <p>
                <span>Genres:</span>
                Genres:{" "}
                {movie?.genres
                  .map((genre: { id: number; name: string }) => genre.name)
                  .join(", ")}
              </p>
            </div>
            <div className="trailer">
              <h2 className="trailer-title">Trailer</h2>
              {trailer && (
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${trailer}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
