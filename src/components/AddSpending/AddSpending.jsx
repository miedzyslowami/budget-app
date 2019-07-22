import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '../../react-auth0-wrapper';

class AddSpending extends Component {
    state = {
        data: [],
        user: ''
    };


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
        const { user } = useAuth0();
        this.setState({ user: user.sub });
    }

    render() {
        return (
            <form method="POST" action="https://warm-bayou-54949.herokuapp.com/add_transaction">
                <input type="text" placeholder="income or outcome" name="create_type" />
                <input type="number" placeholder="value" name="create_value" />
                <input type="submit" />
                <input type="hidden" value={this.state.user} name="user_id" />
            </form>
        );
    }
};

export default AddSpending;
