import MovieCard from "../movie-card";

export default function MovieList({ movies }: { movies?: Movie[] }) {
  if (!movies) return;

  return (
    <div className="content__movie grid grid-cols-3 gap-4 mt-4">
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
}
