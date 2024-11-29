import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa";

const Nav = () => {
    return (
        <nav className="mainmenu-nav">
            <ul className="mainmenu">
                <li>
                    <NavLink 
                        exact 
                        to={process.env.PUBLIC_URL + "/"} 
                        activeClassName="active"
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to={process.env.PUBLIC_URL + "/about-us"} 
                        activeClassName="active"
                    >
                        About Us
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to={process.env.PUBLIC_URL + "/services"} 
                        activeClassName="active"
                    >
                        Services
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to={process.env.PUBLIC_URL + "/projects"} 
                        activeClassName="active"
                    >
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to={process.env.PUBLIC_URL + "/team"} 
                        activeClassName="active"
                    >
                        Team
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to={process.env.PUBLIC_URL + "/contact"} 
                        activeClassName="active"
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
