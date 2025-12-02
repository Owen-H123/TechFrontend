import { Link } from "react-router-dom";
import logo from "../../img/logo.png";

export default function Catalogo() {
    return (
        <div className="min-vh-100" style={{ backgroundColor: "#f0f4f8" }}>

            {/* NAV SUPERIOR */}
            <nav className="navbar shadow-sm pt-4 pb-4" style={{ backgroundColor: "#72BEC2" }}>
                <div className="container-fluid px-4 d-flex justify-content-between align-items-center">

                    <h2 className="fw-bold m-0" style={{ color: "#173E40" }}>CATÁLOGO</h2>

                    <div className="d-flex gap-2">
                        <input
                            type="search"
                            className="form-control"
                            placeholder="Buscar"
                            style={{ width: "240px", backgroundColor: "#e5ecec" }}
                        />

                        <button className="btn btn-success" style={{ backgroundColor: "#104A4D" }}>
                            Buscar
                        </button>
                    </div>
                </div>
            </nav>

            <div className="container-fluid">
                <div className="row">

                    {/* SIDEBAR FILTROS */}
                    <div className="col-lg-2 col-md-3 p-4" style={{ backgroundColor: "#A6CFD2", minHeight: "100vh" }}>
                        <h5 className="fw-bold mb-4 mt-5" style={{ color: "#173E40" }}>Filtros</h5>

                        {/* Categoría */}
                        <div className="mb-4">
                            <label className="form-label fw-semibold" style={{ color: "#173E40" }}>Categoría</label>
                            <select className="form-select form-select-sm" style={{ backgroundColor: "#d4e6e5" }}>
                                <option>Todos</option>
                                <option>Electrónica</option>
                                <option>Ropa</option>
                                <option>Alimentos</option>
                            </select>
                        </div>

                        {/* Precios */}
                        <div className="mb-4">
                            <label className="form-label fw-semibold" style={{ color: "#173E40" }}>Precios</label>
                            <select className="form-select form-select-sm" style={{ backgroundColor: "#d4e6e5" }}>
                                <option>Todos</option>
                                <option>Menos de $50</option>
                                <option>$50 - $100</option>
                                <option>Más de $100</option>
                            </select>
                        </div>

                        {/* Proveedor */}
                        <div className="mb-4">
                            <label className="form-label fw-semibold" style={{ color: "#173E40" }}>Proveedor</label>
                            <select className="form-select form-select-sm" style={{ backgroundColor: "#d4e6e5" }}>
                                <option>Seleccionar</option>
                                <option>Proveedor A</option>
                                <option>Proveedor B</option>
                                <option>Proveedor C</option>
                            </select>
                        </div>

                        {/* Marcas */}
                        <div className="mb-4">
                            <label className="form-label fw-semibold" style={{ color: "#173E40" }}>Marcas</label>
                            <select className="form-select form-select-sm" style={{ backgroundColor: "#d4e6e5" }}>
                                <option>Seleccionar</option>
                                <option>Marca X</option>
                                <option>Marca Y</option>
                                <option>Marca Z</option>
                            </select>
                        </div>

                        {/* Botones */}
                        <button
                            className="btn btn-sm w-100 text-white fw-semibold mt-4"
                            style={{ backgroundColor: "#104A4D" }}
                        >
                            Aplicar filtros
                        </button>

                        <button
                            className="btn btn-sm w-100 text-white fw-semibold mt-3"
                            style={{ backgroundColor: "#104A4D" }}
                        >
                            Limpiar
                        </button>
                    </div>

                    {/* AREA PRINCIPAL */}
                    <div className="col-lg-10 col-md-9 p-4">

                        <div className="card shadow-sm border-0">
                            <div className="card-body">

                                <h5 className="fw-bold mb-3" style={{ color: "#104A4D" }}>
                                    Lista de productos
                                </h5>

                                <table className="table table-bordered text-center align-middle">
                                    <thead style={{ backgroundColor: "#d7eaea" }}>
                                        <tr>
                                            <th>#</th>
                                            <th>Imagen</th>
                                            <th>Nombre</th>
                                            <th>Categoría</th>
                                            <th>Stock</th>
                                            <th>Precio</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {[1, 2, 3].map((n) => (
                                            <tr key={n}>
                                                <td>{n}</td>

                                                <td>
                                                    <div
                                                        className="bg-light rounded d-inline-flex align-items-center justify-content-center"
                                                        style={{ width: "60px", height: "60px" }}
                                                    >
                                                        <i className="bi bi-image text-muted fs-5"></i>
                                                    </div>
                                                </td>

                                                <td>Producto {n}</td>
                                                <td>Categoría</td>
                                                <td>20</td>
                                                <td>$50.00</td>

                                                <td className="d-flex justify-content-center gap-2">
                                                    <button
                                                        className="btn btn-sm"
                                                        style={{ backgroundColor: "#104A4D", color: "white" }}
                                                    >
                                                        Editar
                                                    </button>

                                                    <button
                                                        className="btn btn-sm btn-danger"
                                                    >
                                                        Eliminar
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                                {/* PAGINACIÓN */}
                                <nav>
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item"><a className="page-link" href="#">«</a></li>
                                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item"><a className="page-link" href="#">»</a></li>
                                    </ul>
                                </nav>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}
