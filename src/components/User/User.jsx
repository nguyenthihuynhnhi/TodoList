import React, { useEffect, useState } from "react";
import { Select } from "antd";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setLoadingData, setTaskListsREDUX, setUserSelectREDUX, todoREDUX } from "../../redux/slices/todoSlice";

function User() {
  const dispatch = useDispatch();

  const { taskLists } = useSelector((state) => {
    return state.todoSlice;
  });

  const handleChange = (value) => {
    //bat loading

    dispatch(setUserSelectREDUX(value));

    //  co du lieu thi return
    if (taskLists[value] !== undefined) return;

    dispatch(setLoadingData(true));

    axios
      .get(`https://jsonplaceholder.typicode.com/users/${value}/todos`)
      .then((response) => {
        console.log("🏊🏼‍♀️ 👙 .then 👙 response:", response);

        // dispatch(todoREDUX(response.data));
        dispatch(setTaskListsREDUX(response.data));
        //tat loading
        dispatch(setLoadingData(false));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const [user, setUser] = useState([]);

  useEffect(() => {
    // Make a GET request
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const userArr = user.map((item, index) => {
    return {
      value: item.id,
      label: item.name,
    };
  });

  return (
    <div>
      <h2 className="font-semibold text-xl pb-4 ">User</h2>

      <div>
        <Select
          placeholder="Select user"
          style={{
            width: "200px",
          }}
          onChange={handleChange}
          options={userArr}
        />
      </div>
    </div>
  );
}

export default User;
