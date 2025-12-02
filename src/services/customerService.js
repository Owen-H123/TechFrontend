const API_URL= "http://localhost:8080/customers";

const getClientes = async () => {
    const response = await fetch(API_URL);
    if (!response.ok) {throw new Error("Error al obtener clientes")};
    return await response.json();
};

export default {
    getClientes,
};

