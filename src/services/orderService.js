const API_URL = "http://localhost:8080/orders";

export const getOrders = async () => {
    const response = await fetch(API_URL);
    if (!response.ok) {
    throw new Error("Error obteniendo pedidos");
    }
    return await response.json();
};  