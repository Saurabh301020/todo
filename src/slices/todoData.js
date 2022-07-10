import { createSlice } from '@reduxjs/toolkit'

export const todoData = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload)
        },
        deleteTodo: (state, action) => {
            state.splice(action.payload,1);
        }
    }
});
export let { addTodo, deleteTodo } = todoData.actions;
export default todoData.reducer;