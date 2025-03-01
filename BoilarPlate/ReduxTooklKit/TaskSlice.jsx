import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: []
};

const taskSlice = createSlice({
    name: "tasks",
    initialState: initialState,
    reducers: {
        addTask(state, action) {
            state.tasks.push(action.payload);
        },
        deleteTask(state, action) {
            state.tasks = state.tasks.filter((_, index) => index !== action.payload);
        },
        clearTask(state,action){
            state.tasks =[];
        }
    }
});

export const { addTask, deleteTask,clearTask } = taskSlice.actions;
export default taskSlice.reducer;
