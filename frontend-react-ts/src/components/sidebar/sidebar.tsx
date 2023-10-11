import { NavLink } from "react-router-dom";
import LogoutButton from "../logout-button/logoutButton";

const Sidebar = () => {
  return (
    <div className="w-[252px] h-full bg-stone-200 flex flex-col text-black">
      <div className="w-full text-center  py-4 border-b-2 border-gray-400 font-brunoAce">
        <h2 className="text-[26px] ">Saat Airlines</h2>
      </div>
      <div className="flex flex-col w-full h-full text-[16px]">
        <div className="flex">
          <NavLink
            to={"/"}
            className={({ isActive, isPending }) =>
              isPending
                ? ""
                : isActive
                ? "bg-activeNavbar text-white py-2 w-full pl-2"
                : "py-2 w-full pl-2"
            }
          >
            Dashboard
          </NavLink>
        </div>
        <p className="mt-4 text-separetor text-xs pl-1">Operations</p>
        <div className="w-full flex flex-col border-t-2 border-gray-400">
          <NavLink
            to={"/helo"}
            className={({ isActive, isPending }) =>
              isPending
                ? ""
                : isActive
                ? "bg-activeNavbar text-white py-2 pl-2"
                : "py-2 pl-2"
            }
          >
            Flights
          </NavLink>
          <NavLink
            to={"/x"}
            className={({ isActive, isPending }) =>
              isPending
                ? ""
                : isActive
                ? "bg-activeNavbar text-white py-2 pl-2"
                : "py-2 pl-2"
            }
          >
            Route & Airports
          </NavLink>
        </div>
      </div>
      <div className="w-full flex justify-end pr-2 mb-2">
        <LogoutButton>logout</LogoutButton>
      </div>
    </div>
  );
};

export default Sidebar;
