import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import Home from "./Pages.jsx/Home";


import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListedBooks from "./Pages.jsx/ListedBooks";
import PagesToRead from "./Pages.jsx/PagesToRead";

import AllPag from "./AllWeb/AllPag";



const router = createBrowserRouter([
  {
    path: "/",
    // element: <App />,
    element: <AllPag />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("../public/fakeData.json"),
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
