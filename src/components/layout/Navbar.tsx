import { Link } from 'react-router-dom';
import '../../App.css'

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-content">
                <Link to="/" className="navbar-brand">Ash</Link>
                <div className="navbar-links">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/projects" className="nav-link">Projects</Link>
                    <Link to="/experience" className="nav-link">Experience</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
