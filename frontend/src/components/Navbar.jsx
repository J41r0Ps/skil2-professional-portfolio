import { NavLink } from 'react-router-dom';
import logo from '@/assets/logo.svg';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark shadow-sm" style={{ backgroundColor: 'var(--tm-text-900)' }}>
            <div className="container">
                <NavLink className="navbar-brand d-flex align-items-center" to="/">
                    <img src={logo} alt="JN Portfolio Logo" height="40" className="me-2" />
                    <span className="fw-bold text-white">Jairo Nacurena</span>
                </NavLink>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) => isActive ? "nav-link active fw-bold text-white" : "nav-link text-white-50"}
                                to="/"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) => isActive ? "nav-link active fw-bold text-white" : "nav-link text-white-50"}
                                to="/about"
                            >
                                About
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;