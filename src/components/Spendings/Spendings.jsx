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
        let data = this.state.data.map((element, i) => {
            return <li key={i}>{element.type}: {element.value}</li>
        })
        return (
            <ol>{data}</ol>
        );
    }
};

export default Spendings;
