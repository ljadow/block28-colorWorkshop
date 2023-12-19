import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <div id="navbar">
            <Link to='/' className="nav-item">Home</Link>
            <Link to='/blue' className="nav-item">Blue</Link>
            <Link to='/red' className="nav-item">Red</Link>
            <Link to='/puppy' className="nav-item">Puppy</Link>
        </div>
    )
}