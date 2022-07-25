import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import ReservInput from "../components/ReservInput";
import ReservationField from "../components/ResvervationField";

const NextPage = () => {
  const cells = useSelector((state) => state.users.value.fieldsNumber);

  const [table, setTable] = useState([]);
  const [selection, setSelection] = useState();
  const [name, setName] = useState(null);

  useEffect(() => {
    const divArr = [];

    for (let i = 1; i <= cells; i++) divArr.push("");
    setTable(divArr);
  }, []);

  return (
    <div>
      <div className="d-flex grow1">
        <ReservInput selection={selection} setName={setName} />
      </div>

      <div className="box-reserv d-flex grow3 p20">
        {table.map((x, i) => (
          <ReservationField
            key={i}
            index={i}
            selection={selection}
            setSelection={setSelection}
            name={name}
            div={x}
          />
        ))}
      </div>
    </div>
  );
};

export default NextPage;
