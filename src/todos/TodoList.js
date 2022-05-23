import React from "react";
import TodoListItem from "./TodoListItem";
import NewTodoForm from "./NewTodoForm";
import { connect } from 'react-redux';
import { removeTodo } from "./actions";
import './TodoList.css';

const TodoList = ({todos = [{text: "Hello"}], onRemovePressed}) => {
    return(
    <div className="list-wrapper">
        <NewTodoForm />
        {todos.map((todo, i) =>
             <div key={todo.text.toString() + i}>   
                <TodoListItem todo={todo} onRemovePressed={onRemovePressed}  />
             </div>)}
    </div>
)}

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);