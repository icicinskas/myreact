import React from "react";

const Task = ({ getTask, setTask }) => {
  function checked(index) {
    const items = [...getTask];
    items[index].completed = !items[index].completed;
    setTask(items);
  }

  function remove(index) {
    const newValues = getTask.filter((x, i) => i !== index);
    setTask(newValues);
  }

  return (
    <div className="table">
      {getTask.map((x, i) => (
        <div
          style={{ backgroundColor: x.completed ? "#9cd782" : "white" }}
          className="show-tasks"
        >
          <div className="display-task">
            <div className="date">{x.date}</div>
            <div className="task-text">{x.text}</div>
          </div>
          <div className="manage-task">
            <div className="cmpl">
              <img
                style={{ display: x.completed ? "none" : "block" }}
                onClick={() => checked(i)}
                className="check"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs9HG5XkK-ZJgg53MLtTJzCvRhjpHv8oVcVcaMTqIsdF4ibCIy_krlYoMMdf9WWp6UH08&usqp=CAU"
                alt="check"
              />
            </div>
            <div className="dlt">
              <img
                onClick={() => remove(i)}
                className="delete"
                src="http://cdn.onlinewebfonts.com/svg/img_216917.png"
                alt="delete"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Task;
