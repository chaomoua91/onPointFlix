import { useEffect, useState } from "react";
// import "./App.css";
import { tmdbPopularUrl } from "../../constants";
import axios from "axios";
import { Movie } from "../../types";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
        <Card
          className="w-[350px]"
          key={movie.id}
          onClick={() => console.log(movie)}
        >
          <CardHeader>
            <CardTitle>{movie.title}</CardTitle>
            {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
          </CardHeader>
          <CardContent>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-48"
            />
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Deploy</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
  
}
