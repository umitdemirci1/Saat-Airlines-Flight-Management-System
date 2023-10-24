import GlobalLayout from "../layouts/global-layout";
import Dashboard from "../pages/dashboard/dashboard";
import { createBrowserRouter } from "react-router-dom";
import Flights from "../pages/flights/flights";
import Login from "../pages/auth/login/login";

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
        element: <Flights />,
      },
    ],
  },
  {
    element: <Login />,
    path: "/login",
  },
  {
    path: "*",
    element: <GlobalLayout />,
  },
]);
