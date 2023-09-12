import { Link } from "react-router-dom";
import { useFetchImage } from "../../hooks/useFetchImage";

export default function MovieCard({ movie }: { movie: Movie }) {
  const { loading, currentImage } = useFetchImage({
    path: movie.poster_path,
  });

  return (
    <div className="w-full rounded shadow-sm" key={movie.id}>
      <div className="content__movie-image w-full h-72 bg-black rounded-t">
        <img
          className={`
              rounded-t h-full w-full object-contain sm:object-cover duration-700 ease-in-out group-hover:opacity-75
              ${
                loading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })`}
          alt={movie.title}
          src={`https://image.tmdb.org/t/p/original/${currentImage}`}
          loading="lazy"
        />
      </div>
      <div className="content__movie-title p-2">
        <Link
          className="text-white"
          data-testid="movie-title"
          to={`/movie/${movie.id}`}
        >
          {movie.title}
        </Link>
      </div>
    </div>
  );
}
