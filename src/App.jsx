import React from "react";

import { MainLayout } from "./index";

import {
  Home,
  About,
  Checkout,
  Error,
  Login,
  Product,
  Products,
  Register,
} from "./index";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
        {
          path : "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/product/:id",
          element: <Product />,
        },
        {
          path: "/checkout",
          element: <Checkout />,
        },
        
        {
          path: "/checkout",
          element: <Checkout />,
        },
        {
          index: true,
          element: <Login />,
        },

      ],
    },

    {
      path: "/register",
      element: <Register />,
    },
   
  ]);
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
