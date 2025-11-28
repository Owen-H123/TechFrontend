import { createBrowserRouter } from "react-router-dom";
import Home from "../assets/pages/Home";
import Login from "../assets/pages/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  }
]);

export default router;
