import { Link } from "react-router-dom";

export default function Reportes() {
    return (
        <div className="min-vh-100" style={{ backgroundColor: "#f0f4f8" }}>
            
            <div className="container-fluid">
                <div className="row">

                    {/* SIDEBAR */}
                    <div
                        className="col-lg-2 col-md-3 p-4"
                        style={{ backgroundColor: "#A6CFD2", minHeight: "100vh" }}
                    >
                        <h5 className="fw-bold mb-4" style={{ color: "#173E40" }}>
                            Filtros
                        </h5>

                        {/* Porcentaje */}
                        <div className="mb-4">
                            <label className="form-label fw-semibold" style={{ color: "#173E40" }}>
                                Porcentaje
                            </label>
                            <div className="input-group input-group-sm">
                                <input
                                    type="text"
                                    className="form-control"
                                    value="$15.000"
                                    readOnly
                                    style={{ backgroundColor: "#d4e6e5" }}
                                />
                                <button className="btn btn-success" style={{ backgroundColor: "#104A4D" }}>
                                    <i className="bi bi-plus"></i>
                                </button>
                            </div>
                        </div>

                        {/* Fecha fin */}
                        <div className="mb-4">
                            <label className="form-label fw-semibold" style={{ color: "#173E40" }}>
                                Fecha fin
                            </label>
                            <div className="input-group input-group-sm">
                                <input
                                    type="text"
                                    className="form-control"
                                    value="12-10-2022"
                                    readOnly
                                    style={{ backgroundColor: "#d4e6e5" }}
                                />
                                <button className="btn btn-success" style={{ backgroundColor: "#104A4D" }}>
                                    <i className="bi bi-plus"></i>
                                </button>
                            </div>
                        </div>

                        {/* Tipo */}
                        <div className="mb-4">
                            <label className="form-label fw-semibold" style={{ color: "#173E40" }}>
                                Tipo
                            </label>
                            <select
                                className="form-select form-select-sm"
                                style={{ backgroundColor: "#d4e6e5" }}
                            >
                                <option>Ventas</option>
                                <option>Compras</option>
                                <option>Inventario</option>
                            </select>
                        </div>

                        {/* Categoría */}
                        <div className="mb-4">
                            <label className="form-label fw-semibold" style={{ color: "#173E40" }}>
                                Categoría
                            </label>
                            <select
                                className="form-select form-select-sm"
                                style={{ backgroundColor: "#d4e6e5" }}
                            >
                                <option>Producto 1</option>
                                <option>Producto 2</option>
                                <option>Producto 3</option>
                            </select>
                        </div>

                        {/* Productos */}
                        <div className="mb-4">
                            <label className="form-label fw-semibold" style={{ color: "#173E40" }}>
                                Productos
                            </label>
                            <select
                                className="form-select form-select-sm"
                                style={{ backgroundColor: "#d4e6e5" }}
                            >
                                <option>Mensual</option>
                                <option>Trimestral</option>
                                <option>Anual</option>
                            </select>
                        </div>

                        {/* Botón */}
                        <button
                            className="btn btn-sm w-100 text-white fw-semibold"
                            style={{ backgroundColor: "#104A4D" }}
                        >
                            Generar Reporte
                        </button>
                    </div>

                    {/* CONTENIDO PRINCIPAL */}
                    <div className="col-lg-10 col-md-9 p-4">

                        {/* Header interior */}
                        <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
                            <h2 className="fw-bold mb-2 mb-md-0" style={{ color: "#104A4D" }}>
                                Reportes
                            </h2>

                            <div className="btn-group">
                                <button className="btn btn-dark">Exportar a PDF</button>
                                <button className="btn btn-success" style={{ backgroundColor: "#104A4D" }}>
                                    Exportar a Excel
                                </button>
                            </div>
                        </div>

                        {/* CARD DEL GRÁFICO */}
                        <div className="card shadow-sm border-0">
                            <div className="card-body p-4 p-lg-5">

                                <div
                                    className="position-relative d-flex justify-content-center align-items-end"
                                    style={{ height: "400px" }}
                                >
                                    {/* EJE Y */}
                                    <div
                                        className="position-absolute bg-dark"
                                        style={{
                                            left: "80px",
                                            bottom: "60px",
                                            width: "3px",
                                            height: "350px",
                                        }}
                                    ></div>

                                    {/* EJE X */}
                                    <div
                                        className="position-absolute bg-dark"
                                        style={{
                                            left: "80px",
                                            bottom: "60px",
                                            width: "600px",
                                            height: "3px",
                                        }}
                                    ></div>

                                    {/* Flecha eje Y */}
                                    <div
                                        className="position-absolute"
                                        style={{
                                            left: "76px",
                                            top: "40px",
                                            borderLeft: "6px solid transparent",
                                            borderRight: "6px solid transparent",
                                            borderBottom: "12px solid #333",
                                        }}
                                    ></div>

                                    {/* Flecha eje X */}
                                    <div
                                        className="position-absolute"
                                        style={{
                                            right: "220px",
                                            bottom: "54px",
                                            borderTop: "6px solid transparent",
                                            borderBottom: "6px solid transparent",
                                            borderLeft: "12px solid #333",
                                        }}
                                    ></div>

                                    {/* BARRAS */}
                                    <div
                                        className="d-flex align-items-end justify-content-center gap-2 gap-md-3"
                                        style={{ marginLeft: "100px", marginBottom: "60px" }}
                                    >
                                        {[
                                            { h: 200, c: "#ff6b6b" },
                                            { h: 180, c: "#a8e063" },
                                            { h: 240, c: "#7c6bff" },
                                            { h: 160, c: "#dc6bff" },
                                            { h: 170, c: "#6bddff" },
                                            { h: 220, c: "#ffe66b" },
                                        ].map((bar, i) => (
                                            <div
                                                key={i}
                                                className="rounded-top"
                                                style={{
                                                    width: "60px",
                                                    height: bar.h + "px",
                                                    backgroundColor: bar.c,
                                                }}
                                            ></div>
                                        ))}
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
