import { useState } from "react";
import { useSelector } from "react-redux";

const ReservationField = ({ name, selection, setSelection, index, div }) => {
  const selected = useSelector((state) => state.users.value.selected);

  function select() {
    setSelection(index);
  }

  return (
    <div className="box-top d-flex fl-col wrap-flex">
      <div className="box-inside d-flex grow3">{index + 1}</div>
      <div className="d-flex grow1">{name}</div>
    </div>
  );
};

export default ReservationField;
