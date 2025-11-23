import "../css/Register.css";



export default function Registro() {
  return (
    <div 
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", background: "#E8E4E4" }}
    >
      <div
        className="p-5 shadow"
        style={{
          width: "480px",
          borderRadius: "30px",
          background: "linear-gradient(180deg, #17A6A8, #0C595F)",
        }}
      >
        <h3 className="text-center text-white mb-4">CREAR CUENTA</h3>

      
        <label className="form-label text-white">Correo</label>
        <input
          type="email"
          className="form-control mb-3"
          placeholder="Ingrese correo"
          style={{ borderRadius: "30px", padding: "12px 20px" }}
        />

       
          <div className="mb-3 position-relative" style={{ marginTop: "15px" }}>
             <label className="form-label text-white">Contraseña</label>

                <input
                    type="password"
                    className="form-control"
                    placeholder="Ingrese contraseña"
                    style={{
                    borderRadius: "30px",
                    paddingRight: "45px",
                    height: "45px",       // altura constante
                    }}
                />

                <i
                    className="bi bi-eye-fill"
                    style={{
                    position: "absolute",
                    right: "18px",
                    top: "55px",        // posición exacta debajo del label
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    color: "#555"
                    }}
                ></i>
            </div>


      
        <label className="form-label text-white">Rol</label>
        <select
          className="form-select mb-4"
          style={{ borderRadius: "30px", padding: "12px 20px" }}
        >
          <option value="">Seleccione un rol</option>
          <option value="admin">Administrador</option>
          <option value="usuario">Usuario</option>
        </select>

      
        <div className="d-flex justify-content-center">
          <button
            className="btn fw-bold py-2"
            style={{
              width: "60%",
              backgroundColor: "#104A4D",
              color: "white",
              borderRadius: "30px",
            }}
          >
            Crear Cuenta
          </button>
        </div>
      </div>
    </div>
  );
}
