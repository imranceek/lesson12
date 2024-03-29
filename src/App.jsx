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
  Cart,
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
          index: true,
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
          path: "/cart",
          element: <Cart/>
        },
        {
          path: "/checkout",
          element: <Checkout />,
        },
        
        {
          path: "/checkout",
          element: <Checkout />,
        },

      ],
    },

    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
