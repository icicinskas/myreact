import Display from "../components/Display";
import EnterData from "../components/EnterData";

const MainPage = () => {
  return (
    <div className="d-flex">
      <div className="data d-flex jc-c grow1 m20">
        <EnterData />
      </div>
      <div className="display d-flex grow3">
        <Display />
      </div>
    </div>
  );
};

export default MainPage;
