import { useEffect, useState } from "react";
import { tmdbPopularUrl } from "../../constants";
import axios from "axios";
import { Movie } from "../../types";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
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
    <div className="flex flex-wrap justify-center gap-4">
      {movieList.map((movie) => (
        <Link to="/info" key={movie.id}>
          <Card
            className="w-[350px] h-[500px] rounded-2xl overflow-hidden"
            onClick={() => console.log(movie)}
          >
            <CardContent className="h-full p-0">
              {" "}
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-full object-cover"
              />
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
