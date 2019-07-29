// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../../react-auth0-wrapper";
import { Link } from "react-router-dom";

const NavBar = (props) => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    let location = props.location;
    return (
        <div>
            {!isAuthenticated && <button onClick={() => loginWithRedirect({})}>Log in</button>}

            {isAuthenticated && <button onClick={() => logout()}>Log out</button>}

            {isAuthenticated && (
                <span>
                    <Link to={`${location}`}>Home</Link>&nbsp;
                    <Link to={`${location}profile`}>Profile</Link>
                </span>
            )}
        </div>
    );
};

export default NavBar;
