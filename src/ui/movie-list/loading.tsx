import MovieCardLoading from "../movie-card/loading";

interface Props {
  count: number;
}

export default function MovieListLoading({ count = 3 }: Partial<Props>) {
  return (
    <div className="content__movie grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 md:px-0 mt-4">
      {Array(count)
        .fill("")
        .map(() => (
          <MovieCardLoading />
        ))}
    </div>
  );
}
