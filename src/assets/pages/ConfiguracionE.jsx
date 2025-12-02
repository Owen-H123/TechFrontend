import { Link } from "react-router-dom";

export default function ConfiguracionE() {
    return (
        <div className="min-vh-100" style={{ backgroundColor: "#f0f4f8" }}>

           
            <nav className="navbar shadow-sm pt-4 pb-4" style={{ backgroundColor: "#72BEC2" }}>
                <div className="container-fluid px-4 d-flex justify-content-between align-items-center">
                    <h2 className="fw-bold m-0" style={{ color: "#173E40" }}>
                        Configuración
                    </h2>

                    <button
                        className="btn text-white fw-semibold"
                        style={{ backgroundColor: "#104A4D" }}
                    >
                        Guardar cambios
                    </button>
                </div>
            </nav>

           
            <div className="container-fluid">
                <div className="row">

                
                    <div className="col-lg-2 col-md-3 p-4" style={{ backgroundColor: "#A6CFD2", minHeight: "100vh" }}>

                        <h5 className="fw-bold mb-4 mt-4" style={{ color: "#173E40" }}>
                            Opciones
                        </h5>

                    
                        <Link
                            to="/configuracion"
                            className="d-block p-2 rounded mb-3 text-decoration-none fw-semibold"
                            style={{
                                backgroundColor: "#d4e6e5",
                                color: "#173E40",
                                fontSize: "0.9rem"
                            }}
                        >
                            Estrategia de precios
                        </Link>

                        
                        <Link
                            to="/configuracion-pagos"
                            className="d-block p-2 rounded mb-3 text-decoration-none fw-semibold"
                            style={{
                                backgroundColor: "#d4e6e5",
                                color: "#173E40",
                                fontSize: "0.9rem"
                            }}
                        >
                            Parámetros de pago
                        </Link>

                        {/* ITEM 3 */}
                        <Link
                            to="/configuracion-usuarios"
                            className="d-block p-2 rounded mb-3 text-decoration-none fw-semibold"
                            style={{
                                backgroundColor: "#d4e6e5",
                                color: "#173E40",
                                fontSize: "0.9rem"
                            }}
                        >
                            Gestión de usuarios
                        </Link>

                    </div>

                   
                    <div className="col-lg-10 col-md-9 p-4">

                        <div className="card shadow-sm border-0">
                            <div className="card-body">

                                <h5 className="fw-bold mb-4 text-center" style={{ color: "#104A4D" }}>
                                    Seleccionar estrategia de precios
                                </h5>

                                <div style={{ maxWidth: "600px", margin: "0 auto" }}>

                                    
                                    <div className="mb-4">
                                        <div className="form-check d-flex align-items-center">
                                            <input
                                                className="form-check-input me-2"
                                                type="checkbox"
                                                defaultChecked
                                                style={{ width: "18px", height: "18px" }}
                                            />
                                            <label className="form-check-label fw-semibold">
                                                Precio estándar
                                            </label>
                                        </div>
                                    </div>

                                 
                                    <div className="mb-4">
                                        <div className="form-check d-flex align-items-center mb-2">
                                            <input
                                                className="form-check-input me-2"
                                                type="checkbox"
                                                defaultChecked
                                                style={{ width: "18px", height: "18px" }}
                                            />
                                            <label className="form-check-label fw-semibold">
                                                Precio con descuento
                                            </label>
                                        </div>

                                        <div className="ms-4 d-flex align-items-center">
                                            <label className="form-label mb-0 me-2" style={{ fontSize: "0.85rem" }}>
                                                % del descuento
                                            </label>
                                            <input
                                                type="number"
                                                className="form-control form-control-sm"
                                                style={{ width: "150px", backgroundColor: "#d4e6e5" }}
                                            />
                                        </div>
                                    </div>

                                    {/* Precio dinámico */}
                                    <div className="mb-4">
                                        <div className="form-check d-flex align-items-center mb-3">
                                            <input
                                                className="form-check-input me-2"
                                                type="checkbox"
                                                style={{ width: "18px", height: "18px" }}
                                            />
                                            <label className="form-check-label fw-semibold">
                                                Precio dinámico
                                            </label>
                                        </div>

                                        <div className="ms-5">
                                            <div className="form-check mb-2 d-flex align-items-center">
                                                <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    style={{ width: "16px", height: "16px" }}
                                                />
                                                <label className="form-check-label" style={{ fontSize: "0.85rem" }}>
                                                    Ajuste por demanda
                                                </label>
                                            </div>

                                            <div className="form-check d-flex align-items-center">
                                                <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    style={{ width: "16px", height: "16px" }}
                                                />
                                                <label className="form-check-label" style={{ fontSize: "0.85rem" }}>
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
