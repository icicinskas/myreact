import { useContext, useRef } from "react";
import mainContext from "../context/mainContext";

const Inputs = () => {
  const {
    row,
    setRow,
    sidebar,
    setSidebar,
    setToolbarColor,
    setMainBgColor,
    posts,
    setPost,
    setHeaderBgImg,
    setToolbarPad,
    setHeaderTxt,
    setHeaderHeight,
    setLink,
    link,
  } = useContext(mainContext);

  const toolbarColorRef = useRef();
  const contentBgRef = useRef();
  const imgRef = useRef();
  const titleRef = useRef();
  const headImgRef = useRef();
  const headHeightRef = useRef();
  const headerTxtRef = useRef();
  const paddingRef = useRef();
  const linkRef = useRef();

  function changeToolbarColor() {
    const inputValue = toolbarColorRef.current.value;
    setToolbarColor(inputValue);
  }

  function changeContentBGColor() {
    const inputValue = contentBgRef.current.value;
    setMainBgColor(inputValue);
  }

  function changeHeaderImage() {
    const inputValue = headImgRef.current.value;
    setHeaderBgImg(inputValue);
  }

  function changeToolbarPadding() {
    const inputValue = paddingRef.current.value;
    setToolbarPad(inputValue);
  }

  function changeHeadertext() {
    const inputValue = headerTxtRef.current.value;
    setHeaderTxt(inputValue);
  }

  function changeHeaderHeight() {
    const inputValue = headHeightRef.current.value;
    setHeaderHeight(inputValue);
  }

  function addLink() {
    const inputValue = [];
    inputValue.push(linkRef.current.value);
    setLink([...link, inputValue]);
  }

  function addPost() {
    const newPost = {
      image: imgRef.current.value,
      title: titleRef.current.value,
    };

    setPost([...posts, newPost]);
  }

  return (
    <div className="left d-flex fl-col grow1 g10 m10">
      <input
        ref={toolbarColorRef}
        type="text"
        placeholder="Enter Toolbar Color"
      />
      <button onClick={changeToolbarColor}>Change Toolbar Color</button>

      <input
        ref={paddingRef}
        type="text"
        placeholder="Enter Toolbar Padding Value"
      />
      <button onClick={changeToolbarPadding}>
        Change Toolbar Padding Value
      </button>

      <input ref={linkRef} type="text" placeholder="Add Links Quantity" />
      <button onClick={addLink}>Change Links Quantity</button>

      <input ref={headImgRef} type="url" placeholder="Enter Url BG image" />
      <button onClick={changeHeaderImage}>Change Header Image</button>

      <input
        ref={headHeightRef}
        type="text"
        placeholder="Enter Header Height"
      />
      <button onClick={changeHeaderHeight}>Change Header Height</button>

      <input ref={headerTxtRef} type="text" placeholder="Enter Header Text" />
      <button onClick={changeHeadertext}>Change Header text</button>

      <input onChange={() => setSidebar(!sidebar)} type="checkbox" />
      <label htmlFor="">Switch on/of Sidebar</label>

      <input ref={imgRef} type="url" placeholder="Enter Post Image" />
      <input ref={titleRef} type="text" placeholder="Enter Post Title" />
      <button onClick={addPost}>Add Post</button>

      <input onChange={() => setRow(!row)} type="checkbox" />
      <label htmlFor="">Change Main Content Display</label>

      <input
        ref={contentBgRef}
        type="text"
        placeholder="Enter Content BG Color"
      />
      <button onClick={changeContentBGColor}>
        Change Content Background Color
      </button>
    </div>
  );
};

export default Inputs;
