import {
    createBrowserRouter
  } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home/Home";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>, 
      children: [
        {
          path: "/", 
          element: <Home></Home>
        }
      ]
    },
  ]);

  export default router;