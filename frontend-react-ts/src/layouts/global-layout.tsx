import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/sidebar";
import Topbar from "../components/topbar/topbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const GlobalLayout = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-screen h-screen flex font-roboto">
        <Sidebar />
        <div className="flex flex-col w-[calc(100vw-252px)] h-full">
          <Topbar />
          <Outlet />
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default GlobalLayout;
