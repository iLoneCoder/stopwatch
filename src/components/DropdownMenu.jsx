import PropTypes from "prop-types";
import { Link } from "react-router-dom";


function DropdownMenu({ title }) {
    return <Link to="/" className="dropdown">
        <div className="navbar-btn">{title}</div>
        <div className="dropdown-content">
            <Link to="/application/stopwatch" className="dropdown-el">Stopwatch</Link>
        </div>
    </Link>
}

DropdownMenu.propTypes = {
    title: PropTypes.string.isRequired
}

export default DropdownMenu;