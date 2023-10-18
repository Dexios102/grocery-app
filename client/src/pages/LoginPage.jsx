import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";

const LoginPage = () => {
  return (
    <div
      className="flex flex-col items-center justify-center mx-auto px-6 py-8
     md:h-screen lg:py-0"
    >
      <Link
        to="/"
        className="flex items-center mb-6 text-2xl font-semibold text-white"
      >
        <img src={logo} alt="logo" className="w-10 h-10 mr-2" />
        I-Grocery
      </Link>
      <div
        className="w-full bg-slate-900 text-white rounded-xl shadow border
      border-gray-700 md:mt-0 sm:max-w-lg xl:p-0"
      >
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
            Welcome back
          </h1>
          <div className="flex justify-between gap-2">
            <button
              className="flex-1 flex items-center gap-2 border border-gray-700 py-2 px-6
            rounded-lg hover:bg-gray-800 focus:ring-1 focus:ring-gray-300"
            >
              <FcGoogle className="text-2xl" /> Log in with Google
            </button>
            <button
              className="flex-1 flex items-center gap-2 border border-gray-700 py-2 px-6
            rounded-lg hover:bg-gray-800 focus:ring-1 focus:ring-gray-300"
            >
              <BsFacebook className="text-2xl text-blue-600" /> Log in with Meta
            </button>
          </div>
          <div className="flex justify-between items-center">
            <div className="w-2/5 border-t border-gray-400"></div>
            <span className="text-gray-400">or</span>
            <div className="w-2/5 border-t border-gray-400"></div>
          </div>

          <form className="space-y-4 md:space-y-6">
            <div>
              <label
                htmlFor=""
                className="block mb-2 text-sm font-medium text-white"
              >
                Your email
              </label>
              <input
                type="email"
                className="bg-gray-700 border border-gray-600 placeholder-gray-400
                text-white focus:ring focus:ring-cyan-500 focus:border-cyan-500 w-full p-2.5
                rounded-lg sm:text-sm hover:bg-gray-600"
                placeholder="example@mail.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="block mb-2 text-sm font-medium text-white"
              >
                Password
              </label>
              <input
                type="email"
                className="bg-gray-700 border border-gray-600 placeholder-gray-400
                text-white focus:ring focus:ring-cyan-500 focus:border-cyan-500 w-full p-2.5
                rounded-lg sm:text-sm hover:bg-gray-600"
                placeholder="••••••••"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-cyan-200"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="remember" className="text-gray-300 ">
                    Remember me
                  </label>
                </div>
              </div>
              <Link
                to="/forgot-password"
                className="text-blue-600 hover:underline text-sm font-medium"
              >
                Forgot password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-cyan-600 hover:bg-cyan-900
              focus:outline-none focus:ring focus:ring-cyan-300 font-medium rounded-lg
               text-sm px-5 py-2.5 text-center"
            >
              Sign in
            </button>
            <p className="text-sm text-center font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet?{" "}
              <Link
                to="/resgister"
                href="#"
                className="font-medium text-primary-600 hover:underline text-blue-500"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
