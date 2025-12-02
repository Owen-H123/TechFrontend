import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../img/logo.png";

export default function Login() {

  const navigate = useNavigate();

  // ESTADOS
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  // USUARIO ADMIN LOCAL (para pruebas)
  const adminUser = {
    email: "admin@admin.com",
    password: "123456",
    role: "Administrador",
    name: "Admin"
  };

  const handleLogin = () => {
    // VALIDACIÓN BÁSICA
    if (!email || !password || !role) {
      alert("Completa todos los campos");
      return;
    }

    // VALIDACIÓN DEL ADMIN LOCAL
    if (
      email === adminUser.email &&
      password === adminUser.password &&
      role === adminUser.role
    ) {
      // GUARDAR EN LOCAL 
      localStorage.setItem(
        "user",
        JSON.stringify({
          email: adminUser.email,
          role: adminUser.role,
          name: adminUser.name
        })
      );

      navigate("/panel");
      return;
    }

    alert("Credenciales incorrectas");
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="row shadow-lg rounded overflow-hidden" style={{ maxWidth: "950px", width: "100%" }}>

        
        <div className="col-md-6 d-flex align-items-center justify-content-center bg-white p-4">
          <img
            src={logo}
            alt="Tech Solutions"
            className="img-fluid"
            style={{ maxWidth: "300px" }}
          />
        </div>

        <div
          className="col-md-6 p-5 text-white"
          style={{ background: "linear-gradient(135deg, #16a085, #0e6b8f)" }}
        >
          <h3 className="text-center mb-4 fw-bold">INICIO SESIÓN</h3>

          
          <label className="form-label">Correo</label>
          <div className="input-group mb-3">
            <span className="input-group-text">
              <i className="bi bi-person-fill"></i>
            </span>
            <input
              type="email"
              className="form-control"
              placeholder="Ingrese correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          
          <label className="form-label">Contraseña</label>
          <div className="input-group mb-3">
            <span className="input-group-text">
              <i className="bi bi-lock"></i>
            </span>
            <input
              type="password"
              className="form-control"
              placeholder="Ingrese contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="input-group-text">
              <i className="bi bi-eye"></i>
            </span>
          </div>

          
          <label className="form-label">Rol</label>
          <select
            className="form-select mb-4"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Seleccionar rol</option>
            <option value="Administrador">Administrador</option>
            <option value="Usuario">Usuario</option>
          </select>

          
          <div className="d-flex justify-content-center">
            <button
              className="btn fw-bold py-2 w-75"
              style={{ backgroundColor: "#104A4D", color: "white", borderRadius: "30px" }}
              onClick={handleLogin}
            >
              Ingresar
            </button>
          </div>

          
          <p className="text-center mt-3">
            ¿No tienes una cuenta?{" "}
            <Link
              to="/registro"
              className="text-white fw-bold text-decoration-none"
            >
              Crear una cuenta
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}
