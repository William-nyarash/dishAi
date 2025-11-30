import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow px-6 py-4 flex items-center justify-between">
      <div className="text-2xl font-bold text-red-500">
        <Link to="/">DishAl</Link>
      </div>

      <ul className="flex space-x-6 text-gray-600 font-medium">
        <li>
          <Link className="hover:text-red-500" to="/about">
            About
          </Link>
        </li>

        <li>
          <Link className="hover:text-red-500" to="/services">
            Services
          </Link>
        </li>

        <li>
          <Link className="hover:text-red-500" to="/waitlist">
            Waitlist
          </Link>
        </li>
      </ul>
    </nav>
  );
}
