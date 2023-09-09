import { fetchAllMovie } from "./services/movie.service";
import MovieCard from "./ui/movie-card";
import AppWrapper from "./ui/app-wrapper";
import { useQuery } from "react-query";
import { useState } from "react";

function App() {
  const [page] = useState(1);
  const { data: movies } = useQuery(["fetchMovie", page], () =>
    fetchAllMovie({ page })
  );

  return (
    <AppWrapper>
      <div className="search-wrapper">
        <input
          type="text"
          className="w-full h-10 rounded border-2 border-black outline-black pl-4"
          placeholder="Search movie here"
        />
      </div>

      <div className="content mt-6">
        <p className="text-lg font-bold">All Movies</p>

        <div className="content__movie grid grid-cols-3 gap-4 mt-4">
          {movies?.results.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    </AppWrapper>
  );
}

export default App;
