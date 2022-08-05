import "./App.css";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="app">
      <Hero title={"Info hero"} subtitle={"info subtitle"} color={"red"} />
    </div>
  );
};

export default App;
