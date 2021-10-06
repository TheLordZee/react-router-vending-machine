import React from "react";
import { Link } from "react-router-dom";
import "./VendingMachine.css"

const VendingMachine = () => {
    return(
        <div className="VendingMachine">
            <h1>Welcome to the Vending Machine</h1>
            <h2>What would you like?</h2>
            <img src="https://m.media-amazon.com/images/I/81tMzQqq05L._AC_SS350_.jpg"/>
            <Link to="/soda">Soda</Link>
            <Link to="/chips">Chips</Link>
            <Link to="/candy">Candy</Link>
        </div>
    )
}

export default VendingMachine;