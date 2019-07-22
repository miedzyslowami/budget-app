import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '../../react-auth0-wrapper';

// const NavBar = () => {
//     const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

//     return (
//         <div>
//             {!isAuthenticated && (
//                 <button
//                     onClick={() =>
//                         loginWithRedirect({})
//                     }
//                 >
//                     Log in
//         </button>
//             )}
//             { isAuthenticated && <button onClick={() => logout()}>Log out</button> }
//             { isAuthenticated && (
//                 <span>
//                     <Link to='/'>Home</Link>&nbsp;
//                     <Link to='/budget-app/profile'>Profile</Link>
//                 </span>
//             )}
//         </div>
//     );
// };



class AddSpending extends Component {
    state = {
        data: []
    }

    fetchData = async () => {
        try {
            const proxyurl = 'https://cors-anywhere.herokuapp.com/';
            const url = 'https://warm-bayou-54949.herokuapp.com/connection';
            const response = await fetch(proxyurl + url);
            const data = await response.json();
            this.setState({ data: data });
        } catch (err) {
            console.log(err)
        }
    }

    componentDidMount() {
        this.fetchData();
    }
    render() {
        return (
            <form method="POST" action="https://warm-bayou-54949.herokuapp.com/add_transaction">
                <input type="text" placeholder="income or outcome"  name="create_type" />
                <input type="number" placeholder="value" name="create_value" />
                <input type="submit" />
            </form>
        );
    }
};

export default AddSpending;