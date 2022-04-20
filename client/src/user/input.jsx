import React, {useState} from 'react'
import { InputGroup, Button, FormControl } from 'react-bootstrap';
import axios from 'axios';

const Input = (props) =>{

  const {onGetAllTodo, username} = props;

  const [item, setItem] = useState('');
  
  const handleSubmit = () => {
    const todo = {item: item};

    axios.post('api/tasks', todo)
    .then(response => {
      console.log(response);
      console.log(response.data);
      setItem('');
    })

  }

  const handleSubmitByEnter = (event) => {
    if(event.key === "Enter"){
      handleSubmit();
      onGetAllTodo(username);
    }
  }

  return (
    <>
      <InputGroup className="my-1">
        <FormControl
          placeholder="What is in your mind?"
          aria-label="todo"
          aria-describedby="basic-addon"
          value={item}
          onChange={event =>{
            event.preventDefault();
            setItem(event.target.value);
          }}
          onBlur={event => {
            setItem("");
            event.target.blur();
          }}
          onKeyDown={handleSubmitByEnter}
        />
        <Button variant="warning" id="button-addon" onClick={() => {
            handleSubmit();
            onGetAllTodo(username)}
          }>
          Add Task
        </Button>
      </InputGroup>
    </>
  )
}

export default Input;