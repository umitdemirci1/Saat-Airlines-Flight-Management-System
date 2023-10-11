import GlobalLayout from "../layouts/global-layout";
import Dashboard from "../pages/dashboard/dasboard";
import { createBrowserRouter } from "react-router-dom";
import Flights from "../pages/flights/flights";

export const router = createBrowserRouter([
  {
    element: <GlobalLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/flights",
        element: <Flights />
      }
    ],
  },
]);
