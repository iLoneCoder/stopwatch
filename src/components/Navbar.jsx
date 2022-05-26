import { Link } from "react-router-dom";

function Navbar() {
    return <nav className="navbar">
        <div className="navbar-container">
            <Link to="/" className="navbar-header">Web is usefull</Link>
            <div className="navigation-links">
                <Link to="/" className="navbar-btn">Home</Link>
                <Link to="/about" className="navbar-btn">About</Link>
                <Link to="/application" className="navbar-btn">Application</Link>
            </div>
        </div>
    </nav>
}

export default Navbar;