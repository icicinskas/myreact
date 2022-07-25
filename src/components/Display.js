import { useState } from "react";
import { useSelector } from "react-redux";
import Filter from "./Filter";
import Inputs from "./Inputs";

const Display = () => {
  const post = useSelector((state) => state.users.value.posts);

  const [showFilter, setShowFilter] = useState(false);
  const [filter, setFilter] = useState([]);

  return (
    <div className="d-flex fl-col g10  m10">
      <Filter post={post} setFilter={setFilter} setShowFilter={setShowFilter} />
      <div className="d-flex wrap-flex">
        {showFilter
          ? filter.map((x, i) => <Inputs index={i} key={i} post={x} />)
          : post.map((x, i) => <Inputs index={i} key={i} post={x} />)}
      </div>
    </div>
  );
};

export default Display;
