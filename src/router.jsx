import { createBrowserRouter } from "react-router-dom";
import Authlayout from "./components/ui/layouts/Authlayout";
import Login from "./pages/Login";
import Register from "./pages/Register";

  const router = createBrowserRouter([

  {
    element:<Authlayout />,
    children:[
        {path:"/login",element:<Login/>},
        {path:"register", element:<Register/>}
    ]
  }
  ])


export default router;