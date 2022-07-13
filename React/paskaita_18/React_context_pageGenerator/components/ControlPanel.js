import {useRef, useContext} from 'react';
import mainContext from "../context/mainContext";

const ControlPanel = () => {

    const {
        styles,
        setStyles,
        toolbarLinks,
        setToolbarLinks,
        posts,
        setPosts
    } = useContext(mainContext)

    const refs = {
        toolbarColor: useRef(),
        toolbarPadding: useRef(),
        headerImage: useRef(),
        headerText: useRef(),
        headerHeight: useRef(),
        sidebar: useRef(),
        mainRow: useRef(),
        mainColor: useRef(),
        link: useRef(),
        postPhoto: useRef(),
        postTitle: useRef()
    }

    function updateStyles(keyName) {
        const stylesCopy = {...styles}
        stylesCopy[keyName] = refs[keyName].current.value

        if(keyName === "sidebar") {
            stylesCopy[keyName] = !styles.sidebar
        }

        if(keyName === "mainRow") {
            stylesCopy[keyName] = !styles.mainRow
        }

        setStyles(stylesCopy)
    }

    function addLinks() {
        setToolbarLinks([...toolbarLinks, refs.link.current.value])
    }

    function addPost() {
        const post = {
            image: refs.postPhoto.current.value,
            title: refs.postTitle.current.value
        }

        setPosts([...posts, post])
    }

    console.log(styles)

    return (
        <div>

            <div className="p-10">
                <h3>Toolbar</h3>
                <div>
                    <input ref={refs.toolbarColor} type="text" placeholder="Toolbar Color"/>
                    <button onClick={() => updateStyles("toolbarColor")}>Set Color</button>
                </div>
                <div>
                    <input ref={refs.toolbarPadding} type="text" placeholder="Toolbar Padding"/>
                    <button onClick={() => updateStyles("toolbarPadding")}>Set Padding</button>
                </div>
                <div>
                    <input ref={refs.link} type="text" placeholder="Toolbar links"/>
                    <button onClick={addLinks}>Add Link</button>
                </div>
            </div>

            <div className="p-10">
                <h3>header</h3>
                <div>
                    <input ref={refs.headerImage} type="text" placeholder="header Image"/>
                    <button onClick={() => updateStyles("headerImage")}>Set Image</button>
                </div>
                <div>
                    <input ref={refs.headerText} type="text" placeholder="header text"/>
                    <button onClick={() => updateStyles("headerText")}>Set Text</button>
                </div>
                <div>
                    <input ref={refs.headerHeight} type="text" placeholder="header height"/>
                    <button onClick={() => updateStyles("headerHeight")}>Set height</button>
                </div>
            </div>

            <div className="p-10">
                <h3>Sidebar</h3>
                <input ref={refs.sidebar} onChange={() => updateStyles("sidebar")} type="checkbox" id="check"/>
                <label htmlFor="check">Show sidebar</label>
            </div>

            <div className="p-10">
                <h3>Main</h3>
                <div >
                    <input ref={refs.postTitle} type="text" placeholder="post title"/>
                    <input ref={refs.postPhoto} type="text" placeholder="post image"/>

                    <button onClick={addPost}>add Post</button>
                </div>

                <div className="mt-10">
                    <input ref={refs.mainRow} onChange={() => updateStyles("mainRow")} type="checkbox" id="check2"/>
                    <label htmlFor="check2">Main align row</label>
                </div>

                <div>
                    <input ref={refs.mainColor} type="text" placeholder="main color"/>
                    <button onClick={() => updateStyles("mainColor")}>Set color</button>
                </div>
            </div>

        </div>
    );
};

export default ControlPanel;