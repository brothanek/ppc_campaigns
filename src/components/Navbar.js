import React from 'react'
import { Link } from "react-router-dom"
import './Navbar.css'

function Navbar() {
    return (
        <nav className='navbar'>
            <Link to='/'>Home</Link>
            <Link to='/zadani1'>Zadání 1</Link>
            <Link to='/zadani2'>Zadání 2</Link>
            <Link to='/zadani3'>Zadání 3</Link>


        </nav>
    )
}

export default Navbar
