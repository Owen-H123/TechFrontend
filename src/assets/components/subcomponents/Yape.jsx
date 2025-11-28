import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

export default function Yape() {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="p-4 rounded shadow" style={{ width: "380px", background: "white" }}>

        
        <img
          src="/yape.png"
          alt="Yape"
          height="40"
          className="mb-3"
        />
        <Form.Group className="mb-3">
          <Form.Label>Ingresar número Yape:</Form.Label>
          <Form.Control type="text" placeholder="Ej: 987654321" />
        </Form.Group>

        
        <Form.Group className="mb-4">
          <Form.Label>DNI del titular:</Form.Label>
          <Form.Control type="text" placeholder="DNI" />
        </Form.Group>
        <Button
          className="w-100 mb-3"
          style={{ backgroundColor: "#7B2CBF", borderColor: "#7B2CBF" }}
        >
          Pagar con Yape
        </Button>

       
        <Link
          to="/procesarpa"
          className="w-100 btn btn-light text-center"
          style={{ backgroundColor: "#9D4EDD", color: "white" }}
        >
          Cancelar y volver
        </Link>
      </div>
    </div>
  );
}
