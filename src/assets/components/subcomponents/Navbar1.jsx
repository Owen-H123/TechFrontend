import { FaUser } from "react-icons/fa";
import logo from "../../../img/logo.png";

export default function Navbar1() {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <div className="logo"><img src={logo} alt="Logo" style={{height: "150px"}} /></div>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-3">
                                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link" href="#">Funcionalidades</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link" href="#">Beneficios</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link" href="#">Contacto</a>
                            </li>
                        </ul>

                        <button className="btn btn-primary" type="button" style={{backgroundColor:"#319EA4",margin:"20px",paddingRight:"40px",paddingLeft:"40px"}}>
                            <FaUser  style={{marginRight:"10px", marginLeft:"2px"}}/>
                            Ingresar
                        </button>
                    </div>
                </div>
            </nav>
        </div> 
    );
}
