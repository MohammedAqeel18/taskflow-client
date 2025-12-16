import Login from "./pages/Login";
import { createBrowserRouter,Navigate,RouterProvider } from "react-router-dom";
import Register from "./pages/Register";


  const router = createBrowserRouter([

    {
        path:"/",
        element:<Navigate to="login" replace/>
    },
   {

      path:"/login",
      element:<Login/>
    },

    {
      path:"/register",
      element:<Register/>
    }
  ])


export default router;