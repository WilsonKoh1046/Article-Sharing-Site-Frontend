import React from 'react'
import { Link } from 'react-router-dom'

export function NavBar() {
    return (
        <nav class="navbar navbar-expand navbar-light bg-light">
            <ul class="nav navbar-nav">
                <li class="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li class="nav-item">
                    <Link to="/editor" className="nav-link">Editor</Link>
                </li>
                <li class="nav-item">
                    <Link to="/contact-us" className="nav-link">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}