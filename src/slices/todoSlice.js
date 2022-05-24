import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todos: [{text: 'Hello'}],
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        createTodo (state, action) {
            state.todos.push(action.payload);
        },
        removeTodo (state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        }
    }
})

export const { createTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer; 