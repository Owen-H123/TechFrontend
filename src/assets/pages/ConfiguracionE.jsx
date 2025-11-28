import { Link } from "react-router-dom";
import logo from "../../img/logo.png";

export default function ConfiguracionE() {
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
                                    style={{ backgroundColor: "#8fb8b6" }}>
                                <div className="rounded-circle me-2" style={{ width: "8px", height: "8px", backgroundColor: "#2d2d2d" }}></div>
                                <span className="fw-semibold" style={{ fontSize: "0.85rem", color: "inherit" }}>Estrategia de precios</span>
                            </Link>
                            <Link to="/configuracion-pagos" className="list-group-item list-group-item-action d-flex align-items-center py-2 border-0 mb-5 rounded text-decoration-none" 
                                    style={{ backgroundColor: "#72BEC2" }}>
                                <div className="rounded-circle me-2" style={{ width: "8px", height: "8px", backgroundColor: "#ffffff"}}></div>
                                <span style={{ fontSize: "0.85rem", color: "inherit" }}>Parámetros de pago</span>
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
                                    <h5 className="fw-bold mb-3 text-center" style={{ fontSize: "1.1rem", marginTop: "-70px" }}>Seleccionar estrategia de precios</h5>

                                {/* Precio estándar */}
                                <div className="mb-4" style={{ marginTop: "30px" }}>
                                    <div className="form-check d-flex align-items-center">
                                        <input 
                                            className="form-check-input me-2" 
                                            type="checkbox" 
                                            id="precioEstandar"
                                            defaultChecked
                                            style={{ width: "18px", height: "18px", cursor: "pointer" }}
                                        />
                                        <label className="form-check-label fw-semibold" htmlFor="precioEstandar" style={{ cursor: "pointer", fontSize: "0.95rem" }}>
                                            Precio estándar
                                        </label>
                                    </div>
                                </div>

                                {/* Precio con descuento */}
                                <div className="mb-4">
                                    <div className="form-check d-flex align-items-center mb-2">
                                        <input 
                                            className="form-check-input me-2" 
                                            type="checkbox" 
                                            id="precioDescuento"
                                            defaultChecked
                                            style={{ width: "18px", height: "18px", cursor: "pointer" }}
                                        />
                                        <label className="form-check-label fw-semibold" htmlFor="precioDescuento" style={{ cursor: "pointer", fontSize: "0.95rem" }}>
                                            Precio con descuento
                                        </label>
                                    </div>
                                    <div className="ms-4 d-flex align-items-center">
                                        <label className="form-label mb-0 me-2" style={{ fontSize: "0.85rem" }}>% del descuento</label>
                                        <input 
                                            type="number" 
                                            className="form-control form-control-sm" 
                                            style={{ width: "150px" }}
                                            placeholder=""
                                        />
                                    </div>
                                </div>

                                {/* Precio dinámico */}
                                <div className="mb-4">
                                    <div className="form-check d-flex align-items-center mb-3">
                                        <input 
                                            className="form-check-input me-2" 
                                            type="checkbox" 
                                            id="precioDinamico"
                                            style={{ width: "18px", height: "18px", cursor: "pointer" }}
                                        />
                                        <label className="form-check-label fw-semibold" htmlFor="precioDinamico" style={{ cursor: "pointer", fontSize: "0.95rem" }}>
                                            Precio dinámico
                                        </label>
                                    </div>

                                    <div className="ms-5">
                                        <div className="form-check mb-2 d-flex align-items-center">
                                            <input 
                                                className="form-check-input me-2" 
                                                type="checkbox" 
                                                id="ajusteDemanda"
                                                style={{ width: "16px", height: "16px", cursor: "pointer" }}
                                            />
                                            <label className="form-check-label" htmlFor="ajusteDemanda" style={{ fontSize: "0.85rem", cursor: "pointer" }}>
                                                Ajuste por demanda
                                            </label>
                                        </div>

                                        <div className="form-check d-flex align-items-center">
                                            <input 
                                                className="form-check-input me-2" 
                                                type="checkbox" 
                                                id="ajusteTemporada"
                                                style={{ width: "16px", height: "16px", cursor: "pointer" }}
                                            />
                                            <label className="form-check-label" htmlFor="ajusteTemporada" style={{ fontSize: "0.85rem", cursor: "pointer" }}>
                                                Ajuste por temporada
                                            </label>
                                        </div>
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
