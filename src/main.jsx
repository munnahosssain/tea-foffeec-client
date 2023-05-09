import "./index.css";
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import AddCoffee from "./Pages/CoffeeInfo/AddCoffee/AddCoffee";
import UpdateCoffee from "./Pages/CoffeeInfo/UpdateCoffee/UpdateCoffee";

const App = lazy(() => import("./App.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/coffee"),
      },
    ],
  },
  {
    path: "/addCoffee",
    element: <AddCoffee />,
  },
  {
    path: "/updateCoffee",
    element: <UpdateCoffee />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<h1>Loading... </h1>}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
