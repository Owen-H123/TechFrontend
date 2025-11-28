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
import ConfiguracionE from "./assets/pages/ConfiguracionE.jsx";
import ConfiguracionP from "./assets/pages/ConfiguracionP.jsx";
import ConfiguracionG from "./assets/pages/ConfiguracionG.jsx";
import ProcesarPa from "./assets/components/ProcesarPa.jsx";
import Paypal from "./assets/components/subcomponents/Paypal.jsx";
import Plin from "./assets/components/subcomponents/Plin.jsx";
import Yape from "./assets/components/subcomponents/Yape.jsx";


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
  { path: "/pagar/paypal", element: <Paypal /> },
  { path: "/pagar/plin", element: <Plin /> },
  { path: "/pagar/yape", element: <Yape /> },
  { path: "/configuracion", element: <ConfiguracionE /> },
  { path: "/configuracion-pagos", element: <ConfiguracionP /> },
  { path: "/configuracion-usuarios", element: <ConfiguracionG /> },
  { path: "/procesarpa", element: <ProcesarPa /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
