import { Link } from "react-router-dom";

export default function NabvarPanel() {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">Welcome</a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>

      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link className="nav-link" to="/panel/reportes">
            Reportes
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/panel/catalogo">
            Catálogo
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/panel/pedidos">
            Pedidos
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/panel/configuracion">
            Configuración
          </Link>
        </li>
      </ul>
    </>
  );
}
