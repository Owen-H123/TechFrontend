import React, { useState, useEffect } from "react";

export default function ModalEditarProducto({ producto, onClose, onSave }) {
    const [formData, setFormData] = useState({
        id: "",
        producto: "",
        categoria: "",
        stock: "",
        precio: "",
        descripcion: "",
        stockMinimo: "",
    });

    useEffect(() => {
        if (producto) {
            setFormData({
                id: producto.id,
                producto: producto.producto,
                categoria: producto.categoria,
                stock: producto.stock,
                precio: producto.precio,
                descripcion: producto.descripcion || "",
                stockMinimo: producto.stockMinimo || "",
            });
        }
    }, [producto]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async () => {
        if (!formData.producto.trim() || !formData.categoria.trim() || !formData.stock || !formData.precio) {
            alert("Por favor completa todos los campos");
            return;
        }
        try {
            await onSave(formData);
        } catch (error) {
            console.error("Error al guardar:", error);
            alert("Error al guardar los cambios");
        }
    };

    return (
        <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
            <div className="modal-dialog">
                <div className="modal-content">

                    <div className="modal-header">
                        <h5 className="modal-title">Editar producto</h5>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={onClose}
                        ></button>
                    </div>

                    <div className="modal-body">

                        {/* FORMULARIO */}
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input
                                type="text"
                                name="producto"
                                className="form-control"
                                value={formData.producto}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Categoría</label>
                            <input
                                type="text"
                                name="categoria"
                                className="form-control"
                                value={formData.categoria}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Stock</label>
                            <input
                                type="number"
                                name="stock"
                                className="form-control"
                                value={formData.stock}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Precio</label>
                            <input
                                type="number"
                                name="precio"
                                className="form-control"
                                value={formData.precio}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Descripción</label>
                            <input
                                type="text"
                                name="descripcion"
                                className="form-control"
                                value={formData.descripcion}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Stock Mínimo</label>
                            <input
                                type="number"
                                name="stockMinimo"
                                className="form-control"
                                value={formData.stockMinimo}
                                onChange={handleChange}
                            />
                        </div>

                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>
                            Cancelar
                        </button>
                        <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                            Guardar cambios
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}
