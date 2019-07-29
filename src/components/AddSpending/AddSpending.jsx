import React, { Component } from 'react';

class AddSpending extends Component {
    
    state = {
        data: [],
        user: this.props.user,
        type: '',
        value: ''
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

    handleTypeChange = (e) =>{
        this.setState({
            type:e.target.value
        })
    };

    handleValueChange = (e) =>{
        this.setState({
            value:e.target.value
        })
    };

    componentDidMount() {
        this.fetchData();
        console.log('test',this.props.user);
    }

    submitForm = (e) => {
        e.preventDefault();
        console.log({user: this.state.user, type: this.state.type, value: this.state.value});
            fetch('https://warm-bayou-54949.herokuapp.com/add_transaction', {
              method: 'post',
              body: JSON.stringify({type: this.state.type, value: this.state.value})
            }).then(function(response) {
              return response.json();
            }).then(function(data) {
                console.log(data)
            });
          }

    render() {
        return (
            <form>
                <input type="text" placeholder="income or outcome" name="create_type" value={this.state.type} onChange={this.handleTypeChange} />
                <input type="number" placeholder="value" name="create_value" value={this.state.value} onChange={this.handleValueChange} />
                <input type="submit" onClick={this.submitForm}/>
                <input type="hidden" value={this.state.user} name="user_id" />
            </form>
        );
    }
};

export default AddSpending;
