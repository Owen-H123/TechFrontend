import { useEffect, useState } from "react";
import { getProductos, addProducto, deleteProducto, updateProducto } from "../../services/productService";
import ModalEditarProducto from "../components/subcomponents/EditarProductosForm";

export default function Catalogo() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busqueda, setBusqueda] = useState("");
  const [filtros, setFiltros] = useState({
    categoria: "Todos",
    precio: "Todos",
    proveedor: "Seleccionar",
    marca: "Seleccionar",
  });

  const [productoEditar, setProductoEditar] = useState(null);
  const [mostrarModalEditar, setMostrarModalEditar] = useState(false);
  // Cargar productos
  useEffect(() => {
    cargarProductos();
  }, []);

  const cargarProductos = async () => {
    try {
      setLoading(true);
      const data = await getProductos();
      setProductos(data);
    } catch (error) {
      console.error("Error cargando productos", error);
    } finally {
      setLoading(false);
    }
  };

  // Filtrar productos
  const filtrarProductos = () => {
    return productos.filter(p => {
      const cumpleBusqueda = p.producto.toLowerCase().includes(busqueda.toLowerCase());
      const cumpleCategoria = filtros.categoria === "Todos" || p.categoria === filtros.categoria;
      const cumpleProveedor = filtros.proveedor === "Seleccionar" || p.proveedor === filtros.proveedor;
      const cumpleMarca = filtros.marca === "Seleccionar" || p.marca === filtros.marca;

      let cumplePrecio = true;
      if (filtros.precio === "Menos de 100") cumplePrecio = p.precio < 100;
      else if (filtros.precio === "100 - 600") cumplePrecio = p.precio >= 100 && p.precio <= 600;
      else if (filtros.precio === "Más de 700") cumplePrecio = p.precio > 700;

      return cumpleBusqueda && cumpleCategoria && cumpleProveedor && cumpleMarca && cumplePrecio;
    });
  };

  // Eliminar producto
  const handleEliminar = async (id) => {
    if (window.confirm("¿Seguro que quieres eliminar este producto?")) {
      try {
        await deleteProducto(id);
        setProductos(productos.filter(p => p.id !== id));
      } catch (error) {
        console.error("Error eliminando producto", error);
      }
    }
  };

  // Editar producto (nombre, categoría, stock y precio)
  const handleEditar = async (id) => {
    const producto = productos.find(p => p.id === id);
    setProductoEditar(producto);
    setMostrarModalEditar(true);
  };

  const guardarCambios = async (productoActualizado) => { 
    try {
      const actualizado = await updateProducto(productoActualizado.id, {
        producto: productoActualizado.producto,
        categoria: productoActualizado.categoria,
        descripción: productoActualizado.descripción,
        stock: Number(productoActualizado.stock),
        stockMinimo: Number(productoActualizado.stockMinimo),
        precio: Number(productoActualizado.precio),
      });
      if (actualizado && actualizado.id) {
        setProductos(productos.map(p => p.id === actualizado.id ? actualizado : p));
        setMostrarModalEditar(false);
        setProductoEditar(null);
        alert("Producto actualizado correctamente");
      } else {
        throw new Error("Respuesta inválida del servidor");
      }
    } catch (error) {
      console.error("Error actualizando producto", error);
      alert("Error al guardar los cambios: " + error.message);
    }
  };

  // Agregar producto de prueba
  const handleAgregar = async () => {
    const nuevoProducto = {
      producto: "Nuevo Producto",
      categoria: "Electrónica",
      stock: 10,
      precio: 50,
      proveedor: "Proveedor A",
      marca: "Marca X",
    };
    try {
      const agregado = await addProducto(nuevoProducto);
      setProductos([...productos, agregado]);
    } catch (error) {
      console.error("Error agregando producto", error);
    }
  };

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
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              style={{ width: "240px", backgroundColor: "#e5ecec" }}
            />
            <button className="btn btn-success" style={{ backgroundColor: "#104A4D" }} onClick={filtrarProductos}>
              Buscar
            </button>
            <button className="btn btn-primary" onClick={handleAgregar}>Agregar</button>
          </div>
        </div>
      </nav>

      <div className="container-fluid">
        <div className="row">
          {/* SIDEBAR FILTROS */}
          <div className="col-lg-2 col-md-3 p-4" style={{ backgroundColor: "#A6CFD2", minHeight: "100vh" }}>
            <h5 className="fw-bold mb-4 mt-5" style={{ color: "#173E40" }}>Filtros</h5>

            <div className="mb-4">
              <label className="form-label fw-semibold" style={{ color: "#173E40" }}>Categoría</label>
              <select className="form-select form-select-sm" value={filtros.categoria} onChange={e => setFiltros({...filtros, categoria: e.target.value})} style={{ backgroundColor: "#d4e6e5" }}>
                <option>Todos</option>
                <option>Tecnología</option>
                <option>Accesorios</option>
                <option>Oficina</option>
                <option>Muebles</option>
                <option>Almacenamiento</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold" style={{ color: "#173E40" }}>Precios</label>
              <select className="form-select form-select-sm" value={filtros.precio} onChange={e => setFiltros({...filtros, precio: e.target.value})} style={{ backgroundColor: "#d4e6e5" }}>
                <option>Todos</option>
                <option>Menos de 100</option>
                <option>100 - 600</option>
                <option>Más de 700</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold" style={{ color: "#173E40" }}>Proveedor</label>
              <select className="form-select form-select-sm" value={filtros.proveedor} onChange={e => setFiltros({...filtros, proveedor: e.target.value})} style={{ backgroundColor: "#d4e6e5" }}>
                <option>Seleccionar</option>
                <option>Proveedor A</option>
                <option>Proveedor B</option>
                <option>Proveedor C</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold" style={{ color: "#173E40" }}>Marcas</label>
              <select className="form-select form-select-sm" value={filtros.marca} onChange={e => setFiltros({...filtros, marca: e.target.value})} style={{ backgroundColor: "#d4e6e5" }}>
                <option>Seleccionar</option>
                <option>Lenovo</option>
                <option>Samsung</option>
                <option>Kingston</option>
              </select>
            </div>

            <button className="btn btn-sm w-100 text-white fw-semibold mt-4" style={{ backgroundColor: "#104A4D" }} onClick={filtrarProductos}>Aplicar filtros</button>
            <button className="btn btn-sm w-100 text-white fw-semibold mt-3" style={{ backgroundColor: "#104A4D" }} onClick={() => setFiltros({categoria:"Todos", precio:"Todos", proveedor:"Seleccionar", marca:"Seleccionar"})}>Limpiar</button>
          </div>

          {/* AREA PRINCIPAL */}
          <div className="col-lg-10 col-md-9 p-4">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <h5 className="fw-bold mb-3" style={{ color: "#104A4D" }}>Lista de productos</h5>

                <div className="table-responsive">
                  {loading ? <p className="p-3">Cargando productos...</p> : (
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
                        {filtrarProductos().map((producto, index) => (
                          <tr key={producto.id || index}>
                            <td>{index + 1}</td>
                            <td>{producto.imagen ? <img src={producto.imagen} alt={producto.producto} style={{ width: "60px", height: "60px", objectFit: "cover" }} /> : <div className="bg-light rounded d-inline-flex align-items-center justify-content-center" style={{ width: "60px", height: "60px" }}><i className="bi bi-image text-muted fs-5"></i></div>}</td>
                            <td>{producto.producto}</td>
                            <td>{producto.categoria}</td>
                            <td>{producto.stock}</td>
                            <td>{producto.precio}</td>
                            <td className="d-flex justify-content-center gap-2">
                              <button className="btn btn-sm" style={{ backgroundColor: "#104A4D", color: "white" }} onClick={() => handleEditar(producto.id)}>Editar</button>
                              <button className="btn btn-sm btn-danger" onClick={() => handleEliminar(producto.id)}>Eliminar</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {mostrarModalEditar && productoEditar && (
        <ModalEditarProducto
          producto={productoEditar}
          onClose={() => setMostrarModalEditar(false)}
          onSave={guardarCambios}
        />
      )}
    </div>
  );
}
// prueba git