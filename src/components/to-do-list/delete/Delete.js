import React from "react";
import './delete.css'

class Delete extends React.Component {
    constructor(props) {
        super(props)
        this.state = {list: this.props.list}
    }

    deleteItem = () => {
        console.log(this.state);
        this.props.list[this.props.delID] = '';
    }

    render() {
        return (
            <button onClick={this.deleteItem} >Delete</button>
        )
    }
}

export default Delete;