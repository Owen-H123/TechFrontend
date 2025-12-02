import { Link, useNavigate } from "react-router-dom";

export default function NabvarPanel() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar" style={{ backgroundColor: "#1E878D" }}>
        <div className="container-fluid">
          <a className="navbar-brand m-2" style={{ color: "white" }}>
            Welcome a TechSolutions
          </a>

          <div className="d-flex">
            <button
              className="btn btn-outline-light fw-bold"
              onClick={handleLogout}
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      </nav>

      <ul className="nav nav-tabs" style={{ backgroundColor: "#72BEC2" }}>
        <li className="nav-item">
          <Link
            className="nav-link text-white fw-bold"
            to="/panel/reportes"
            style={{ borderRadius: "0", transition: "0.3s" }}
          >
            Reportes
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link text-white fw-bold"
            to="/panel/catalogo"
            style={{ borderRadius: "0", transition: "0.3s" }}
          >
            Catálogo
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link text-white fw-bold"
            to="/panel/pedidos"
            style={{ borderRadius: "0", transition: "0.3s" }}
          >
            Pedidos
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link text-white fw-bold"
            to="/panel/configuracion"
            style={{ borderRadius: "0", transition: "0.3s" }}
          >
            Configuración
          </Link>
        </li>
      </ul>
    </>
  );
}
