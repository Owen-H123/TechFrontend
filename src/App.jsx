import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./assets/pages/Home";
import Login from "./assets/pages/Login.jsx";
import Registro from "./assets/pages/Registro.jsx";
import Reportes from "./assets/pages/Reportes.jsx";
import Catalogo from "./assets/pages/catalago.jsx";
import Pedidos from "./assets/pages/pedidos.jsx";
import CrearP from "./assets/components/CrearP.jsx";
import DetalleP from "./assets/components/DetalleP.jsx";
import AgregarEditar from "./assets/components/EditarP.jsx";
import ProcesarPa from "./assets/components/ProcesarPa.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/registro", element: <Registro /> },
  { path: "/reportes", element: <Reportes /> },
  { path: "/catalogo", element: <Catalogo /> },
  { path: "/pedidos", element: <Pedidos /> },
  { path: "/crear-pedido", element: <CrearP /> },
  { path: "/detalle-pedido", element: <DetalleP /> },
  { path: "/agregar-editar", element: <AgregarEditar /> },
  { path: "/procesarpa",element:<ProcesarPa/>},
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
