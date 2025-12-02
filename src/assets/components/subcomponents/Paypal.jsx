import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

export default function Paypal() {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="p-4 rounded shadow" style={{ width: "380px", background: "white" }}>

        <img src="/paypal.png" alt="PayPal" height="40" className="mb-3" />

        <Form.Group className="mb-3">
          <Form.Label>Ingresar correo:</Form.Label>
          <Form.Control type="email" />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Ingresar contraseña:</Form.Label>
          <Form.Control type="password" />
        </Form.Group>

        <Button className="w-100 mb-3" style={{ backgroundColor: "#0070BA" }}>
          Pagar ahora
        </Button>

        <Link to="/procesarpa" className="w-100 btn btn-light text-center text-white"style={{ backgroundColor: "#0070BA" }}>
          Cancelar y volver
        </Link>
      </div>
    </div>
  );
}
