import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
 
    return (
        <nav className="navbar">
            <div className="nav-center">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/create">Create</Link></li>
                </ul>
            </div>
        </nav>
    )
}