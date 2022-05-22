import React, {useState} from "react";
import "./NewTodoForm.css"

const NewTodoForm = () => {

    const [inputValue, SetInputValue] = useState("");

    return(
    <div className="new-todo-form">
        <input 
        className="new-todo-input" 
        type="text"
        placeholder="Type your new todo here"
        value={inputValue}
        onChange={e => SetInputValue(e.target.value)} />
        <button className="new-todo-button"> Create button </button>
    </div>
)}

export default NewTodoForm;