import Toolbar from "./Toolbar";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

import {useContext} from 'react';
import mainContext from "../context/mainContext";

const Page = () => {
    const {styles} = useContext(mainContext)


    return (
        <div>
            <Toolbar/>
            <Header/>
            <div className="d-flex">
                <div className="grow1">
                    {styles.sidebar && <Sidebar/>}

                </div>
                <div className="grow3">
                    <MainContent/>
                </div>
            </div>

        </div>
    );
};

export default Page;