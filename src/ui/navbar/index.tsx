import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="h-14 bg-black w-full flex items-center fixed">
      <div className="max-w-xl mx-auto w-full flex justify-between">
        <Link to="/" className="text-white font-bold text-lg">
          Movie App
        </Link>

        <Link to="/movie/search" className="text-white">
          Search
        </Link>
      </div>
    </nav>
  );
}
