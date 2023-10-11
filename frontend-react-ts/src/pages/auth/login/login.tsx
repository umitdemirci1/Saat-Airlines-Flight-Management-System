import { Link, NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-screen h-screen bg-stone-100 flex justify-center font-bruno text-center">
      <div className="w-[600px] h-full bg-stone-900 flex items-center ">
        <h1 className="text-[102px] bg-[url('./assets/airport.svg')] bg-no-repeat text-transparent bg-clip-text bg-cover leading-none">
          SAAT AIRLINES
        </h1>
      </div>
      <div className="w-[600px] h-full bg-stone-300 flex flex-col items-center justify-between">
        <div className="flex flex-col h-full justify-center">
          <p className="text-start text-stone-900 text-sm">username:</p>
          <input
            className="px-4 py-2 rounded-sm outline-none bg-stone-900"
            type="text"
          />
          <p className="text-start mt-2 text-stone-900 text-sm">password:</p>
          <input
            className="px-4 py-2 rounded-sm outline-none bg-stone-900"
            type="password"
          />
          <NavLink to={"/"}>
            <button className="px-4 py-2 w-full bg-stone-900 rounded-sm text-white mt-6">
              login
            </button>
          </NavLink>
          <Link to={"/login"} className="text-xs underline text-stone-900 mt-2">
            Forgot password? Contact us from here
          </Link>
        </div>
        <p className="text-xs w-full text-end mr-2 mb-2 text-stone-900">
          all rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;
