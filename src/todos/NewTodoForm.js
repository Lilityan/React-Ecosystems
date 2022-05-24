import React, {useState} from "react";
import "./NewTodoForm.css";
import { createTodo } from "../slices/todoSlice";
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';


const NewTodoForm = ({todos = []}) => {
    const dispatch = useDispatch();
    const oncCreateHandler = (todo) => {
        dispatch(createTodo(todo))
    }

    const [inputValue, SetInputValue] = useState("");
    const oncCreateClick = (id) => {
        const isDuplicateText = todos.some(todo => todo.text === inputValue);
        if(!isDuplicateText){
            oncCreateHandler({text: inputValue, id: uuid()});
            SetInputValue('')
        }
    }

    return(
    <div className="new-todo-form">
        <input 
        className="new-todo-input" 
        type="text"
        placeholder="Type your new todo here"
        value={inputValue}
        onChange={e => SetInputValue(e.target.value)} />
        <button 
        onClick={() => oncCreateClick() }
        className="new-todo-button"> 
        Create button 
        </button>
    </div>
)}

export default NewTodoForm;