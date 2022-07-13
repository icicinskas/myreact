import {useContext} from 'react';
import mainContext from "../context/mainContext";


const Toolbar = () => {
    const {styles, toolbarLinks} = useContext(mainContext)

    const style = {
        padding: styles.toolbarPadding,
        backgroundColor: styles.toolbarColor
    }

    return (
        <div className="toolbar d-flex" style={style}>
            {toolbarLinks.map((x, i) => <div key={i}>{x}</div>)}
        </div>
    );
};

export default Toolbar;