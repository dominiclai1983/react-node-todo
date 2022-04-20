import React, {useState} from 'react'
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

const InlineEdit = (props) => {

  const {todo, onUpdate, onMarkCompleted, onGetAllTodo, onDelete, onSwitchButton, username, mode} = props;

  const [item, setItem] = useState(todo.item);
  const [completed, setCompleted] = useState(todo.completed);

  const handleSubmitByEnter = (event) => {
    if(event.key === "Enter"){
      event.target.blur();
    }
  }

  return (

    <div className="d-flex align-items-center">
    {/* Todo items render in a editable input field*/}
      <InputGroup>
        <FormControl
          aria-label="todo"
          aria-describedby="basic-addon"
          id="render-list"
          value={item}
          onChange={(event) => {
            setItem(event.target.value);
            console.log(event.target.value);
          }}
          onBlur={(event)=> {
              if(event.target.value === ''){
                setItem(todo.item);
              }else{
                onUpdate(todo.id, event.target.value);
              }}
            }//when blur, then it would fire an update 
          onKeyDown={handleSubmitByEnter}
        />
      </InputGroup>
      {/*Switch Button*/}
      <Form>
        <Form.Check 
          type="switch"
          id={`custom-switch-${todo.id}`}
          label=" "
          checked={completed}
          onChange={event => {
            setCompleted(!completed);
            onSwitchButton(username, event.target.checked, mode);
            onMarkCompleted(todo.id, event.target.checked);
          }}
          className="mx-2"
        />
      </Form>
      {/*Trash Button*/}
      <div onClick={() => {
        onDelete(todo.id);
        onGetAllTodo(username);
        }}>
        <span className="trash-can"><i className="fas fa-trash-alt"></i></span>
      </div>

    </div>

  );
        
};

export default InlineEdit;