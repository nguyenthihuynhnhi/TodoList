import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  taskList: [],
};

const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    todoREDUX: (state, { payload }) => {
      state.taskList = payload;
    },
    todoChangeCompletedREDUX: (state, { payload }) => {
      // So sánh index của state.taskList  và index của payload để tìm ra task đang được gửi lên
      const index = state.taskList.findIndex((item) => {
        if (payload.id === item.id) {
          return true;
        }
        return false;
      });
      // dùng index đó để chọt vào mảng và update trạng thái của stask
      state.taskList[index].completed = true;
    },
  },
});

export const { todoREDUX, todoChangeCompletedREDUX } = todoSlice.actions;

export default todoSlice.reducer;
