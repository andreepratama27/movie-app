import { Link } from "react-router-dom";

export default function Badge({ name }: { name: string }) {
  return (
    <div
      role="button"
      className="border-2 border-gray-900 rounded-md px-4 h-6 flex items-center justify-center"
    >
      <Link
        to={`/movie/genre/${name.toLowerCase()}`}
        className="text-sm text-white"
      >
        {name}
      </Link>
    </div>
  );
}
