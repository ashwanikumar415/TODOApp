import React from 'react';
import logo from './../logo.svg';
import './App.css';
import { Header } from '../Components/Header';
import { TaskAdder } from '../Components/TaskAdder';
import { TasksList } from '../Components/TasksList';
import { connect } from 'react-redux';
import * as actionTypes from '../store/action';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.newTaskCallbackHandler = this.newTaskCallbackHandler.bind(this);
    this.updateTaskListHandler = this.updateTaskListHandler.bind(this);
  }
  newTaskCallbackHandler(obj) {
    let newArr = [];
    newArr.push(obj);
    console.log("newArr:",newArr);

    this.props.addTask(obj);
  }
  updateTaskListHandler(clickedId) {
    let newArr = this.props.tsks.filter((elem) => {
         return elem.id !== clickedId
    });

    this.props.removeTask(newArr);
  }


  render() {
    console.log("this.props.tsks:",this.props.tsks);
    return (
      <div className="App">
        <Header title ="TODO APP"> </Header>
        <TaskAdder callbackHandler = {(obj) => {this.newTaskCallbackHandler(obj)}}></TaskAdder>
        <TasksList list = {this.props.tsks}
                  updateTaskList = {(obj) => {this.updateTaskListHandler(obj)}}></TasksList>
      </div>
    )
  }

}
const mapsStateToProps = (state) => {
  return {
    tsks: state.tasks
  }
}
const mapsDispatchToProps = (dispatch) => {
  return {
    addTask: (newArr) => {dispatch({type:actionTypes.ADD_TASK, value : newArr})},
    removeTask: (newArr) => {dispatch({type:actionTypes.REMOVE_TASK, value: newArr})}
  }
}
export default connect(mapsStateToProps, mapsDispatchToProps)(App);
