import { Link } from "react-router-dom";
import logo from "../../img/logo.png";

export default function Reportes() {
    return (
        <div className="min-vh-100" style={{ backgroundColor: "#f0f4f8" }}>
            {/* Header */}
            <nav className="navbar shadow-sm" style={{ backgroundColor: "#319EA4" }}>
                <div className="container-fluid px-4">
                    <div className="d-flex align-items-center">
                        <img src={logo} alt="Tech Solutions" style={{ height: "80px" }} className="me-3" />
                        <span className="navbar-brand text-white mb-0 h5 fw-bold"></span>
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

            <div className="container-fluid">
                <div className="row">
                    
                    <div className="col-lg-2 col-md-3 p-4" style={{ backgroundColor: "#7da5a3" }}>
                        <h5 className="text-white fw-bold mb-4">Filtros</h5>
                        
                        
                        <div className="mb-4">
                            <label className="form-label text-white fw-semibold">Porcentaje</label>
                            <div className="input-group input-group-sm">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    value="$15.000" 
                                    readOnly
                                    style={{ backgroundColor: "#d4e6e5" }}
                                />
                                <button className="btn btn-success">
                                    <i className="bi bi-plus"></i>
                                </button>
                            </div>
                        </div>

                       
                        <div className="mb-4">
                            <label className="form-label text-white fw-semibold">Fecha fin</label>
                            <div className="input-group input-group-sm">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    value="12-10-2022" 
                                    readOnly
                                    style={{ backgroundColor: "#d4e6e5" }}
                                />
                                <button className="btn btn-success">
                                    <i className="bi bi-plus"></i>
                                </button>
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="form-label text-white fw-semibold">Tipo</label>
                            <select 
                                className="form-select form-select-sm" 
                                style={{ backgroundColor: "#d4e6e5" }}
                            >
                                <option>Ventas</option>
                                <option>Compras</option>
                                <option>Inventario</option>
                            </select>
                        </div>

                        
                        <div className="mb-4">
                            <label className="form-label text-white fw-semibold">Categoría</label>
                            <select 
                                className="form-select form-select-sm" 
                                style={{ backgroundColor: "#d4e6e5" }}
                            >
                                <option>Producto 1</option>
                                <option>Producto 2</option>
                                <option>Producto 3</option>
                            </select>
                        </div>

                        
                        <div className="mb-4">
                            <label className="form-label text-white fw-semibold">Productos</label>
                            <select 
                                className="form-select form-select-sm" 
                                style={{ backgroundColor: "#d4e6e5" }}
                            >
                                <option>Mensual</option>
                                <option>Trimestral</option>
                                <option>Anual</option>
                            </select>
                        </div>

                        
                        <button 
                            className="btn btn-sm w-100 text-white fw-semibold"
                            style={{ backgroundColor: "#104A4D" }}
                        >
                            Generar Reporte
                        </button>
                    </div>

                    
                    <div className="col-lg-10 col-md-9 p-4">
                        <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
                            <h2 className="fw-bold mb-2 mb-md-0" style={{ color: "#104A4D" }}>Reportes</h2>
                            <div className="btn-group" role="group">
                                <button className="btn btn-dark">
                                    Exportar a PDF
                                </button>
                                <button className="btn btn-success">
                                    Exportar a Excel
                                </button>
                            </div>
                        </div>

                      
                        <div className="card shadow-sm border-0">
                            <div className="card-body p-4 p-lg-5">
                                <div className="position-relative d-flex justify-content-center align-items-end" style={{ height: "400px" }}>
                                    {/* Eje Y */}
                                    <div className="position-absolute bg-dark" style={{
                                        left: "80px",
                                        bottom: "60px",
                                        width: "3px",
                                        height: "350px"
                                    }}></div>

                                   
                                    <div className="position-absolute bg-dark" style={{
                                        left: "80px",
                                        bottom: "60px",
                                        width: "600px",
                                        height: "3px"
                                    }}></div>

                                    
                                    <div className="position-absolute" style={{
                                        left: "76px",
                                        top: "40px",
                                        width: "0",
                                        height: "0",
                                        borderLeft: "6px solid transparent",
                                        borderRight: "6px solid transparent",
                                        borderBottom: "12px solid #333"
                                    }}></div>

                                    <div className="position-absolute" style={{
                                        right: "220px",
                                        bottom: "54px",
                                        width: "0",
                                        height: "0",
                                        borderTop: "6px solid transparent",
                                        borderBottom: "6px solid transparent",
                                        borderLeft: "12px solid #333"
                                    }}></div>

                                    
                                    <div className="d-flex align-items-end justify-content-center gap-2 gap-md-3" style={{ marginLeft: "100px", marginBottom: "60px" }}>
                                        <div className="rounded-top" style={{ 
                                            width: "60px", 
                                            height: "200px", 
                                            backgroundColor: "#ff6b6b"
                                        }}></div>
                                        <div className="rounded-top" style={{ 
                                            width: "60px", 
                                            height: "180px", 
                                            backgroundColor: "#a8e063"
                                        }}></div>
                                        <div className="rounded-top" style={{ 
                                            width: "60px", 
                                            height: "240px", 
                                            backgroundColor: "#7c6bff"
                                        }}></div>
                                        <div className="rounded-top" style={{ 
                                            width: "60px", 
                                            height: "160px", 
                                            backgroundColor: "#dc6bff"
                                        }}></div>
                                        <div className="rounded-top" style={{ 
                                            width: "60px", 
                                            height: "170px", 
                                            backgroundColor: "#6bddff"
                                        }}></div>
                                        <div className="rounded-top" style={{ 
                                            width: "60px", 
                                            height: "220px", 
                                            backgroundColor: "#ffe66b"
                                        }}></div>
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
