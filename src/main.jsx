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
import  { Toaster } from 'react-hot-toast';
import ReadBooks from "./components/ReadBooks";
import WishlistBooks from "./components/WishlistBooks";
import About from "./Pages.jsx/About";
import OurTeam from "./Pages.jsx/OurTeam";
import NotFound from "./Pages.jsx/NotFound";


const router = createBrowserRouter([
  {
    path: "/",
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
        children: [
          {
            index: true,
            element: <ReadBooks />,
          },
          {
            path: "unread",
            element: <WishlistBooks />,
          }
        ]
      },
      {
        path: "/pages",
        element: <PagesToRead />,
        loader: () => fetch("/fakeData.json"),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/team",
        element: <OurTeam />,
      },
      {
        path: "*",
        element: <NotFound />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </React.StrictMode>
);
