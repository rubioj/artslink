import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Mobile } from "./screens/Mobile";
import { SearchActive } from "./screens/SearchActive";
import { SearchActiveScreen } from "./screens/SearchActiveScreen";
import { Menu } from "./screens/Menu";
import { DivWrapper } from "./screens/DivWrapper";
import { Search } from "./screens/Search";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Mobile />,
  },
  {
    path: "/mobile-home3",
    element: <Mobile />,
  },
  {
    path: "/search-active-1",
    element: <SearchActive />,
  },
  {
    path: "/search-active-2",
    element: <SearchActiveScreen />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/search-active-3",
    element: <DivWrapper />,
  },
  {
    path: "/search",
    element: <Search />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
