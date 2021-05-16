import React from "react";
import classes from "../Navbar/Navbar.module.css";
import { NavLink } from "react-router-dom";

function Navbar()
{
    return <nav className="navbar navbar-expand-lg navbar-light">
            <NavLink className="navbar-brand" to="/"><img src="img1.png" className={classes.img1} alt="icon"/><img src="img2.png" className={classes.img2} alt="name"/></NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <NavLink className="nav-link" activeClassName={classes.activeNav} to="/Why Vyorius">Why Vyorius?</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName={classes.activeNav} to="/Solutions">Solutions</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName={classes.activeNav} to="/Product">Product</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName={classes.activeNav} to="/Use Cases">Use Cases</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName={classes.activeNav} to="/Team">Team</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName={classes.activeNav} to="/Partners">Partners</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName={classes.activeNav} to="/Contact-us">Contact us</NavLink>
                    </li>
                </ul>
            </div>
            <button type="button" class="btn btn-secondary btn-lg" style={{backgroundColor:"#ff914d",borderColor:"#ff914d"}}>Launch Vyorius</button>
        </nav>
}

export default Navbar;