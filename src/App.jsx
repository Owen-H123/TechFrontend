import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./assets/pages/Home";
import Login from "./assets/pages/Login.jsx";
import Registro from "./assets/pages/Registro.jsx";
import Reportes from "./assets/pages/Reportes.jsx";
import Catalogo from "./assets/pages/catalago.jsx";
import Pedidos from "./assets/pages/pedidos.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/registro", element: <Registro /> },
  { path: "/reportes", element: <Reportes /> },
  { path: "/catalogo", element: <Catalogo /> },
  { path: "/Pedidos", element:<Pedidos/>}
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
