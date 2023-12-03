import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";


const initialState = {
  tasks: [
    {
      assignet_to: "veli",
      author: "Ahmet",
      end_date: "2023-02-01",
      title: "sideBar ekle",
      id:"asdasdfdsfdsfg"
    },
  ],
};

const CrudReducer = createSlice({
  name: "cruddApp",
  initialState,
  reducers: {
    addTask: (state , {payload}) => {
        payload.id = v4()
        state.tasks.push(payload)
    },

    removeTask: (state , {payload}) => {
      const i = state.tasks.findIndex(i => i.id == payload)
      state.tasks.splice(i,1)
    },
    editTask: (state , {payload}) => {
        const i = state.tasks.findIndex(i => i.id == payload.id)
        state.tasks[i]=payload

    },
  },
});

export const { addTask, removeTask, editTask } = CrudReducer.actions;

export default CrudReducer.reducer;
