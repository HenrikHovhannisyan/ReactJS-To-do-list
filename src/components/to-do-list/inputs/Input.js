import React from "react";
import List from "../lists/List";
import './input.css'

const list = []

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    inputChange = (e) => {
        this.setState({value: e.target.value});
    }

    inputSubmit = (e) => {
        e.preventDefault();
        list.push(this.state.value)
        this.setState({value: list})
        this.setState({value: ''})
    }

    render() {
        return (
            <form onSubmit={this.inputSubmit}>
                <input type='text' value={this.state.value} onChange={this.inputChange}></input>
                <input type="submit" value="Add" />
                <List list={list} />
            </form>
        )
    }
}

export default Input;