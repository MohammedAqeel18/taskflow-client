import { createBrowserRouter,Navigate } from "react-router-dom";
import Authlayout from "./components/ui/layouts/Authlayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./auth/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
  const router = createBrowserRouter([

  {
    path:"/",
    element:<Authlayout />,
    children:[
         { index: true, element: <Navigate to="/login" replace /> },
        {path:"/login",element:<Login/>},
        {path:"register", element:<Register/>},
 
        {
          path:"dashboard",
          element:(
            <ProtectedRoute>
              <Dashboard/>
            </ProtectedRoute>
          )
        }
    ]
  }
  ])


export default router;