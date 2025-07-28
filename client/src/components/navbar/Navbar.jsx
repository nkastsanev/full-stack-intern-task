import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    return (
        <nav className='navbar'>
            <div>
                <Link to="/">Home</Link>
                <Link to="/create">Create Note</Link>
            </div>
        </nav>
    )
}