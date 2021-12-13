import React from "react";
import './input.css'

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        }
    }

    inputChange = (e) => {
        this.setState({value: e.target.value});
    }

    onSubmitClick = () => {
        this.props.inputSubmit(this.state.value);
        this.setState({value: ''});
    }
    
    render() {
        return (
            <div>
                <input type='text' value={this.state.value} onChange={this.inputChange} />
                <button type="submit" onClick={this.onSubmitClick} className={'btn_add'} disabled={(this.state.value.length === 0) ? true : false} >Add</button>
            </div>
        );
    }
}

export default Input;
