const API_URL = "http://localhost:8080/api/products";

// Obtener todos los productos
export const getProductos = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error("Error al obtener productos");
  return await response.json();
};

// Agregar un producto
export const addProducto = async (producto) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(producto),
  });
  if (!response.ok) throw new Error("Error al agregar producto");
  return await response.json(); // devuelve el producto agregado
};

// Eliminar un producto por ID
export const deleteProducto = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Error al eliminar producto");
  return true; // solo confirmación
};

// Editar producto por ID (opcional)
export const updateProducto = async (id, producto) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(producto),
  });
  if (!response.ok) {
    const errorText = await response.text();
    console.error("Error del servidor:", errorText);
    throw new Error(`Error al actualizar producto: ${response.status} ${response.statusText}`);
  }
  return await response.json(); // devuelve producto actualizado
};
// prueba git