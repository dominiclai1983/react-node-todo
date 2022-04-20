//import React, {Component} from 'react'
import React from 'react'
import ReactDOM from 'react-dom';
/*
import LeftNav from './component/leftbar';
import Input from './user/input';
import NavBar from './component/navbar';
import InlineEdit from './component/inline';
import AddToDo from './component/addtodo';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { safeCredentials, handleErrors, checkStatus, json } from './utils/fetchHelper';

import './user.scss';

/*
class User extends Component{

  constructor(props){
    super(props);
    this.state ={
      todos: [],
      username: "",
      authenticated: false,
      mode: ""
    }

    this.callAllTodo = this.callAllTodo.bind(this);
    this.callActiveTodo = this.callActiveTodo.bind(this);
    this.callCompletedTodo = this.callCompletedTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.handleTodoStatus = this.handleTodoStatus.bind(this);

  }

  componentDidMount(){
    this.checkLogin();
    this.callAllTodo(this.username);
  }

  //supporting method to load all todo
  callAllTodo = (username) => {
    fetch(`api/users/${username}/tasks`)
    .then(checkStatus)
    .then(json)
    .then(data => {
      this.setState({
        todos: data.tasks,
        mode: "all"
      }, () => {
        console.log(this.state.todos);
      })
    })
    .catch(error => {
      console.log(error);
    });
  }

  //supporting method to load active todo
  callActiveTodo = (username) => {

    fetch(`api/users/${username}/active`)
    .then(checkStatus)
    .then(json)
    .then(data => {
      this.setState({
        todos: data.tasks,
        mode: "active"
      }, () => {
        console.log(this.state.todos);
      })
    })
    .catch(error => {
      console.log(error);
    });
  }

  //supporting method to load completed todo
  callCompletedTodo = (username) => {

    fetch(`api/users/${username}/completed`)
    .then(checkStatus)
    .then(json)
    .then(data => {
      this.setState({
        todos: data.tasks,
        mode: "completed"
      }, () => {
        console.log(this.state.todos);
      })
    })
    .catch(error => {
      console.log(error);
    });
  }

  //supporting method to check login status.
  checkLogin = () => {

    fetch('api/authenticated')
    .then(checkStatus)
    .then(json)
    .then(data => {
      if(data.authenticated){
        this.setState({
          username: data.username,
          authenticated: data.authenticated
        }, () => {
          console.log(this.state.username);//ensure the username will be updated, as this states will be used immediately at other place
        })
      }else{
        document.location.href="/";
      }
    })
    .catch(error => {
      console.log(error);
    });

  }

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

    const time = new Date();

    const {authenticated, username, todos, mode} = this.state;
   
    return (
      <>
        <div className={authenticated? null : "d-none"}>
          
          <NavBar />
            <Container>
              <Row>
                <Col xs={2} md={3} className="mt-4 text-right">
                  <LeftNav username={username} onLogOut={this.handLogOut} />
                </Col>
                <Col xs={10} md={9}> 
                  <div className="right-side border">
                    <Container>
                    <div className="d-flex align-items-center">
                      <h3 className="pt-2 trash-can">Today is {time.toLocaleDateString('en-US')}</h3>
                    </div>
                      <Row>
                        <Col xs={12}>
                          <Input username={username} onGetAllTodo={this.callAllTodo} />
                        </Col>
                        <Col xs={12} className="border-bottom mt-1 mb-1 pb-2 text-secondary">
                        
                          <span className={`badge badge-pill ${(mode === 'all')? "badge-warning" : "badge-secondary"}`} onClick={() => {this.callAllTodo(username)}} >All</span>{" "}|{" "}
                          <span className={`badge badge-pill ${(mode === 'active')? "badge-warning" : "badge-secondary"}`} onClick={() => {this.callActiveTodo(username)}} >Active</span>{" "}|{" "}
                          <span className={`badge badge-pill ${(mode === 'completed')? "badge-warning" : "badge-secondary"}`} onClick={() => {this.callCompletedTodo(username)}} >Completed</span> 
                        </Col>
                        <Col xs={12}>
                        {todos.map(todo => {
                          return <InlineEdit key={todo.id} todo={todo} mode={mode} onDelete={this.deleteTodo} onUpdate={this.updateTodo} onGetAllTodo={this.callAllTodo} onMarkCompleted={this.handleTodoStatus} onSwitchButton={this.handleRenderBySwitchButton} />
                        })}
                        {(todos.length === 0 )? <AddToDo /> : null}
                        </Col>
                      </Row>
                    </Container>  
                  </div>
                </Col>
              </Row>
            </Container>
        </div>
      </>
    )
  }
}
*/
const User = () => {
  return (
    <>
      <h2>this is something</h2>
    </>
  )
}

export default User;

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <User />,
    document.body.appendChild(document.createElement('div')),
  )
})
