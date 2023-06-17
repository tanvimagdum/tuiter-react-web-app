import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import TuitSummaryItem from "./tuit-summary-item";
import {findTuitsThunk} from "../services/tuits-thunks";

const TuitSummaryList = () => {
  const { tuits, loading } = useSelector(state => state.tuits)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findTuitsThunk())
  }, []); 
  return(
    <ul className="list-group">
      { loading &&
       <li className="list-group-item">
         Loading...
       </li>
      }
      {
        tuits.map(tuit =>
          <TuitSummaryItem
            key={tuit._id} tuit={tuit}/> )
      }
    </ul>
  );
};
export default TuitSummaryList;

