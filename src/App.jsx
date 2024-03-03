import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Menu } from "./screens/Menu";
import { Search } from "./screens/Search";
import { Mobile } from "./screens/Mobile";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Menu />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/mobile-home3",
    element: <Mobile />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
