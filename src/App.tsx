import { fetchAllMovie } from "./services/movie.service";
import AppWrapper from "./ui/app-wrapper";
import { useQuery } from "react-query";
import { useState } from "react";
import MovieList from "./ui/movie-list";

function App() {
  const [page] = useState(1);
  const { data: movies } = useQuery(["fetchMovie", page], () =>
    fetchAllMovie({ page })
  );

  return (
    <AppWrapper>
      <div className="content">
        <p className="text-lg font-bold">All Movies</p>

        <MovieList movies={movies?.results} />
      </div>
    </AppWrapper>
  );
}

export default App;
