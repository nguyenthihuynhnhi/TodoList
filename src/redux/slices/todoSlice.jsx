import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loadingData: false,
  taskLists: {},
  userSelect: null,
};

const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    todoChangeCompletedsREDUX: (state, { payload }) => {
      const userId = state.userSelect;
      // So sánh index của state.taskList  và index của payload để tìm ra task đang được gửi lên
      const index = state.taskLists[userId].findIndex((item) => {
        if (payload.id === item.id) {
          return true;
        }
        return false;
      });
      // dùng index đó để chọt vào mảng và update trạng thái của stask
      state.taskLists[userId][index].completed = true;
    },
    setLoadingData: (state, { payload }) => {
      state.loadingData = payload;
    },
    setTaskListsREDUX: (state, { payload }) => {
      
      const userID = state.userSelect;
      
      state.taskLists[userID] = payload;
    },
    setUserSelectREDUX: (state, { payload }) => {
     
      state.userSelect = payload;
    },
  },
});

export const { todoChangeCompletedsREDUX, setUserSelectREDUX, setTaskListsREDUX, setLoadingData, todoREDUX, todoChangeCompletedREDUX } = todoSlice.actions;

export default todoSlice.reducer;
