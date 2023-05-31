import React from "react";
const WhoToFollowListItem = (
        {
        who = { userName: 'NASA', handle: 'nasa', avatarIcon: 'nasa.jpg' }
        }
    ) => {
    return(
    <li className="list-group-item">
    <div className="row">
        <div className="col col-lg-3 col-xl-3 col-xxl-2">
            <img className="rounded-circle" height={40} src={`/images/${who.avatarIcon}`}/>
        </div>
        <div className="col col-lg-7 col-xl-7 col-xxl-8">
            <div className="fw-bold">{who.userName}</div>
            <div>@{who.handle}</div>
        </div>
        <div className="col col-lg-2 col-xl-2 col-xxl-2 align-self-center">
            <button className="btn btn-primary rounded-pill float-end">Follow</button>
        </div>
    </div>
    </li>
    );
};

export default WhoToFollowListItem;

