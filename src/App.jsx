import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./assets/pages/Home";
import Login from "./assets/pages/Login.jsx";

import Registro from "./assets/pages/Registro.jsx";
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/registro", element: <Registro /> } 
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
