import React, {Component} from 'react'
import InlineEdit from './component/inline';
import AddToDo from './component/addtodo';
import Col from 'react-bootstrap/Col';
import Input from './user/input';
import axios from 'axios';

import './user.css';

//const API_URL = 'https://dominiclai1983-node-todo.herokuapp.com/api';

const API_URL = process.env.REACT_APP_API_URL;

const token = localStorage.getItem('Token'); 

class User extends Component{

  constructor(props){
    super(props);
    this.state ={
      todos: [],
      authenticated: false,
      mode: "",
      loading: true
    }

    this.callAllTodo = this.callAllTodo.bind(this);
    this.callActiveTodo = this.callActiveTodo.bind(this);
    this.handleTodoStatus = this.handleTodoStatus.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
        /*
    this.callCompletedTodo = this.callCompletedTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);


    */
  }

  componentDidMount(){
    this.callAllTodo();
  }

  //supporting method to load all todo
  callAllTodo = () => {

    axios.get(`${API_URL}/api/tasks`, {
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

    axios.get(`${API_URL}/api/tasks/active`, {
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

    axios.get(`${API_URL}/api/tasks/completed`, {
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

  updateTodo = (id, item) => {

    if(!item){
      return;
    }

    axios.put(`${API_URL}/tasks/${id}`,{item: item},
    {
      headers: {
        "x-access-token": token,
      }
    })
      .then(res=>{
        console.log(res);
      })
  }

  deleteTodo = (id) => {

    axios.get(`${API_URL}/api/tasks/${id}/deleted`, {
      headers: {
        "x-access-token": token,
      }
    })
      .then(res => {
        console.log(res);
        this.callAllTodo();
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

    axios.put(`${API_URL}/api/tasks/${id}`, {completed: completed}, 
    {
      headers: {
        "x-access-token": token,
      }
    })
      .then(res => {
        console.log(res);
      })

  }
  

  render(){

    const {todos, mode} = this.state;
   
    return (
      <>
          <Input onGetAllTodo={this.callAllTodo} API_URL={API_URL} token={token} />
          <Col xs={12} className="border-bottom mt-1 mb-1 pb-2 text-secondary">
          
            <span className={`badge badge-pill ${(mode === 'all')? "badge-warning" : "badge-secondary"}`} onClick={() => {this.callAllTodo()}} >All</span>{" "}|{" "}
            <span className={`badge badge-pill ${(mode === 'active')? "badge-warning" : "badge-secondary"}`} onClick={() => {this.callActiveTodo()}} >Active</span>{" "}|{" "}
            <span className={`badge badge-pill ${(mode === 'completed')? "badge-warning" : "badge-secondary"}`} onClick={() => {this.callCompletedTodo()}} >Completed</span> 
          </Col>
          <Col xs={12}>
          {todos.map(todo => {
            return <InlineEdit key={todo._id} todo={todo} mode={mode} onUpdate={this.updateTodo} onDelete={this.deleteTodo} onMarkCompleted={this.handleTodoStatus} onSwitchButton={this.handleRenderBySwitchButton} />
          })}
          {(todos.length === 0 )? <AddToDo /> : null}
          </Col>
 
      </>
    )
  }
}

export default User;

