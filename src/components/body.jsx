import { Routes, Route } from 'react-router-dom';
import Home from './home';
import Blue from './blue';
import Red from './red';
import Puppy from './puppy';

export default function Body() {
    return (
        <div id="main-section">
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/blue' element={<Blue />} />
                <Route path='/red' element={<Red />} />
                <Route path='/puppy' element={<Puppy />} />
            </Routes>
        </div>
    )
}