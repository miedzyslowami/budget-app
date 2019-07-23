import React, { Component } from 'react';


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
    }

    render() {
        return (
            <form method="POST" action="https://warm-bayou-54949.herokuapp.com/add_transaction">
                <input type="text" placeholder="income or outcome" name="create_type" />
                <input type="number" placeholder="value" name="create_value" />
                <input type="submit" />
            </form>
        );
    }
};

export default AddSpending;
