import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'var(--tm-text-900)' }}>
            <div className="container">
                <NavLink className="navbar-brand text-white fw-bold" to="/">
                    <span style={{ color: 'var(--tm-secondary-400)' }}>Jairo</span> Portfolio
                </NavLink>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? "nav-link text-white fw-bold" : "nav-link text-secondary"} to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? "nav-link text-white fw-bold" : "nav-link text-secondary"} to="/about">
                                About Me
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;