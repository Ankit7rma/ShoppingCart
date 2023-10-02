import React from "react";
import Header from "./Header";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";

const AppLayout = () => {
  const appRouter = createBrowserRouter([
    { path: "/",
      element: <Header />,
    children:[
        {
            path:"/",
            element:<Home/>
        },{
            path:"cart",
            element:<Cart/>
        }
    ] }]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default AppLayout;
