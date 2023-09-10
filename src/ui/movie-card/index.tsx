import { Link } from "react-router-dom";

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <div className="grid w-full rounded shadow-sm" key={movie.id}>
      <div className="content__movie-image w-full h-72 bg-black rounded-t">
        <img
          className="rounded-t h-full w-full object-contain sm:object-cover"
          alt={movie.title}
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          loading="lazy"
        />
      </div>
      <div className="content__movie-title p-2">
        <Link className="text-white" to={`/movie/${movie.id}`}>
          {movie.title}
        </Link>
      </div>
    </div>
  );
}
