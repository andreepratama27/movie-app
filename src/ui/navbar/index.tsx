import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="h-14 bg-black w-full flex items-center fixed z-10 px-4 sm:px-0 md:-px-0 border-b border-b-gray-900">
      <div className="max-w-2xl mx-auto w-full flex justify-between">
        <Link to="/" className="text-white font-bold text-lg">
          Movie App
        </Link>

        <Link to="/movie/search" className="text-white font-bold">
          Search
        </Link>
      </div>
    </nav>
  );
}
