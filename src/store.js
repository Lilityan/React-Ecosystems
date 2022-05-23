import { configureStore } from "@reduxjs/toolkit";
import { todos } from "./todos/reducers";

const store = configureStore ({
    reducer: {todos,}
})

export default store;