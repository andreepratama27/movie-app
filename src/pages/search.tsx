import { useState } from "react";
import { debounce } from "../lib/utils";
import AppWrapper from "../ui/app-wrapper";
import { useQuery } from "react-query";
import { searchMovie } from "../services/movie.service";
import MovieList from "../ui/movie-list";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const { data } = useQuery(
    ["searchMovie", searchQuery],
    () => searchMovie({ query: searchQuery }),
    {
      enabled: !!searchQuery,
    }
  );

  const handleChange = debounce((evt: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(evt.target.value);
  }, 1000);

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

      <div className="search-result mt-4">
        <p className="text-lg font-bold text-white">Search Result</p>

        <MovieList movies={data?.results} />
      </div>
    </AppWrapper>
  );
}
