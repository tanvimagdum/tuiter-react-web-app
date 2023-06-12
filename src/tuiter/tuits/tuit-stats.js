import { FaHeart, FaRegHeart, FaRegComment, FaRetweet, FaShare } from "react-icons/fa";
import { AiFillDislike } from "react-icons/ai";
import "./index.css";
import { useDispatch, useSelector } from 'react-redux';
import { toggleLike } from '../reducers/tuits-reducer';
import { updateTuitThunk } from "../services/tuits-thunks";

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
                    <FaHeart className="text-danger" onClick={() =>
                            dispatch(updateTuitThunk({ ...props.tuit, likes: props.tuit.likes + 1}))}/>   
                    <span className="wd-stat-font">{props.tuit.likes}</span>
                </div>
                <div className="col">
                    <AiFillDislike onClick={() =>
                            dispatch(updateTuitThunk({ ...props.tuit, dislikes: props.tuit.dislikes + 1 }))}/>
                    <span className="wd-stat-font">{props.tuit.dislikes}</span>
                </div>
                <div className="col">
                    <FaShare/>
                </div>
            </div>
        </div>
    );
}

export default TuitStats;