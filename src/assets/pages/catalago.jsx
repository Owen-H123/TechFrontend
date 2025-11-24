import { Link } from "react-router-dom";
import logo from "../../img/logo.png";

export default function Catalogo() {
    return (
        <div className="min-vh-100" style={{ backgroundColor: "#f0f4f8" }}>
            {/* Header */}
            <nav className="navbar shadow-sm" style={{ backgroundColor: "#066368" }}>
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

            {/* Barra de Catálogo con búsqueda */}
            <nav className="navbar shadow-sm" style={{ backgroundColor: "#6BA0A3" }}>
                <div className="container-fluid px-4">
                    <h2 className="navbar-brand  mb-0 fw-bold" style={{color:"#173E40"}}>CATÁLOGO</h2>
                    <div className="input-group" style={{ maxWidth: "350px" }}>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Buscar"
                        />
                        <button className="btn btn-light">
                            <i className="bi bi-search"></i>
                        </button>
                    </div>
                </div>
            </nav>

            <div className="container-fluid">
                <div className="row">
                    {/* Sidebar con Filtros */}
                    <div className="col-lg-2 col-md-3 p-4" style={{ backgroundColor: "#7da5a3" }}>
                        <h5 className="text-white fw-bold mb-4">Filtros</h5>
                        
                        {/* Filtro Categoría */}
                        <div className="mb-4">
                            <label className="form-label text-white fw-semibold">Categoría</label>
                            <select 
                                className="form-select form-select-sm" 
                                style={{ backgroundColor: "#d4e6e5" }}
                            >
                                <option>Todos</option>
                                <option>Electrónica</option>
                                <option>Ropa</option>
                                <option>Alimentos</option>
                            </select>
                        </div>

                        {/* Filtro Precios */}
                        <div className="mb-4">
                            <label className="form-label text-white fw-semibold">Precios</label>
                            <select 
                                className="form-select form-select-sm" 
                                style={{ backgroundColor: "#d4e6e5" }}
                            >
                                <option>Todos</option>
                                <option>Menos de $50</option>
                                <option>$50 - $100</option>
                                <option>Más de $100</option>
                            </select>
                        </div>

                        {/* Filtro Proveedor */}
                        <div className="mb-4">
                            <label className="form-label text-white fw-semibold">Proveedor</label>
                            <select 
                                className="form-select form-select-sm" 
                                style={{ backgroundColor: "#d4e6e5" }}
                            >
                                <option>Seleccionar</option>
                                <option>Proveedor A</option>
                                <option>Proveedor B</option>
                                <option>Proveedor C</option>
                            </select>
                        </div>

                        {/* Filtro Marcas */}
                        <div className="mb-4">
                            <label className="form-label text-white fw-semibold">Marcas</label>
                            <select 
                                className="form-select form-select-sm" 
                                style={{ backgroundColor: "#d4e6e5" }}
                            >
                                <option>Seleccionar</option>
                                <option>Marca X</option>
                                <option>Marca Y</option>
                                <option>Marca Z</option>
                            </select>
                        </div>

                        {/* Botones */}
                        <button 
                            className="btn btn-sm w-100 text-white fw-semibold mb-3"
                            style={{ backgroundColor: "#104A4D" }}
                        >
                            Aplicar filtros
                        </button>
                        <button 
                            className="btn btn-sm btn-light w-100 fw-semibold"
                        >
                            Limpiar
                        </button>
                    </div>

                    {/* Área Principal - Catálogo */}
                    <div className="col-lg-10 col-md-9 p-4">
                        {/* Card con la tabla */}
                        <div className="card shadow-sm border-0">
                            <div className="card-body p-0">
                                <h5 className="fw-bold p-3 mb-0 border-bottom">Lista de productos</h5>
                                
                                <div className="table-responsive">
                                    <table className="table table-bordered mb-0">
                                        <thead style={{ backgroundColor: "#f8f9fa" }}>
                                            <tr>
                                                <th scope="col" className="text-center" style={{ width: "60px" }}>#</th>
                                                <th scope="col" className="text-center" style={{ width: "120px" }}>Imagen</th>
                                                <th scope="col">Nombre</th>
                                                <th scope="col">Categoría</th>
                                                <th scope="col" className="text-center">Stock</th>
                                                <th scope="col" className="text-center">Precio</th>
                                                <th scope="col" className="text-center" style={{ width: "220px" }}>Acciones</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr style={{ height: "80px" }}>
                                                <th scope="row" className="text-center align-middle">1</th>
                                                <td className="text-center align-middle">
                                                    <div className="bg-light rounded d-inline-flex align-items-center justify-content-center" 
                                                         style={{ width: "60px", height: "60px" }}>
                                                        <i className="bi bi-image text-muted fs-5"></i>
                                                    </div>
                                                </td>
                                                <td className="align-middle"></td>
                                                <td className="align-middle"></td>
                                                <td className="align-middle text-center"></td>
                                                <td className="align-middle text-center"></td>
                                                <td className="text-center align-middle">
                                                    <button className="btn btn-sm me-2" style={{ backgroundColor: "#104A4D", color: "white", minWidth: "70px" }}>
                                                        Editar
                                                    </button>
                                                    <button className="btn btn-sm btn-danger" style={{ minWidth: "70px" }}>
                                                        Eliminar
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr style={{ height: "80px" }}>
                                                <th scope="row" className="text-center align-middle">2</th>
                                                <td className="text-center align-middle">
                                                    <div className="bg-light rounded d-inline-flex align-items-center justify-content-center" 
                                                         style={{ width: "60px", height: "60px" }}>
                                                        <i className="bi bi-image text-muted fs-5"></i>
                                                    </div>
                                                </td>
                                                <td className="align-middle"></td>
                                                <td className="align-middle"></td>
                                                <td className="align-middle text-center"></td>
                                                <td className="align-middle text-center"></td>
                                                <td className="text-center align-middle">
                                                    <button className="btn btn-sm me-2" style={{ backgroundColor: "#104A4D", color: "white", minWidth: "70px" }}>
                                                        Editar
                                                    </button>
                                                    <button className="btn btn-sm btn-danger" style={{ minWidth: "70px" }}>
                                                        Eliminar
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr style={{ height: "80px" }}>
                                                <th scope="row" className="text-center align-middle">3</th>
                                                <td className="text-center align-middle">
                                                    <div className="bg-light rounded d-inline-flex align-items-center justify-content-center" 
                                                         style={{ width: "60px", height: "60px" }}>
                                                        <i className="bi bi-image text-muted fs-5"></i>
                                                    </div>
                                                </td>
                                                <td className="align-middle"></td>
                                                <td className="align-middle"></td>
                                                <td className="align-middle text-center"></td>
                                                <td className="align-middle text-center"></td>
                                                <td className="text-center align-middle">
                                                    <button className="btn btn-sm me-2" style={{ backgroundColor: "#104A4D", color: "white", minWidth: "70px" }}>
                                                        Editar
                                                    </button>
                                                    <button className="btn btn-sm btn-danger" style={{ minWidth: "70px" }}>
                                                        Eliminar
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* Paginación */}
                                <div className="d-flex justify-content-center align-items-center p-3 border-top">
                                    <nav aria-label="Navegación de página">
                                        <ul className="pagination mb-0">
                                            <li className="page-item">
                                                <a className="page-link" href="#" aria-label="Anterior">
                                                    <span aria-hidden="true">&laquo;</span>
                                                </a>
                                            </li>
                                            <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item"><a className="page-link" href="#">4</a></li>
                                            <li className="page-item"><a className="page-link" href="#">...</a></li>
                                            <li className="page-item">
                                                <a className="page-link" href="#" aria-label="Siguiente">
                                                    <span aria-hidden="true">&raquo;</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}