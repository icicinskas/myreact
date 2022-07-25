import { useRef } from "react";

const Filter = ({ post, setFilter, setShowFilter }) => {
  const genderRef = useRef();
  const ageRef = useRef();
  const colorRef = useRef();

  function filter() {
    const gender = genderRef.current.value;
    const age = ageRef.current.value;
    const color = colorRef.current.value;

    if (gender.length === 0 && age.length === 0 && color === 0) {
      return setShowFilter(false);
    }

    let filtered = post;

    if (gender.length > 0) {
      filtered = post.filter((x) => x.gender === gender);
    }

    if (age.length > 0) {
      filtered = post.filter((x) => x.age === age);
    }
    if (color.length > 0) {
      filtered = post.filter((x) => x.color === color);
    }

    setFilter(filtered);
    setShowFilter(true);

    function clear() {
      genderRef.current.value = "";
      ageRef.current.value = "";
      colorRef.current.value = "";
    }

    clear();
  }

  return (
    <div className="d-flex g10">
      <input ref={genderRef} type="text" placeholder="gender filter" />
      <input ref={ageRef} type="text" placeholder="age filter" />
      <input ref={colorRef} type="text" placeholder="hair color filter" />
      <button onClick={filter} className="p5">
        F i l t e r
      </button>
    </div>
  );
};

export default Filter;
