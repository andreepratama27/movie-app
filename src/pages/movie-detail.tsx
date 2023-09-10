import { useQuery } from "react-query";
import AppWrapper from "../ui/app-wrapper";
import { useParams } from "react-router-dom";
import { fetchMovieDetail } from "../services/movie.service";
import Badge from "../ui/badge";

export default function MovieDetailPage() {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading } = useQuery(["fetchMovieDetail", id], () =>
    fetchMovieDetail({ id: parseInt(id as string) })
  );

  if (isLoading) {
    return (
      <AppWrapper>
        <div className="w-full h-[420px] mb-4 animate-pulse">
          <div className="w-full h-full bg-gray-300 rounded-md"></div>
        </div>

        <div className="animate-pulse space-y-2.5 mt-8">
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-56"></div>

          <div className="flex gap-4 mt-2 animate-pulse">
            <div className="border-2 border-gray-900 rounded-md px-4 h-6 flex items-center justify-center">
              <div className="h-2 bg-gray-300 rounded w-14"></div>
            </div>
            <div className="border-2 border-gray-900 rounded-md px-4 h-6 flex items-center justify-center">
              <div className="h-2 bg-gray-300 rounded w-14"></div>
            </div>
          </div>
        </div>
      </AppWrapper>
    );
  }
  return (
    <AppWrapper>
      <div
        className={`image-wrapper w-full h-[420px] mb-4 bg-black rounded-md`}
      >
        <img
          alt={data?.title}
          src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="content mt-8">
        <p className="text-2xl font-bold text-white">{data?.title}</p>
        <i className="text-lg text-white">{data?.tagline}</i>

        <div className="genres flex gap-4 mt-2">
          {data?.genres.map((genre) => (
            <Badge name={genre.name} key={genre.id} />
          ))}
        </div>

        <div className="content--desc mt-8">
          <p className="font-bold mb-2 text-white">Description</p>
          <p className="text-white">{data?.overview}</p>
        </div>
      </div>
    </AppWrapper>
  );
}
