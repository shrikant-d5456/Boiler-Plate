import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./TaskSlice";
import { addTask,deleteTask } from "./TaskSlice";

export const store = configureStore({
    reducer: {
        tasksSlice: taskSlice
    }
});

console.log(store.dispatch(addTask("task added 1")));
console.log(store.getState());
console.log(store.dispatch(addTask("task added 2")));
console.log(store.dispatch(addTask("task added 3")));
console.log(store.getState());
console.log(store.dispatch(deleteTask(1)));
console.log(store.getState());