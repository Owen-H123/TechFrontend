import { Link } from "react-router-dom";


export default function Login() {

    return(
        <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="row shadow-lg rounded overflow-hidden" style={{ maxWidth: "950px", width: "100%" }}>

        
        <div className="col-md-6 d-flex align-items-center justify-content-center bg-white p-4">
          <img
            src=""     
            alt="Tech Solutions"
            className="img-fluid"
            style={{ maxWidth: "300px" }}
          />
        </div>

        
        <div className="col-md-6 p-5 text-white"style={{background: "linear-gradient(135deg, #16a085, #0e6b8f)"}}>
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
            />
            <span className="input-group-text">
              <i className="bi bi-eye"></i>
            </span>
          </div>

       
          <label className="form-label">Rol</label>
          <select className="form-select mb-4">
            <option>Seleccionar rol</option>
            <option>Administrador</option>
            <option>Usuario</option>
          </select>

         
          <div className="d-flex justify-content-center">
          <button   className="btn fw-bold py-2 w-75"style={{backgroundColor: "#104A4D",color: "white",borderRadius: "30px"}}>Ingresar</button>
          </div>
         
            <p className="text-center mt-3">
                    ¿No tienes una cuenta?{" "}
                    <Link 
                        to="/registro" 
                        className="text-white fw-bold text-decoration-none">
                        Crear una cuenta
                    </Link>
            </p>

        </div>
      </div>
    </div>
    )
}