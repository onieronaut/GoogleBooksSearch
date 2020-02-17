import React from "react";

const Nav = () => {
    return (
        <div>

            <ul className="nav bg-primary a-white justify-content-center">
                <li className="nav-item">
                    <h1><a className="nav-link text-white" href="/">Google Books Search</a></h1>
                </li>
            </ul>

            <ul className="nav bg-secondary a-white justify-content-center">
                <li className="nav-item">
                    <a className="nav-link text-white" href="/">Search</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="/saved">Saved</a>
                </li>
            </ul>
        </div>
    );
}

export default Nav;