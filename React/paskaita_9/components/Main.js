import React, { useState } from "react";
import Task from "./Task";
import Footer from "./Footer";
import Nav from "./Nav";

const Main = () => {
  const [getTask, setTask] = useState([]);
  const [getFilter, setFilter] = useState([]);

  return (
    <div className="main-box">
      <div>
        <Nav
          getTask={getTask}
          setTask={setTask}
          getFilter={getFilter}
          setFilter={setFilter}
        />
      </div>
      <main>
        <Task
          getTask={getFilter.length ? getFilter : getTask}
          setTask={setTask}
        />
      </main>
      <div>
        <Footer getTask={getTask} setTask={setTask} />
      </div>
    </div>
  );
};

export default Main;
