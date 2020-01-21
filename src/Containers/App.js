import React from 'react';
import logo from './../logo.svg';
import './App.css';
import { Header } from '../Components/Header';
import { TaskAdder } from '../Components/TaskAdder';
import { TasksList } from '../Components/TasksList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
    this.newTaskCallbackHandler = this.newTaskCallbackHandler.bind(this);
    this.updateTaskListHandler = this.updateTaskListHandler.bind(this);
  }
  newTaskCallbackHandler(obj) {
    let newArr = [];
    newArr.push(obj);
    console.log("newArr:",newArr);
    this.setState({
      tasks: this.state.tasks.concat(newArr)
    });
  }
  updateTaskListHandler(clickedId) {
    let newArr = this.state.tasks.filter((elem) => {
         return elem.id !== clickedId
    });
    this.setState({
      tasks: newArr
    })
  }


  render() {
    return (
      <div>
        <Header title ="TODO APP"> </Header>
        <TaskAdder callbackHandler = {this.newTaskCallbackHandler}></TaskAdder>
        <TasksList list = {this.state.tasks}
                  updateTaskList = {this.updateTaskListHandler}></TasksList>
      </div>
    )
  }

}

export default App;
