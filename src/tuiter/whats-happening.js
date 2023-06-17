import React, {useState} from "react";
import { AiOutlinePicture } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineGif } from "react-icons/hi2";
import { BiItalic, BiBold } from "react-icons/bi";
import { BsEmojiSmile } from "react-icons/bs";
import { MdFormatListBulleted } from "react-icons/md";
import { TbCalendarStats } from "react-icons/tb";
import {createTuitThunk} from "./services/tuits-thunks";
import {useDispatch, useSelector} from "react-redux";


const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const { currentUser } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        const newTuit = {
            tuit: whatsHappening,
            username: currentUser.username,
            handle: currentUser.handle,
            image: currentUser.image
        }
        dispatch(createTuitThunk(newTuit));
        setWhatsHappening("");
    }
    return (
    <div className="row">
        {currentUser ? 
        <>
            <div className="col-auto">
                <img className="rounded-circle" src={`/images/${currentUser.image}`} width={60}/>
            </div>
            <div className="col-10">
                <textarea value={whatsHappening} placeholder="What's happening?"
                        className="form-control border-0"
                        onChange={(event) => setWhatsHappening(event.target.value)}>
                </textarea>
                <div>
                    <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                            onClick={tuitClickHandler}>
                        Tuit
                    </button>
                    <div className="text-primary fs-2">
                        <AiOutlinePicture className="me-3"/>
                        <HiOutlineGif className="me-3"/>
                        <MdFormatListBulleted className="me-3"/>
                        <BsEmojiSmile className="me-3"/>
                        <TbCalendarStats className="me-3"/>
                        <HiOutlineLocationMarker className="me-3"/>
                        <BiBold className="me-3"/>
                        <BiItalic className="me-3"/>
                    </div>
                </div> 
                <div className="col-12"><hr/></div>
            </div>
        </> :
        <>
            <div className="col-auto">
                <img className="rounded-circle" src="/images/kate.jpg" width={60}/>
            </div>
            <div className="col-10">
                <textarea placeholder="What's happening?"
                        className="form-control border-0">
                </textarea>
                <div>
                    <p className="float-end mt-2 ps-3 pe-3 fw-bold">Login to post a tuit.</p>
                    <div className="text-primary fs-2">
                        <AiOutlinePicture className="me-3"/>
                        <HiOutlineGif className="me-3"/>
                        <MdFormatListBulleted className="me-3"/>
                        <BsEmojiSmile className="me-3"/>
                        <TbCalendarStats className="me-3"/>
                        <HiOutlineLocationMarker className="me-3"/>
                        <BiBold className="me-3"/>
                        <BiItalic className="me-3"/>
                    </div>
                </div>
                <div className="col-12"><hr/></div>
            </div>
        </>}
    </div>
    );
}

export default WhatsHappening;

