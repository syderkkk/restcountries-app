import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm mb-4">
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-3 text-primary" to="/" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                    Banderas
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => `nav-link fw-bold ${isActive ? 'active text-primary' : 'text-secondary'}`} to="/">Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => `nav-link fw-bold ${isActive ? 'active text-primary' : 'text-secondary'}`} to="/entities">Banderas</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => `nav-link fw-bold ${isActive ? 'active text-primary' : 'text-secondary'}`} to="/contact">Contacto</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;