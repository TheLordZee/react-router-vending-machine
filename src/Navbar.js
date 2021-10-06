import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"

const Navbar = () =>(
    <nav className="Navbar">
        <NavLink className="Navbar-link" to="/soda">Soda</NavLink>
        <NavLink className="Navbar-link" to="/chips">Chips</NavLink>
        <NavLink className="Navbar-link" to="/candy">Candy</NavLink>
    </nav>
)

export default Navbar;