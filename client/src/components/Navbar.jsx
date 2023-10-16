import { MdLocalGroceryStore } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="flex justify-between items-center px-6 py-4 bg-slate-900
    text-white"
    >
      <div className="nav-logo flex items-center gap-2">
        <MdLocalGroceryStore className="text-2xl" />
        <h1 className="text-xl font-bold">
          <Link to="/">I-Grocery.</Link>
        </h1>
      </div>
      <div className="flex gap-4 text-medium font-semibold">
        <button>
          <Link to="/">Home</Link>
        </button>
        <button>
          <Link to="/about">About</Link>
        </button>
        <button>
          <Link to="/contact">Contact</Link>
        </button>
      </div>
      <div className="flex gap-4 items-center">
        <button className="button-full-bg">
          <Link to="/login">Sign In</Link>
        </button>
        <button
          className="button-border relative inline-flex items-center justify-center
        group-hover:from-cyan-500 group-hover:to-blue-500 group"
        >
          <Link
            to="/register"
            className="relative px-5 py-2 transition-all ease-in duration-75
             bg-slate-900  rounded-md group-hover:bg-opacity-0"
          >
            Sign Up
          </Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
