import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import { getOrders } from "../../services/orderService";
import customerService from "../../services/customerService";

export default function Pedidos() {
    const [orders, setOrders] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Cargar órdenes y clientes al mismo tiempo
                const [customersData, ordersData] = await Promise.all([
                    customerService.getClientes(),
                    getOrders(),
                ]);
                setCustomers(customersData);
                setOrders(ordersData);
            } catch (error) {
                console.error("Error cargando datos:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const ordersWithCustomer = orders.map((order) => {
        const customer = customers.find((c) => c.id === order.customerId);
        return { ...order, customer: customer || order.customer };
    });

    return (
        <div className="min-vh-100" style={{ backgroundColor: "#f0f4f8" }}>





            <nav className="navbar shadow-sm pt-4 pb-4" style={{ backgroundColor: "#72BEC2" }}>
                <div className="container-fluid px-4 d-flex justify-content-between align-items-center">

                    <h2 className="fw-bold m-0" style={{ color: "#173E40" }}>Pedidos</h2>

                    <div className="d-flex gap-2">
                        <input
                            type="search"
                            className="form-control"
                            placeholder="Buscar"
                            style={{ width: "240px", backgroundColor: "#e5ecec" }}
                        />


                        <Link to="/crear-pedido" className="btn btn-success" style={{ backgroundColor: "#104A4D" }}>
                            Crear Pedido
                        </Link>
                    </div>
                </div>
            </nav>


            <div className="container-fluid">
                <div className="row">


                    <div className="col-lg-2 col-md-3 p-4" style={{ backgroundColor: "#A6CFD2", minHeight: "100vh" }}>
                        <h5 className="fw-bold mb-4 mt-5" style={{ color: "#173E40" }}>Filtros</h5>


                        <div className="mb-4 mt-5">
                            <label className="form-label  fw-semibold" style={{ color: "#173E40" }}>Estado</label>
                            <select
                                className="form-select form-select-sm"
                                style={{ backgroundColor: "#d4e6e5" }}
                            >
                                <option>Todos</option>
                                <option>Pendiente</option>
                                <option>Pagado</option>
                                <option>Cancelado</option>
                            </select>
                        </div>


                        <div className="mb-4">
                            <label className="form-label fw-semibold" style={{ color: "#173E40" }}>Fecha</label>
                            <input
                                type="date"
                                className="form-control form-control-sm"
                                style={{ backgroundColor: "#d4e6e5" }}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="form-label fw-semibold" style={{ color: "#173E40" }}>Método de pago</label>
                            <select
                                className="form-select form-select-sm"
                                style={{ backgroundColor: "#d4e6e5" }}
                            >
                                <option>Seleccionar</option>
                                <option>Tarjeta</option>
                                <option>Efectivo</option>
                                <option>Yape</option>
                            </select>
                        </div>

                        <button
                            className="btn btn-sm w-100 text-white fw-semibold mt-5"
                            style={{ backgroundColor: "#104A4D" }}
                        >
                            Aplicar filtros
                        </button>
                        <button
                            className="btn btn-sm w-100 text-white fw-semibold mt-5"
                            style={{ backgroundColor: "#104A4D" }}
                        >
                            limpiar
                        </button>
                    </div>


                    <div className="col-lg-10 col-md-9 p-4">

                        <div className="card shadow-sm border-0">
                            <div className="card-body">

                                <h5 className="fw-bold mb-3" style={{ color: "#104A4D" }}>
                                    Lista de pedidos
                                </h5>


                                <table className="table table-bordered text-center align-middle">
                                    <thead style={{ backgroundColor: "#d7eaea" }}>
                                        <tr>
                                            <th>#</th>
                                            <th>Código</th>
                                            <th>Cliente</th>
                                            <th>Fecha</th>
                                            <th>Total</th>
                                            <th>Estado</th>
                                            <th>Opciones</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {loading ? (
                                            <tr>
                                                <td colSpan={7}>Cargando pedidos...</td>
                                            </tr>
                                        ) : (
                                            ordersWithCustomer.map((order, index) => (
                                                <tr key={order.id}>
                                                    <td>{index + 1}</td>
                                                    <td>00{order.id}</td>
                                                    <td>{order.customer?.nombre || "Sin cliente"}</td>
                                                    <td>{new Date(order.orderDate).toLocaleDateString()}</td>
                                                    <td>S/ {order.totalAmount?.toFixed(2) || "0.00"}</td>
                                                    <td>{order.status}</td>
                                                    <td className="d-flex justify-content-center gap-2">
                                                        <button className="btn btn-outline-primary btn-sm">Ver</button>
                                                        <button className="btn btn-success btn-sm">Pagar</button>
                                                    </td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>


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
