import React from 'react';
import ControlPanel from "../components/ControlPanel";
import Page from "../components/Page";

const HomePage = () => {
    return (
        <div className="d-flex">

            <div className="grow1">
                <ControlPanel/>
            </div>

            <div className="grow3">
                <Page/>
            </div>

        </div>
    );
};

export default HomePage;