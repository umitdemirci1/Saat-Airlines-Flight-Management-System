import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/sidebar";
import Topbar from "../components/topbar/topbar";
const GlobalLayout = () => {
  return (
    <div className="w-screen h-screen flex font-bruno">
      <Sidebar />
      <div className="flex flex-col w-[calc(100vw-252px)]">
        <Topbar />
        <Outlet />
      </div>
    </div>
  );
};

export default GlobalLayout;
