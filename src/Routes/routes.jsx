import {
    createBrowserRouter,
  
  } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut />,
      children: [
         {
            path:"/",
            element: <Home />
         },
         {
            path:"/signUp",
            element: <SignUp />
         },
         {
            path:"/login",
            element: <Login />
         },
      ]
    },
  ]);
export default router  