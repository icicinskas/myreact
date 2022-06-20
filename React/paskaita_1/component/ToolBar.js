function Toolbar() {
  const toolbarItems = ["Home", "About", "Contacts", "Login", "Register"];

  return (
    <div className="Tool-bar">
      <header className="Header">
        <a href="home" id="Home">
          {toolbarItems[0]}
        </a>
        <a href="about" id="About">
          {toolbarItems[1]}
        </a>
        <a href="about" id="About">
          {toolbarItems[2]}
        </a>
      </header>
      <div className="btns">
        <button>{toolbarItems[3]}</button>
        <button>{toolbarItems[4]}</button>
      </div>
    </div>
  );
}

export default Toolbar;
