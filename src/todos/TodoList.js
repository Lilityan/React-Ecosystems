import React from "react";
import TodoListItem from "./TodoListItem";
import NewTodoForm from "./NewTodoForm";
import { useSelector } from "react-redux";
import './TodoList.css';


const TodoList = () => {
    const todos = useSelector(state => state.todos.todos);

    return(
    <div className="list-wrapper">
        <NewTodoForm />
        {todos.map((todo, i) =>
             <div key={todo.text.toString() + i}>   
                <TodoListItem todo={todo} />
             </div>)}
    </div>
)}

export default TodoList;