import { Link } from "react-router-dom";
import logo from "../../img/logo.png";

export default function ConfiguracionG() {
    return (
        <div className="min-vh-100" style={{ backgroundColor: "#f0f4f8" }}>
            {/* Header */}
            <nav className="navbar shadow-sm" style={{ backgroundColor: "#173E40" }}>
                <div className="container-fluid px-4">
                    <div className="d-flex align-items-center">
                        <img src={logo} alt="Tech Solutions" style={{ height: "50px" }} className="me-3" />
                    </div>
                    <div className="d-flex gap-2">
                        <button className="btn btn-light">
                            <i className="bi bi-house-door-fill me-2"></i>Inicio
                        </button>
                        <button className="btn btn-outline-light">
                            Cerrar Sesión
                        </button>
                    </div>
                </div>
            </nav>

            {/* Barra de Configuración */}
            <nav className="navbar shadow-sm" style={{ backgroundColor: "#72BEC2" }}>
                <div className="container-fluid px-4">
                    <h2 className="navbar-brand text-white mb-0 fw-bold">Configuración</h2>
                    <div className="d-flex gap-2 align-items-center">
                        <div className="position-relative">
                            <input 
                                type="text" 
                                className="form-control form-control-sm" 
                                placeholder="Buscar"
                                style={{ width: "200px", paddingRight: "35px" }}
                            />
                            <i className="bi bi-search position-absolute" 
                               style={{ right: "10px", top: "50%", transform: "translateY(-50%)" }}>
                            </i>
                        </div>
                        <button className="btn text-white fw-semibold" style={{ backgroundColor: "#104A4D" }}>
                            Agregar usuario
                        </button>
                    </div>
                </div>
            </nav>

            <div className="container-fluid p-0">
                <div className="row g-0">
                    {/* Sidebar */}
                    <div className="col-lg-2 col-md-3 p-0" style={{ backgroundColor: "#72BEC2", minHeight: "calc(100vh - 120px)" }}>
                        <div className="p-3">
                            <br></br>
                            <br></br>
                            <Link to="/configuracion" className="list-group-item list-group-item-action d-flex align-items-center py-2 border-0 mb-5 rounded text-decoration-none" 
                                    style={{ backgroundColor: "#72BEC2" }}>
                                <div className="rounded-circle me-2" style={{ width: "8px", height: "8px", backgroundColor: "#ffffff" }}></div>
                                <span style={{ fontSize: "0.85rem", color: "inherit" }}>Estrategia de precios</span>
                            </Link>
                            <Link to="/configuracion-pagos" className="list-group-item list-group-item-action d-flex align-items-center py-2 border-0 mb-5 rounded text-decoration-none" 
                                    style={{ backgroundColor: "#72BEC2" }}>
                                <div className="rounded-circle me-2" style={{ width: "8px", height: "8px", backgroundColor: "#ffffff" }}></div>
                                <span style={{ fontSize: "0.85rem", color: "inherit" }}>Parámetros de pago</span>
                            </Link>
                            <Link to="/configuracion-usuarios" className="list-group-item list-group-item-action d-flex align-items-center py-2 border-0 mb-5 rounded text-decoration-none" 
                                    style={{ backgroundColor: "#8fb8b6" }}>
                                <div className="rounded-circle me-2" style={{ width: "8px", height: "8px", backgroundColor: "#2d2d2d" }}></div>
                                <span className="fw-semibold" style={{ fontSize: "0.85rem", color: "inherit" }}>Gestion de usuarios</span>
                            </Link>
                        </div>
                    </div>

                    {/* Área Principal */}
                    <div className="col-lg-10 col-md-9 p-0" style={{ backgroundColor: "#e8f0ef", minHeight: "calc(100vh - 120px)" }}>
                        <div className="card shadow-sm border-0 bg-white h-100 rounded-0">
                            <div className="card-body p-4 d-flex flex-column align-items-center justify-content-center">
                                <div style={{ width: "100%", maxWidth: "800px" }}>
                                    <h5 className="fw-bold mb-4 text-center" style={{ fontSize: "1.1rem" }}>Gestión de usuarios</h5>

                                    {/* Tabla de usuarios */}
                                    <div className="table-responsive">
                                        <table className="table table-hover">
                                        <thead style={{ backgroundColor: "#f8f9fa" }}>
                                            <tr>
                                                <th style={{ fontSize: "0.9rem", fontWeight: "600" }}>Usuario</th>
                                                <th style={{ fontSize: "0.9rem", fontWeight: "600" }}>Rol</th>
                                                <th style={{ fontSize: "0.9rem", fontWeight: "600" }}>Estado</th>
                                                <th style={{ fontSize: "0.9rem", fontWeight: "600" }}>Acciones</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style={{ fontSize: "0.9rem" }}>Mario Casas</td>
                                                <td style={{ fontSize: "0.9rem" }}>Gerente</td>
                                                <td style={{ fontSize: "0.9rem" }}>Activo</td>
                                                <td>
                                                    <button className="btn btn-sm text-white" style={{ backgroundColor: "#104A4D", fontSize: "0.85rem" }}>
                                                        Editar
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{ fontSize: "0.9rem" }}>Pamela Gomez</td>
                                                <td style={{ fontSize: "0.9rem" }}>Contador</td>
                                                <td style={{ fontSize: "0.9rem" }}>Activo</td>
                                                <td>
                                                    <button className="btn btn-sm text-white" style={{ backgroundColor: "#104A4D", fontSize: "0.85rem" }}>
                                                        Editar
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{ fontSize: "0.9rem" }}>Josue Martinez</td>
                                                <td style={{ fontSize: "0.9rem" }}>Compras</td>
                                                <td style={{ fontSize: "0.9rem" }}>Inactivo</td>
                                                <td>
                                                    <button className="btn btn-sm text-white" style={{ backgroundColor: "#104A4D", fontSize: "0.85rem" }}>
                                                        Editar
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
