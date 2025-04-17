import { Link } from 'react-router-dom';
import '../../App.css'

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-content">
                <Link to="/" className="navbar-brand">backyard ash</Link>
                <div className="navbar-links">
                    <Link to="/projects" className="nav-link">projects</Link>
                    <Link to="/experience" className="nav-link">cv</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
