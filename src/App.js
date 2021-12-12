import './App.css'
import React from 'react';
import Input from './components/to-do-list/inputs/Input';
import List from './components/to-do-list/lists/List';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        list: []
    };
  }

  inputSubmit = (value) => {
      this.setState(prevState => ({
          list: [...prevState.list, value]
      }));
  }

  render() {
    return (
      <div>
        <h1>To Do List</h1>
        <Input inputSubmit={this.inputSubmit} value={this.state.value} />
        <List list={this.state.list} />
      </div>
    );
  }

}

export default App;
