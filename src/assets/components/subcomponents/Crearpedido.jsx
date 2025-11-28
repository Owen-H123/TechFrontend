import { Link } from "react-router-dom";


export default function CrearPedido() {
  return (
    <div className="min-vh-100" style={{ backgroundColor: "#f0f4f8" }}>
   
      <nav className="navbar shadow-sm" style={{ backgroundColor: "#1E878D" }}>
        <div className="container-fluid px-4 d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
          <h2>Crear Pedido</h2>
          </div>

          <div className="d-flex gap-2">
            <Link to="/" className="btn btn-light pt-2 m-3">
             <span>Volver</span>
            </Link>
            <button className="btn btn-link text-dark" style={{ fontSize: "24px", textDecoration: "none" }}>✕</button>
          </div>
        </div>
      </nav>

     
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

          </div>

          <div className="card-body" style={{ backgroundColor: "#fff" }}>
            <div className="row g-3 mb-3">
              <div className="col-md-6 d-flex align-items-center">
                <label className="me-2 mb-0" style={{ minWidth: "160px" }}>Seleccionar cliente:</label>
                <input className="form-control" type="text" placeholder="" />
                
              </div>

              <div className="col-md-3 d-flex align-items-center">
                <label className="me-2 mb-0">Estado:</label>
                <select className="form-select form-select-sm" style={{ width: "120px" }}>
                  <option>Pendiente</option>
                  <option>Pagado</option>
                </select>
              </div>

              <div className="col-md-3 d-flex align-items-center">
                <label className="me-2 mb-0">Método de pago:</label>
                <select className="form-select form-select-sm" style={{ width: "140px" }}>
                  <option>Seleccionar</option>
                  <option>Tarjeta</option>
                  <option>Yape</option>
                </select>
              </div>

              <div className="col-md-6 d-flex align-items-center">
                <label className="me-2 mb-0" style={{ minWidth: "160px" }}>Seleccionar producto:</label>
                <input className="form-control" type="text" placeholder="" />
                
              </div>
            </div>


            <h6 className="text-center fw-bold mb-3">Lista de productos agregados</h6>

            <div className="table-responsive">
              <table className="table table-bordered text-center align-middle mb-0">
                <thead style={{ backgroundColor: "#fff" }}>
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

          
            <div className="d-flex justify-content-between align-items-center mt-4">
              <div className="fw-bold" style={{ fontSize: "18px" }}>
                Total: <span className="ms-2">S/.</span>
              </div>

              <div>
                <button className="btn" style={{ backgroundColor: "#104A4D", color: "#fff", marginRight: "12px" }}>
                  Guardar Pedido
                </button>

                <button className="btn btn-danger">
                  Cancelar
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
