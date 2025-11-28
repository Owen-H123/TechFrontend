import { Link } from "react-router-dom";
import logo from "../../img/logo.png";

export default function DetallePedido() {
  return (
    <div className="min-vh-100" style={{ backgroundColor: "#f0f4f8" }}>
      {/* HEADER */}
      <nav className="navbar shadow-sm" style={{ backgroundColor: "#1E878D" }}>
        <div className="container-fluid px-4 d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img src={logo} alt="Tech Solutions" style={{ height: "60px" }} className="me-3" />
          </div>

          <div className="d-flex gap-2">
            <Link to="/" className="btn btn-light">
              <i className="bi bi-house-door-fill me-2"></i>Inicio
            </Link>
            <button className="btn btn-outline-light">Cerrar Sesión</button>
          </div>
        </div>
      </nav>

      {/* PANEL: Detalle del pedido */}
      <div className="container-fluid px-4 py-4">
        <div className="card border-0">
          <div
            className="d-flex justify-content-between align-items-center px-3"
            style={{
              background: "linear-gradient(180deg,#8fd6d2,#7cc6c3)",
              padding: "18px",
              borderTopLeftRadius: "4px",
              borderTopRightRadius: "4px"
            }}
          >
            <h3 className="m-0 fw-bold" style={{ color: "#083f3f" }}>Detalle del pedido</h3>
            <button className="btn btn-link text-dark" style={{ fontSize: "24px", textDecoration: "none" }}>✕</button>
          </div>

          <div className="card-body" style={{ backgroundColor: "#fff" }}>
            <div className="row g-3 mb-3">
              <div className="col-md-6">
                <label className="form-label">Código:</label>
                <input className="form-control" type="text" readOnly placeholder="" />
              </div>

              <div className="col-md-6 d-flex align-items-end">
                <div className="ms-auto">
                  <label className="form-label">Fecha:</label>
                  <input className="form-control form-control-sm" type="date" />
                </div>
              </div>

              <div className="col-md-6">
                <label className="form-label">Cliente:</label>
                <input className="form-control" type="text" placeholder="" />
              </div>

              <div className="col-md-6">
                <label className="form-label">Método de pago:</label>
                <select className="form-select form-select-sm">
                  <option>Seleccionar</option>
                  <option>Tarjeta</option>
                  <option>Yape</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label">Estado:</label>
                <select className="form-select form-select-sm" style={{ width: "160px" }}>
                  <option>Seleccionar</option>
                  <option>Pendiente</option>
                  <option>Pagado</option>
                </select>
              </div>

              <div className="col-md-6 d-flex align-items-end justify-content-end gap-2">
                <button className="btn" style={{ backgroundColor: "#104A4D", color: "#fff" }}>
                  Guardar Cambios
                </button>
                <button className="btn" style={{ backgroundColor: "#ffea00", color: "#000" }}>
                  Deshacer ultimo cambio
                </button>
                <Link to="/pedidos" className="btn btn-secondary">Volver</Link>
              </div>
            </div>

            {/* Tabla productos del pedido */}
            <h6 className="text-center fw-bold mb-3">Productos del pedido</h6>
            <div className="table-responsive">
              <table className="table table-bordered text-center align-middle mb-0">
                <thead>
                  <tr>
                    <th>Imagen</th>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td style={{ height: "60px" }}></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td style={{ height: "60px" }}></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Total */}
            <div className="d-flex justify-content-between align-items-center mt-4">
              <div className="fw-bold" style={{ fontSize: "18px" }}>
                Total:
              </div>

              <div style={{ fontSize: "18px" }} className="fw-bold">S/.</div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
