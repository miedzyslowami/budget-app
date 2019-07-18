import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "../../react-auth0-wrapper";

const NavBar = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <div>
            {!isAuthenticated && (
                <button
                    onClick={() =>
                        loginWithRedirect({})
                    }
                >
                    Log in
        </button>
            )}
            { isAuthenticated && <button onClick={() => logout()}>Log out</button> }
            { isAuthenticated && (
                <span>
                    <Link to="/budget-app/">Home</Link>&nbsp;
                    <Link to="/budget-app/profile">Profile</Link>
                </span>
            )}git 
        </div>
    );
};

export default NavBar;
