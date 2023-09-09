import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="h-14 bg-black w-full flex items-center fixed">
      <div className="max-w-xl mx-auto w-full">
        <Link to="/" className="text-white font-bold text-lg">
          Movie App
        </Link>
      </div>
    </nav>
  );
}
