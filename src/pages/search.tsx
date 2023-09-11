import { useState } from "react";
import { debounce } from "../lib/utils";
import AppWrapper from "../ui/app-wrapper";
import { useQuery } from "react-query";
import { searchMovie } from "../services/movie.service";
import MovieList from "../ui/movie-list";
import MovieListLoading from "../ui/movie-list/loading";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const { data, isLoading } = useQuery(
    ["searchMovie", searchQuery],
    () => searchMovie({ query: searchQuery }),
    {
      enabled: !!searchQuery,
    }
  );

  const handleChange = debounce((evt: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(evt.target.value);
  }, 1000);

  const renderContent = () => {
    if (isLoading) {
      return <MovieListLoading />;
    }

    if (!data?.results) {
      return (
        <div className="w-full flex items-center justify-center h-48 rounded bg-gray-900 mt-8">
          <p className="text-white">Your movie result will shown here</p>
        </div>
      );
    }

    return (
      <>
        <p className="text-lg font-bold text-white">
          Search Result for: <i className="underline">{searchQuery}</i>
        </p>
        <MovieList movies={data?.results} />
      </>
    );
  };

  return (
    <AppWrapper>
      <div className="search-wrapper">
        <input
          type="text"
          className="w-full h-10 rounded border-2 border-gray-900 outline-gray-900 text-white bg-transparent pl-4"
          placeholder="Search movie here"
          onChange={handleChange}
        />
      </div>

      <div className="search-result mt-4">{renderContent()}</div>
    </AppWrapper>
  );
}
