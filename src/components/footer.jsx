import { Link, Routes, Route } from "react-router-dom";
import Home from './home';
import Blue from './blue';
import Red from './red';
import Puppy from './puppy';

export default function Footer() {
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blue' element={<Blue />} />
        <Route path='/red' element={<Red />} />
        <Route path='/puppy' element={<Puppy />} />
    </Routes>
    return (
        <div id="footer">
            <Link to='/' className="nav-item">Home</Link>
            <Link to='/blue'className="nav-item">Blue</Link>
            <Link to='/red'className="nav-item">Red</Link>
            <Link to='/puppy'className="nav-item">Puppy</Link>
        </div>
    )
}