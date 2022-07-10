import { configureStore } from "@reduxjs/toolkit";
import todoData from "./slices/todoData";
export const store = configureStore({
    reducer: {
        todo:todoData
    }
});