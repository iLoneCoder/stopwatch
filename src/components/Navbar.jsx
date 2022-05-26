import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
function Navbar() {
    return <nav className="navbar">
        <div className="navbar-container">
            <Link to="/" className="navbar-header">Web is usefull</Link>
            <div className="navigation-links">
                <Link to="/" className="navbar-btn">Home</Link>
                <Link to="/about" className="navbar-btn">About</Link>
                <DropdownMenu title="Applications"/>
            </div>
        </div>
    </nav>
}

export default Navbar;