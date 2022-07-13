import {useContext} from 'react';
import mainContext from "../context/mainContext";
import PostCard from "./PostCard";

const MainContent = () => {
    const {styles, posts} = useContext(mainContext)

    const style = {
        flexDirection: styles.mainRow ? 'row' : 'column',
        backgroundColor: styles.mainColor
    }

    return (
        <div className="main d-flex" style={style}>
            {posts.map((x, i) => <PostCard key={i} item={x}/>)}
        </div>
    );
};

export default MainContent;