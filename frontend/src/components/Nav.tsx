import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header>
      <nav className="flex justify-between items-center p-4">
        <Link to="/" className="text-2xl font-semibold">
          Baby Trackr
        </Link>

        <ul className="flex gap-4 items-center">
          <li className="cursor-pointer bg-slate-200 px-4 py-2 hover:bg-slate-100">
            <Link to={"/authentication"}>Login</Link> 
            {/* Might use useNavigate for the login function */}
          </li>
          <li className="cursor-pointer bg-zinc-800 text-white px-4 py-2 hover:bg-zinc-900">
            Sign up
          </li>
          <li>logged in</li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
