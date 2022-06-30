import React, { useRef } from "react";

const Footer = ({ getTask, setTask }) => {
  const taskInp = useRef();

  function addTask() {
    const newTask = {
      date: new Date().toLocaleString(),
      text: taskInp.current.value,
      completed: false,
      timestamp: Date.now(),
    };

    if (!taskInp.current.value) return;

    setTask([...getTask, newTask]);
  }

  return (
    <footer>
      <textarea
        ref={taskInp}
        name="text"
        cols="55"
        rows="2"
        placeholder="Enter new task"
        autoComplete="off"
      ></textarea>
      <button onClick={addTask} className="footer-btn">
        Add
      </button>
    </footer>
  );
};

export default Footer;
