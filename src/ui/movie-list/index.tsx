import MovieCard from "../movie-card";

export default function MovieList({ movies }: { movies?: Movie[] }) {
  if (!movies) return;

  return (
    <div
      className="content__movie grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4 md:px-0 mt-4"
      data-testid="movie-list"
    >
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
}
