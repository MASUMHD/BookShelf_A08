import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import Home from "./Pages.jsx/Home";


import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListedBooks from "./Pages.jsx/ListedBooks";
import PagesToRead from "./Pages.jsx/PagesToRead";

import AllPag from "./AllWeb/AllPag";
import SingleBook from "./Pages.jsx/SingleBook";



const router = createBrowserRouter([
  {
    path: "/",
    // element: <App />,
    element: <AllPag />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/fakeData.json"),
      },
      {
        path: "/book/:id",
        element: <SingleBook />, 
        loader: () => fetch("/fakeData.json"),
      },
      {
        path: "/books",
        element: <ListedBooks />,
      },
      {
        path: "/pages",
        element: <PagesToRead />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
