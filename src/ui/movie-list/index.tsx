import MovieCard from "../movie-card";

export default function MovieList({
  movies,
  inline = false,
}: {
  movies?: Movie[];
  inline?: boolean;
}) {
  if (!movies) return;

  const className = inline
    ? "overflow-x-auto grid gap-8 grid-flow-col auto-cols-max"
    : "content__movie grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4 md:px-0 mt-4";

  return (
    <div className={className} data-testid="movie-list">
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
}
