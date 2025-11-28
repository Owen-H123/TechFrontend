import { Link } from "react-router-dom";

export default function AgregarEditar() {
    return (
        <div className="min-vh-100" style={{ backgroundColor: "#f0f4f8" }}>
            {/* Navbar superior */}
            <nav className="navbar shadow-sm" style={{ backgroundColor: "#1E878D" }}>
                <div className="container-fluid px-4 d-flex justify-content-between align-items-center">
                    <h2 className="text-white mb-0 fw-bold">Agregar / Editar</h2>
                    <div className="d-flex gap-2">
                        <Link to="/catalogo" className="btn btn-light pt-2">
                            <span>Volver</span>
                        </Link>
                        <button className="btn btn-link text-white" style={{ fontSize: "24px", textDecoration: "none" }}>✕</button>
                    </div>
                </div>
            </nav>

            {/* Contenido principal */}
            <div className="container-fluid px-4 py-4">
                <div className="card border-0 shadow-sm">
                    <div className="card-body p-4" style={{ backgroundColor: "#fff" }}>
                        {/* Imagen del producto */}
                        <div className="mb-4">
                            <label className="form-label fw-semibold">Imagen del producto</label>
                            <div className="d-flex align-items-center gap-3">
                                <div className="bg-light border rounded d-flex align-items-center justify-content-center" 
                                     style={{ width: "120px", height: "100px" }}>
                                    <i className="bi bi-image text-muted fs-3"></i>
                                </div>
                                <button className="btn btn-sm text-white" style={{ backgroundColor: "#104A4D" }}>
                                    Subir
                                </button>
                            </div>
                        </div>

                        {/* Nombre del producto */}
                        <div className="mb-3">
                            <label className="form-label fw-semibold">Nombre del producto</label>
                            <input type="text" className="form-control" />
                        </div>

                        {/* Descripción */}
                        <div className="mb-3">
                            <label className="form-label fw-semibold">Descripción</label>
                            <input type="text" className="form-control" />
                        </div>

                        {/* Categorías y Stock */}
                        <div className="row mb-3">
                            <div className="col-md-6 mb-3 mb-md-0">
                                <label className="form-label fw-semibold">Categorías</label>
                                <select className="form-select">
                                    <option>Seleccionar</option>
                                    <option>Electrónica</option>
                                    <option>Ropa</option>
                                    <option>Alimentos</option>
                                </select>
                            </div>
                            <div className="col-md-6">
                                <label className="form-label fw-semibold">Stock [______]</label>
                                <input type="number" className="form-control" />
                            </div>
                        </div>

                        {/* Marcas y Precio */}
                        <div className="row mb-3">
                            <div className="col-md-6 mb-3 mb-md-0">
                                <label className="form-label fw-semibold">Marcas</label>
                                <select className="form-select">
                                    <option>Seleccionar</option>
                                    <option>Marca X</option>
                                    <option>Marca Y</option>
                                    <option>Marca Z</option>
                                </select>
                            </div>
                            <div className="col-md-6">
                                <label className="form-label fw-semibold">Precio [______]</label>
                                <input type="number" className="form-control" step="0.01" />
                            </div>
                        </div>

                        {/* Stock Mínimo y Usuario Notificable */}
                        <div className="row mb-4">
                            <div className="col-md-6 mb-3 mb-md-0">
                                <label className="form-label fw-semibold">Stock Mínimo [______]</label>
                                <input type="number" className="form-control" />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label fw-semibold">Usuario Notificable</label>
                                <select className="form-select">
                                    <option>Seleccionar</option>
                                    <option>Admin</option>
                                    <option>Gerente</option>
                                    <option>Supervisor</option>
                                </select>
                            </div>
                        </div>

                        {/* Botones */}
                        <div className="d-flex justify-content-center gap-3">
                            <button className="btn text-white px-4" style={{ backgroundColor: "#104A4D" }}>
                                Guardar Cambios
                            </button>
                            <button className="btn btn-danger px-4">
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
