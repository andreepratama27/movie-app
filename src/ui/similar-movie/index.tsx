import { useQuery } from "react-query";
import { fetchSimilarMovie } from "../../services/movie.service";
import MovieList from "../movie-list";

export default function SimilarMovie({ id }: { id: string }) {
  const { data } = useQuery(
    ["fetchSimilarMovie", id],
    () => fetchSimilarMovie({ id }),
    {
      enabled: !!id,
    }
  );

  return <MovieList movies={data?.results} inline />;
}
