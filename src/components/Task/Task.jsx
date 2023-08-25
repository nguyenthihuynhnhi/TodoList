import React from "react";
import { useSelector } from "react-redux";
import IconDone from "../../assets/icon/IconDone";
import { LoadingOutlined } from "@ant-design/icons";
import TaskNotDone from "./TaskNotDone";

function Task() {
  const { taskList } = useSelector((state) => {
    return state.todoSlice;
  });

  const { loadingData } = useSelector((state) => {
    return state.todoSlice;
  });

  const taskNotDone = taskList.filter((task) => {
    return task.completed !== true;
  });

  const taskDone = taskList.filter((task) => {
    return task.completed === true;
  });

  const renderTaskList = () => {
    //chua co data
    if (taskList.length === 0) {
      if (loadingData === false) {
        return <div className="text-gray-400 text-center">No data</div>;
      }
      if (loadingData) {
        return (
          <div className="text-center">
            <LoadingOutlined />
          </div>
        );
      }
    }

    //co data
    if (taskList.length !== 0) {
      if (loadingData === true) {
        return (
          <div className="text-center">
            <LoadingOutlined />
          </div>
        );
      }
      if (loadingData === false) {
        return (
          <>
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
          </>
        );
      }
    }
  };

  return (
    <div>
      <h2 className="font-semibold text-xl pb-4 ">Task</h2>
      <div className="h-[500px] border border-gray-300 rounded-md overflow-y-scroll">{renderTaskList()}</div>

      <div className=" py-4">
        <span>
          Done {taskDone.length}/{taskList.length} tasks
        </span>
      </div>
    </div>
  );
}

export default Task;
