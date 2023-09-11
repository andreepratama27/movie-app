import { fetchAllMovie } from "./services/movie.service";
import AppWrapper from "./ui/app-wrapper";
import { useInfiniteQuery } from "react-query";
import { useInView } from "react-intersection-observer";
import MovieList from "./ui/movie-list";
import MovieListLoading from "./ui/movie-list/loading";
import { useEffect, useState } from "react";

function App() {
  const [pageParam, setPageParam] = useState(1);
  const { ref, inView } = useInView();

  const {
    data: movies,
    isLoading,
    fetchNextPage,
  } = useInfiniteQuery(
    ["fetchMovie"],
    async () => {
      const response = await fetchAllMovie({ page: pageParam });

      return {
        ...response,
        page: pageParam,
      };
    },
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      getNextPageParam: (lastPage) => lastPage.page,
    }
  );

  const renderContent = () => {
    if (isLoading) {
      return <MovieListLoading count={6} />;
    }

    return movies?.pages.map((movie, key) => (
      <MovieList movies={movie.results} key={key} />
    ));
  };

  useEffect(() => {
    if (inView) {
      setPageParam((prevState) => prevState + 1);
      fetchNextPage();
    }
  }, [inView]);

  return (
    <AppWrapper>
      <div className="content">
        <p className="text-lg font-bold text-white">All Movies</p>
        {renderContent()}

        <div className="loading" ref={ref}>
          <p className="text-xl text-white">
            <MovieListLoading count={3} />
          </p>
        </div>
      </div>
    </AppWrapper>
  );
}

export default App;
