import { Link } from 'react-router-dom';
import Header from "../components/Header";
import sublogo from "../../img/sublogo.png";

export default function Home() {
    return (
        <>
            <Header />

            {/* Inicio de pagina */}
            <section id="inicio" className="hero">
                <div className="hero-background"></div>
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <h1 className="display-4 fw-bold mb-4">
                                Gestiona tu negocio <br /> con <span className="highlight">eficiencia</span> y control total
                            </h1>
                            <p className="lead mb-4">
                                Una solución integral para ventas, inventario, pedidos, precios y reportes financieros; 
                                simple, rápido y seguro.
                            </p>
                            <Link 
                                to="/login" 
                                            className="btn btn-primary btn-lg" 
                                            style={{ backgroundColor: "#319EA4" }}>
                                <i className="fa-solid fa-rocket me-2"></i> Iniciar sesión
                            </Link>
                        </div>
                        <div className="col-lg-6 col-md-12 d-flex justify-content-center">
                            <div className="card shadow-lg border-0 p-4 text-center">
                                <img src={sublogo} alt="Logo" style={{width: "200px",}} className="mb-3" />
                                <h5 className="display-5 fw-bold">+50%</h5>
                                <p className="text-muted">Aumento en eficiencia</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* información */}
            <section id="funcionalidades" className="py-5 bg-light">
                <div className="container">
                    <h2 className="text-center fw-bold mb-5">Potencia tu negocio con nuestras herramientas</h2>
                    <div className="row g-4">
                        <div className="col-lg-6 col-md-12">
                            <div className="card h-100 border shadow-sm">
                                <div className="card-body">
                                    <h2 className="card-title h4 fw-bold mb-4">Funcionalidades</h2>
                                    <ul className="list-unstyled">
                                        <li className="mb-3">
                                            <i className="fa-solid fa-check me-2" style={{color: "#319EA4"}}></i> 
                                            Gestión de inventario en tiempo real
                                        </li>
                                        <li className="mb-3">
                                            <i className="fa-solid fa-check me-2" style={{color: "#319EA4"}}></i> 
                                            Procesamiento de pedidos automático
                                        </li>
                                        <li className="mb-3">
                                            <i className="fa-solid fa-check me-2" style={{color: "#319EA4"}}></i> 
                                            Reportes financieros detallados
                                        </li>
                                        <li className="mb-3">
                                            <i className="fa-solid fa-check me-2" style={{color: "#319EA4"}}></i> 
                                            Pasarelas de pago seguras
                                        </li>
                                        <li className="mb-3">
                                            <i className="fa-solid fa-check me-2" style={{color: "#319EA4"}}></i> 
                                            Configuración flexible de precios
                                        </li>
                                        <li className="mb-3">
                                            <i className="fa-solid fa-check me-2" style={{color: "#319EA4"}}></i> 
                                            Dashboard analítico
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="card h-100 border shadow-sm">
                                <div className="card-body">
                                    <h2 className="card-title h4 fw-bold mb-4">Beneficios</h2>
                                    <ul className="list-unstyled">
                                        <li className="mb-3">
                                            <i className="fa-solid fa-check me-2" style={{color: "#319EA4"}}></i> 
                                            Ahorra hasta 70% de tiempo
                                        </li>
                                        <li className="mb-3">
                                            <i className="fa-solid fa-check me-2" style={{color: "#319EA4"}}></i> 
                                            Centraliza toda tu información
                                        </li>
                                        <li className="mb-3">
                                            <i className="fa-solid fa-check me-2" style={{color: "#319EA4"}}></i> 
                                            Reduce errores humanos
                                        </li>
                                        <li className="mb-3">
                                            <i className="fa-solid fa-check me-2" style={{color: "#319EA4"}}></i> 
                                            Máxima seguridad de datos
                                        </li>
                                        <li className="mb-3">
                                            <i className="fa-solid fa-check me-2" style={{color: "#319EA4"}}></i> 
                                            Acceso desde cualquier lugar
                                        </li>
                                        <li className="mb-3">
                                            <i className="fa-solid fa-check me-2" style={{color: "#319EA4"}}></i> 
                                            Soporte técnico 24/7
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Estadísticas */}
            <section className="text-white" style={{backgroundColor:"#1B5A5E", padding:"40px 0"}}>
                <div className="container">
                    <div className="row text-center g-4">
                        <div className="col-lg-3 col-md-6">
                            <div className="p-4">
                                <h3 className="display-4 fw-bold">1000+</h3>
                                <p className="mb-0">Clientes satisfechos</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="p-4">
                                <h3 className="display-4 fw-bold">15+</h3>
                                <p className="mb-0">Países</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="p-4">
                                <h3 className="display-4 fw-bold">99.9%</h3>
                                <p className="mb-0">Uptime garantizado</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="p-4">
                                <h3 className="display-4 fw-bold">4.9/5</h3>
                                <p className="mb-0">Calificación promedio</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer id="contacto" className=" text-white py-5" style={{backgroundColor:"#319EA4"}}>
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6">
                            <h3 className="h5 fw-bold mb-3">TechSolutions</h3>
                            <p className="mb-3">
                                Transformando negocios a través de la tecnología. 
                                Soluciones inteligentes para empresas del futuro.
                            </p>
                            <div className="d-flex gap-2">
                                <a href="#" className="btn btn-outline-light btn-sm rounded-circle" aria-label="Facebook">
                                    <i className="fa-brands fa-facebook"></i>
                                </a>
                                <a href="#" className="btn btn-outline-light btn-sm rounded-circle" aria-label="Twitter">
                                    <i className="fa-brands fa-twitter"></i>
                                </a>
                                <a href="#" className="btn btn-outline-light btn-sm rounded-circle" aria-label="LinkedIn">
                                    <i className="fa-brands fa-linkedin"></i>
                                </a>
                                <a href="#" className="btn btn-outline-light btn-sm rounded-circle" aria-label="Instagram">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <h4 className="h6 fw-bold mb-3">Empresa</h4>
                            <ul className="list-unstyled">
                                <li className="mb-2"><a href="#nosotros" className="text-white text-decoration-none">Sobre nosotros</a></li>
                                <li className="mb-2"><a href="#servicios" className="text-white text-decoration-none">Servicios</a></li>
                                <li className="mb-2"><a href="#blog" className="text-white text-decoration-none">Blog</a></li>
                                <li className="mb-2"><a href="#carreras" className="text-white text-decoration-none">Carreras</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <h4 className="h6 fw-bold mb-3">Soporte</h4>
                            <ul className="list-unstyled">
                                <li className="mb-2"><a href="#ayuda" className="text-white text-decoration-none">Centro de ayuda</a></li>
                                <li className="mb-2"><a href="#docs" className="text-white text-decoration-none">Documentación</a></li>
                                <li className="mb-2"><a href="#faq" className="text-white text-decoration-none">Preguntas frecuentes</a></li>
                                <li className="mb-2"><a href="#contacto" className="text-white text-decoration-none">Contactar soporte</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <h4 className="h6 fw-bold mb-3">Contacto</h4>
                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <i className="fa-solid fa-envelope me-2"></i>
                                    <a href="mailto:info@techsolutions.com" className="text-white text-decoration-none">info@techsolutions.com</a>
                                </li>
                                <li className="mb-2">
                                    <i className="fa-solid fa-phone me-2"></i>
                                    <a href="tel:+51987654321" className="text-white text-decoration-none">+51 987 654 321</a>
                                </li>
                                <li className="mb-2">
                                    <i className="fa-solid fa-location-dot me-2"></i>
                                    <span>Lima, Perú</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <hr className="my-4 bg-white opacity-25" />

                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            <p className="mb-0">© 2025 TechSolutions S.A. — Todos los derechos reservados</p>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <a href="#privacidad" className="text-white text-decoration-none me-3">Política de Privacidad</a>
                            <span className="me-3">|</span>
                            <a href="#terminos" className="text-white text-decoration-none me-3">Términos de Servicio</a>
                            <span className="me-3">|</span>
                            <a href="#cookies" className="text-white text-decoration-none">Cookies</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}