export default function MovieCard() {
  return (
    <div className="grid w-full rounded shadow-sm">
      <div className="content__movie-image w-full h-72 bg-black rounded-t animate-pulse">
        <div className="h-full w-full bg-gray-300 rounded"></div>
      </div>
      <div className="content__movie-title px-0 pt-2 animate-pulse flex flex-col gap-2">
        <div className="w-full h-2 bg-gray-300 rounded"></div>
        <div className="w-20 h-2 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
}
