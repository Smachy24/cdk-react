import { Link } from "react-router-dom";

function Menus() {
  return (
    <ul className="flex gap-4 bg-slate-200 p-4 w-full">
      <li>
        <Link className="hover:underline" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="hover:underline" to="/series">
          Series
        </Link>
      </li>
      <li>
        <Link className="hover:underline" to="/profile">
          Profile
        </Link>
      </li>
    </ul>
  );
}

export default Menus;
