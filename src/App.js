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
          list: [...prevState.list, value = {id:new Date().getTime(), text: value}]
      }));
  }

  deleteItem = (deleteId) => {
    this.setState({
        list: this.state.list.filter((listItem) => {
          return listItem.id !== deleteId;
        })
    });
  }

  render() {
    return (
      <div>
        <h1>To Do List</h1>
        <div className={'toDoList'}>
          <Input inputSubmit={this.inputSubmit} />
          <List deleteItem={this.deleteItem} lists={this.state.list} />
        </div>
      </div>
    );
  }

}

export default App;
