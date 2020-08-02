import React from 'react'
import { Link } from 'react-router-dom'

export function Header() {
    return (
        <div class="container">
            <h1><Link to="/">Private Beach</Link></h1>
        </div>
    )
}