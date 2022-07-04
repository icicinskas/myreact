import React from "react";
import Table from "./Table";

const Inventory = () => {
  return (
    <div className="inv">
      <h1>Inventory</h1>
      <div className="inv-top">
        <h3>Gold: 89614</h3>
        <div className="table">
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Inventory;
