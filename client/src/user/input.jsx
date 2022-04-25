import React, {useState} from 'react'
import { InputGroup, Button, FormControl } from 'react-bootstrap';
import axios from 'axios';

const Input = (props) =>{

  const {onGetAllTodo, API_URL, token} = props;

  const [item, setItem] = useState('');
  
  const handleSubmit = () => {

    axios.post(`${API_URL}/api/tasks`, {item: item}, {
      headers: {
        "x-access-token": token,
      }
    })
    .then(res => {
      console.log(res);
      console.log(res.data);
      setItem('');
      onGetAllTodo();
    })

  }

  const handleSubmitByEnter = (event) => {
    if(event.key === "Enter"){
      handleSubmit();
      onGetAllTodo();
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
            console.log(event.target.value);
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
            console.log(item);
            onGetAllTodo()}
          }>
          Add Task
        </Button>
      </InputGroup>
    </>
  )
}

export default Input;