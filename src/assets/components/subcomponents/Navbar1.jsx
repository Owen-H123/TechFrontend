import { FaUser } from "react-icons/fa";


export default function Navbar1(){
    return(

    <div className="container">
         <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">logo</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">funcionalidades</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">beneficios</a>
                        </li>
                         <li className="nav-item">
                            <a className="nav-link" href="#">contacto</a>
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
