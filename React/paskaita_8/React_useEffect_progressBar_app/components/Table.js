import React from 'react';

const Table = ({users}) => {



    return (
        <div className="table">

            {users.map((x, i) =>
                <div className="userCard d-flex" style={{backgroundColor: x.gender === "male" ? "blue" : "pink"}} key={i}>
                    <img src={x.photo} alt=""/>
                    <div>
                        <h3>{x.name}</h3>
                        <div>{x.gender}</div>
                    </div>

                </div> )}

        </div>
    );
};

export default Table;