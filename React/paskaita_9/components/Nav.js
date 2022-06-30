import React from "react";

const Nav = ({ getTask, setFilter }) => {
  function completed() {
    let count = 0;
    getTask.map((x) => {
      if (x.completed) count++;
    });
    return count;
  }

  function setCompleted() {
    const all = getTask.filter((x) => x.completed === true);

    setFilter(all);
  }

  function setNotCompleted() {
    const all = getTask.filter((x) => x.completed === false);
    setFilter(all);
  }

  return (
    <nav>
      <button onClick={() => setFilter([])} className="nav-btn">
        Show all ({getTask.length})
      </button>
      <button onClick={setCompleted} className="nav-btn">
        Completed ({completed()})
      </button>
      <button onClick={setNotCompleted} className="nav-btn">
        Uncompleted ({getTask.length - completed()})
      </button>
    </nav>
  );
};

export default Nav;
