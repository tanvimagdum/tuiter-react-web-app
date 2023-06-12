import React from "react";
const TuitSummaryItem = (
 {
   tuit = {
     "topic": "Space",
     "username": "SpaceX",
     "time": "2h",
     "title": "Tesla CyberTruck lands on Mars and picks up the Curiosity rover on its 6' bed",
     "image": "tesla.jpg"
   }
 }
) => {
 return(
  <li className="list-group-item">
   <div className="row">
     <div className="col">
       <div>{tuit.username} . {tuit.time}</div>
       <div className="fw-bolder">{tuit.topic}</div>
       <div>{tuit.title}</div>
     </div>
     <div className="col-2 col-sm-3 col-md-2 align-self-center">
       <img width={70} className="float-end rounded-3" src={`/images/${tuit.image}`}/>
     </div>
   </div>
  </li>
 );
};

export default TuitSummaryItem;

