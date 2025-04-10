import '../App.css'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top p-3">
            <div className="pb-10">
                <div className="mx-auto">
                    <ul className="navbar-nav flex-row gap-3">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Work Experience</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Socials</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
