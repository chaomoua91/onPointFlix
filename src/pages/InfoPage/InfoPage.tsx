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
  const [credits, setCredits] = useState<any>();
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

  return <div className="info-container"></div>;
}
