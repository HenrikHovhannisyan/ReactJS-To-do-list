import React from "react";
import List from "../lists/List";
import './input.css'

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            list: []
        };
    }

    inputChange = (e) => {
        this.setState({value: e.target.value});
    }

    inputSubmit = (e) => {
        e.preventDefault();
        this.setState(prevState => ({
            list: [...prevState.list, this.state.value]
          }));
    }

    render() {
        return (
            <div>
                <form onSubmit={this.inputSubmit}>
                    <input type='text' value={this.state.value} onChange={this.inputChange}></input>
                    <input type="submit" value="Add" />
                </form>
                <List list={this.state.list} />
            </div>
        )
    }
}

export default Input;
