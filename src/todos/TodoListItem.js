import React from "react";
import { removeTodo } from "../slices/todoSlice";
import { useDispatch } from 'react-redux';

const TodoListItem = ({ todo }) => {
    const dispatch = useDispatch();
    const removeTodoHandler = (todo) => {
        dispatch(removeTodo(todo));
    }


    return(
    <div className="todo-item-container">
        <h3>{todo.text}</h3>
        <div className="buttons-container">
            <button className="completed-button">Mark As Completed</button>
            <button 
            onClick={() => removeTodoHandler(todo)}
            className="remove-button">
                Remove
            </button>
        </div>
    </div>
)};

export default TodoListItem;