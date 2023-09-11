import { fetchAllMovie } from "./services/movie.service";
import AppWrapper from "./ui/app-wrapper";
import { useQuery } from "react-query";
import { useState } from "react";
import MovieList from "./ui/movie-list";
import MovieListLoading from "./ui/movie-list/loading";

function App() {
  const [page] = useState(1);
  const { data: movies, isLoading } = useQuery(["fetchMovie", page], () =>
    fetchAllMovie({ page })
  );

  const renderContent = () => {
    if (isLoading) {
      return <MovieListLoading count={6} />;
    }

    return <MovieList movies={movies?.results} />;
  };

  return (
    <AppWrapper>
      <div className="content">
        <p className="text-lg font-bold text-white">All Movies</p>
        {renderContent()}
      </div>
    </AppWrapper>
  );
}

export default App;
