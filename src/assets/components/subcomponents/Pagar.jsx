import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

export default function Pagar() {

  const [monto, setMonto] = useState("");
  const [cliente, setCliente] = useState("");
  const [documento, setDocumento] = useState("");
  const [tipoCliente, setTipoCliente] = useState("");
  const [descuento, setDescuento] = useState("");
  const [metodo, setMetodo] = useState("");

  const navigate = useNavigate();


  const total = monto
    ? (monto - (monto * (descuento || 0) / 100)).toFixed(2)
    : "";

  const handleContinuar = () => {
   
    if (!monto) return alert("Ingresa un monto.");
    if (!cliente) return alert("Selecciona un cliente.");
    if (!documento) return alert("Selecciona tipo de documento.");
    if (!tipoCliente) return alert("Selecciona tipo de cliente.");
    if (!descuento) return alert("Selecciona un descuento.");
    if (!metodo) return alert("Selecciona un método de pago.");
    
    navigate(`/pagar/${metodo}`);
  };

  
  const descuentosDisponibles =
    tipoCliente === "tecnico"
      ? [10, 20, 30]
      : tipoCliente === "empresarial"
      ? [10, 20, 30, 40, 50]
      : [];

  return (
    <div className="min-vh-100" style={{ backgroundColor: "#f0f4f8" }}>
      
      <nav className="navbar shadow-sm p-4" style={{ backgroundColor: "#066368" }}>
        <div className="container-fluid px-4">
          <h2 className="m-0" style={{ color: "#173E40" }}>Procesar Pago</h2>

          <div className="d-flex gap-2">
            <Link to="/" className="btn btn-light">
              <i className="bi bi-house-door-fill me-2"></i>Inicio
            </Link>
            <button className="btn" style={{ backgroundColor: "#104A4D", color: "white" }}>
              Cerrar Sesión
            </button>
          </div>
        </div>
      </nav>

      <div className="container py-4">
        <div className="row g-4">

        
          <div className="col-md-6 p-4">
            <h5>Monto a cobrar:</h5>

            <Form.Control
              type="number"
              placeholder="s/."
              className="mb-4"
              value={monto}
              onChange={(e) => setMonto(e.target.value)}
            />

            <h5>Seleccione el método de pago</h5>

            <div className="d-flex align-items-center gap-2 mb-3">
              <Form.Check type="radio" name="payment" onChange={() => setMetodo("paypal")} />
              <img src="/paypal.png" alt="PayPal" height="30" />
            </div>

            <div className="d-flex align-items-center gap-2 mb-3">
              <Form.Check type="radio" name="payment" onChange={() => setMetodo("yape")} />
              <img src="/yape.png" alt="Yape" height="35" />
            </div>

            <div className="d-flex align-items-center gap-2">
              <Form.Check type="radio" name="payment" onChange={() => setMetodo("plin")} />
              <img src="/plin.png" alt="Plin" height="35" />
            </div>
          </div>

          
          <div
            className="col-md-6 p-4"
            style={{ background: "linear-gradient(180deg, #A3D5D8, #5F7778)" }}
          >
            
            <Form.Group className="mb-3">
              <Form.Label>Cliente:</Form.Label>
              <Form.Select value={cliente} onChange={(e) => setCliente(e.target.value)}>
                <option value="">Seleccionar...</option>
                <option value="cliente1">Cliente 1</option>
                <option value="cliente2">Cliente 2</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Tipo de documento:</Form.Label>
              <Form.Select value={documento} onChange={(e) => setDocumento(e.target.value)}>
                <option value="">Seleccionar...</option>
                <option value="dni">DNI</option>
                <option value="ce">Carnet de extranjería</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Tipo de cliente:</Form.Label>
              <Form.Select value={tipoCliente} onChange={(e) => setTipoCliente(e.target.value)}>
                <option value="">Seleccionar...</option>
                <option value="tecnico">Técnico (máx 30%)</option>
                <option value="empresarial">Empresarial (máx 50%)</option>
              </Form.Select>
            </Form.Group>

            
            <Form.Group className="mb-4">
              <Form.Label>Aplicar descuento:</Form.Label>
              <Form.Select value={descuento} onChange={(e) => setDescuento(e.target.value)}>
                <option value="">Seleccionar...</option>
                {descuentosDisponibles.map((d) => (
                  <option key={d} value={d}>{d}%</option>
                ))}
              </Form.Select>
            </Form.Group>

           
            <Form.Group className="mb-4">
              <Form.Label>Total:</Form.Label>
              <Form.Control type="number" value={total} readOnly />
            </Form.Group>

            <Button
              variant="success"
              className="w-100"
              style={{ backgroundColor: "#075C19" }}
              onClick={handleContinuar}
            >
              Continuar
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
}
