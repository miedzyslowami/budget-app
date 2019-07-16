import React, { Component } from 'react';

class Spendings extends Component {
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
            <div>Spendings</div>
        );
    }
};

export default Spendings;
