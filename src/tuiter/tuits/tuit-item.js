import React from "react";
import "./index.css";
import { BsFillPatchCheckFill, BsDot } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import TuitStats from "./tuit-stats";
import { useDispatch } from "react-redux";
import { deleteTuitThunk } from "../services/tuits-thunks";

const TuitItem = (
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
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  }
  return(
    <li className="list-group-item">
    <div className="row">
          <div className="col-1 d-none d-sm-block col-sm-2 col-md-1">
              <img width={40} className="rounded-circle" src={`/images/${tuit.image}`}/>
          </div>
          <div className="col">
              <div>
                  <span className="wd-username">{tuit.username}</span>
                  <BsFillPatchCheckFill className="wd-badge"/>
                  <span className="wd-handle">{tuit.handle}</span>
                  <BsDot className="wd-dot"/>
                  <span className="wd-time">{tuit.time}</span>
                  <RxCross2 className="float-end" onClick={() => deleteTuitHandler(tuit._id)}/>
              </div>
              <div className="wd-tuit">{tuit.tuit}</div>
              <TuitStats tuit = {tuit}/>
          </div> 
    </div>
    </li>
  );
};

export default TuitItem;

