import React, { useState } from "react";
import IconNotDone from "../../assets/icon/IconNotDone";
import { Button } from "antd";
import axios from "axios";
import { useDispatch } from "react-redux";
import { todoChangeCompletedREDUX, todoChangeCompletedsREDUX } from "../../redux/slices/todoSlice";

function TaskNotDone({ task }) {
  const [loadingMark, setLoadingMark] = useState(false);
  const dispatch = useDispatch();

  const handleChangeCompleted = (task) => {
    //https://jsonplaceholder.typicode.com/todos/${task.id}
    setLoadingMark(true);
    axios
      .patch(`https://jsonplaceholder.typicode.com/todos/${task.id}`, { completed: true })
      .then((response) => {
        console.log("🏊🏼‍♀️ 👙 .then 👙 response:", response);
        setLoadingMark(false);
        dispatch(todoChangeCompletedsREDUX(task));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="border border-gray-100 h-10 leading-10 flex items-center justify-between ">
      <div className="pl-5">
        <IconNotDone /> <span className="pl-1 pr-14">{task.title} </span>
      </div>
      <div
        onClick={() => {
          handleChangeCompleted(task);
        }}
      >
        <Button loading={loadingMark}>Mark done</Button>
      </div>
    </div>
  );
}

export default TaskNotDone;
