import { FaHeart, FaRegHeart, FaRegComment, FaRetweet, FaShare } from "react-icons/fa";
import "./index.css";
import { useDispatch, useSelector } from 'react-redux';
import { toggleLike } from '../reducers/tuits-reducer';

const TuitStats = (props) => {

    const tuits = useSelector(state => state.tuits.tuits);
    const dispatch = useDispatch();

    const unlikeHandler = (tuitId) => {
        dispatch(toggleLike(tuitId));
    }

    const likeHandler = (tuitId) => {
        dispatch(toggleLike(tuitId));
    }

    return (
        <div className="container">
            <div className="row wd-stat-icons-list">
                <div className="col">
                    <FaRegComment/>
                    <span className="wd-stat-font">{props.tuit.replies}</span>
                </div>
                <div className="col">
                    <FaRetweet/>
                    <span className="wd-stat-font">{props.tuit.retuits}</span>
                </div>
                <div className="col">
                    {props.tuit.liked ? 
                        <FaHeart style={{'color':'red'}} onClick={() => unlikeHandler(props.tuit._id)}/> : 
                        <FaRegHeart onClick={() => likeHandler(props.tuit._id)}/>
                    }
                    <span className="wd-stat-font">{props.tuit.likes}</span>
                </div>
                <div className="col">
                    <FaShare/>
                </div>
            </div>
        </div>
    );
}

export default TuitStats;