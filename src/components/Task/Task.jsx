import React, { useState } from "react";
import { useSelector } from "react-redux";
import IconDone from "../../assets/icon/IconDone";

import TaskNotDone from "./TaskNotDone";

function Task() {
  const { taskList } = useSelector((state) => {
    return state.todoSlice;
  });

  const taskNotDone = taskList.filter((task) => {
    return task.completed !== true;
  });

  const taskDone = taskList.filter((task) => {
    return task.completed === true;
  });

  return (
    <div>
      <h2 className="font-semibold text-xl pb-4 ">Task</h2>
      <div className="h-[500px] border border-gray-300 rounded-md overflow-y-scroll">
        {/* FASLE  */}
        {taskNotDone.map((task, index) => (
          <div key={index}>
            <TaskNotDone task={task} />
          </div>
        ))}

        {/* TRUE  */}
        {taskDone.map((task, index) => (
          <div className="border border-gray-100 h-10 leading-10 pl-5 " key={index}>
            {<IconDone />} <span className="pl-1">{task.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Task;
