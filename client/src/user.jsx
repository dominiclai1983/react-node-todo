import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import LeftNav from './component/leftbar';
import Input from './user/input';
import NavBar from './component/navbar';
import InlineEdit from './component/inline';
import AddToDo from './component/addtodo';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { safeCredentials, handleErrors, checkStatus, json } from './utils/fetchHelper';
import axios from 'axios';


import './user.css';

const API_URL = 'http://localhost:8000/api';

const token = localStorage.getItem('Token'); 

class User extends Component{

  constructor(props){
    super(props);
    this.state ={
      todos: [],
      authenticated: false,
      mode: ""
    }

    this.callAllTodo = this.callAllTodo.bind(this);
    this.callActiveTodo = this.callActiveTodo.bind(this);
        /*
    this.callCompletedTodo = this.callCompletedTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.handleTodoStatus = this.handleTodoStatus.bind(this);
    */
  }



  componentDidMount(){
    this.callAllTodo();
  }

  //supporting method to load all todo
  callAllTodo = () => {

    axios.get(`${API_URL}/tasks`, {
      headers: {
        "x-access-token": token,
      }
    })
      .then(res => {
        console.log(res.data)
        this.setState({
          todos: res.data,
        })
      })
      .catch(error => console.error(error));
  }


  //supporting method to load active todo
  callActiveTodo = () => {

    axios.get(`${API_URL}/tasks/active`, {
      headers: {
        "x-access-token": token,
      }
    })
      .then(res => {
        console.log(res.data)
        this.setState({
          todos: res.data,
        })
      })
      .catch(error => console.error(error));
  }

  //supporting method to load completed todo
  callCompletedTodo = () => {

    axios.get(`${API_URL}/tasks/completed`, {
      headers: {
        "x-access-token": token,
      }
    })
      .then(res => {
        console.log(res.data)
        this.setState({
          todos: res.data,
        })
      })
      .catch(error => console.error(error));

  }
  /*
  handLogOut = () => {

    fetch('api/sessions', safeCredentials({
      method: 'DELETE'
    }))
    .then(handleErrors)
    .then(data =>{
      if(data.success){
        document.location.href="/";
      }
    })

  }
*/
  updateTodo = (id, msg) => {

    if(!id){
      return;
    }

    fetch(`api/tasks/${id}/update`, safeCredentials({
      method: 'PUT',
      body: JSON.stringify({
        item: msg
      })
    }))
    .then(handleErrors)
    .then(res => {
      console.log(res);
    })
  }

  deleteTodo = (id) => {
    if(!id){
      return;
    }

    fetch(`api/tasks/${id}`, safeCredentials({
      method: 'DELETE',
    }))
    .then(handleErrors)
    .then(res => {
      console.log(res);
    })

  }

  handleRenderBySwitchButton = (username, completed, mode) => {

    if(mode === "all"){
      return;
    }

    if(completed && mode === "active"){
      this.callActiveTodo(username);
    }else if(!completed && mode === "completed"){
      this.callCompletedTodo(username);
    }

  }

  handleTodoStatus = (id, completed) => {

    if(completed){
      fetch(`api/tasks/${id}/completed`, safeCredentials({
        method: 'PUT'
      }))
      .then(handleErrors)
      .then(res => {
        console.log(res);
      })
    }else {
      fetch(`api/tasks/${id}/active`, safeCredentials({
        method: 'PUT'
      }))
      .then(handleErrors)
      .then(res => {
        console.log(res);
      })
      }
  }
  

  render(){

    const {todos, mode} = this.state;
   
    return (
      <>
          <Col xs={12} className="border-bottom mt-1 mb-1 pb-2 text-secondary">
          
            <span className={`badge badge-pill ${(mode === 'all')? "badge-warning" : "badge-secondary"}`} onClick={() => {this.callAllTodo()}} >All</span>{" "}|{" "}
            <span className={`badge badge-pill ${(mode === 'active')? "badge-warning" : "badge-secondary"}`} onClick={() => {this.callActiveTodo()}} >Active</span>{" "}|{" "}
            <span className={`badge badge-pill ${(mode === 'completed')? "badge-warning" : "badge-secondary"}`} onClick={() => {this.callCompletedTodo()}} >Completed</span> 
          </Col>
          <Col xs={12}>
          {todos.map(todo => {
            return <InlineEdit key={todo._id} todo={todo} mode={mode} onDelete={this.deleteTodo} onUpdate={this.updateTodo} onGetAllTodo={this.callAllTodo} onMarkCompleted={this.handleTodoStatus} onSwitchButton={this.handleRenderBySwitchButton} />
          })}
          {(todos.length === 0 )? <AddToDo /> : null}
          </Col>
 
      </>
    )
  }
}

export default User;

