import { Link } from "react-router-dom";
import logo from "../../img/logo.png";

export default function ConfiguracionP() {
    return (
        <div className="min-vh-100" style={{ backgroundColor: "#f0f4f8" }}>
          

            {/* Barra de Configuración */}
            <nav className="navbar shadow-sm" style={{ backgroundColor: "#72BEC2" }}>
                <div className="container-fluid px-4">
                    <h2 className="navbar-brand text-white mb-0 fw-bold">Configuración</h2>
                    <button className="btn text-white fw-semibold" style={{ backgroundColor: "#104A4D" }}>
                        Guardar cambios
                    </button>
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
                                    style={{ backgroundColor: "#8fb8b6" }}>
                                <div className="rounded-circle me-2" style={{ width: "8px", height: "8px", backgroundColor: "#2d2d2d" }}></div>
                                <span className="fw-semibold" style={{ fontSize: "0.85rem", color: "inherit" }}>Parámetros de pago</span>
                            </Link>
                            <Link to="/configuracion-usuarios" className="list-group-item list-group-item-action d-flex align-items-center py-2 border-0 mb-5 rounded text-decoration-none" 
                                    style={{ backgroundColor: "#72BEC2" }}>
                                <div className="rounded-circle me-2" style={{ width: "8px", height: "8px", backgroundColor: "#ffffff" }}></div>
                                <span style={{ fontSize: "0.85rem", color: "inherit" }}>Gestion de usuarios</span>
                            </Link>
                        </div>
                    </div>

                    {/* Área Principal */}
                    <div className="col-lg-10 col-md-9 p-0" style={{ backgroundColor: "#e8f0ef", minHeight: "calc(100vh - 120px)" }}>
                        <div className="card shadow-sm border-0 bg-white h-100 rounded-0">
                            <div className="card-body p-4 d-flex flex-column align-items-center justify-content-center">
                                <div style={{ width: "100%", maxWidth: "600px" }}>
                                    <h5 className="fw-bold mb-4 text-center" style={{ fontSize: "1.1rem", marginTop: "-70px" }}>Pasarelas disponibles</h5>

                                    {/* Paypal */}
                                    <div className="mb-4">
                                        <div className="form-check d-flex align-items-center">
                                            <input 
                                                className="form-check-input me-2" 
                                                type="checkbox" 
                                                id="paypal"
                                                defaultChecked
                                                style={{ width: "20px", height: "20px", cursor: "pointer" }}
                                            />
                                            <label className="form-check-label fw-semibold" htmlFor="paypal" style={{ cursor: "pointer", fontSize: "0.95rem" }}>
                                                Paypal
                                            </label>
                                        </div>
                                        <div className="ms-4 mt-1">
                                            <span style={{ fontSize: "0.85rem", color: "#28a745" }}>Estado: <span className="fw-semibold">activo</span></span>
                                        </div>
                                    </div>

                                    {/* Yape */}
                                    <div className="mb-4">
                                        <div className="form-check d-flex align-items-center">
                                            <input 
                                                className="form-check-input me-2" 
                                                type="checkbox" 
                                                id="yape"
                                                defaultChecked
                                                style={{ width: "20px", height: "20px", cursor: "pointer" }}
                                            />
                                            <label className="form-check-label fw-semibold" htmlFor="yape" style={{ cursor: "pointer", fontSize: "0.95rem" }}>
                                                Yape
                                            </label>
                                        </div>
                                        <div className="ms-4 mt-1">
                                            <span style={{ fontSize: "0.85rem", color: "#28a745" }}>Estado: <span className="fw-semibold">activo</span></span>
                                        </div>
                                    </div>

                                    {/* Plin */}
                                    <div className="mb-4">
                                        <div className="form-check d-flex align-items-center">
                                            <input 
                                                className="form-check-input me-2" 
                                                type="checkbox" 
                                                id="plin"
                                                style={{ width: "20px", height: "20px", cursor: "pointer" }}
                                            />
                                            <label className="form-check-label fw-semibold" htmlFor="plin" style={{ cursor: "pointer", fontSize: "0.95rem" }}>
                                                Plin
                                            </label>
                                        </div>
                                        <div className="ms-4 mt-1">
                                            <span style={{ fontSize: "0.85rem", color: "#dc3545" }}>Estado: <span className="fw-semibold">inactivo</span></span>
                                        </div>
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
