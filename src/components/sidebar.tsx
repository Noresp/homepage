import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
    return <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/tier-lists">Tier lists</Link>
            </li>
        </ul>
    </nav>
}

export default Sidebar;