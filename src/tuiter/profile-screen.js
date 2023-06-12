import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { profileThunk, logoutThunk, updateUserThunk } from "./services/auth-thunks";

function ProfileScreen() {
 const { currentUser } = useSelector((state) => state.user);
 const [profile, setProfile] = useState(currentUser);

 const dispatch = useDispatch();
 const navigate = useNavigate();

 const save = () => { dispatch(updateUserThunk(profile)); };
 useEffect(() => {
    async function fetchData() {
        const {payload} = await dispatch(profileThunk());
        setProfile(payload);
    }
    fetchData();
 },[]);
 
 return (
    <div>
        <h1>Profile</h1><br/>
        {profile && (
            <div className="container">
                <div className="row mt-3">
                    <div className="col-3">
                        <label>First Name</label>
                    </div>
                    <div className="col">
                        <input className="form-control" type="text" value={profile.firstName} onChange={(event) => {
                            const newProfile = {
                                ...profile, firstName: event.target.value,
                            };
                            setProfile(newProfile);
                        }}/>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-3">
                        <label>Last Name</label>
                    </div>
                    <div className="col">
                        <input className="form-control" type="text" value={profile.lastName} onChange={(event) => {
                            const newProfile = {
                                ...profile, lastName: event.target.value,
                            };
                            setProfile(newProfile);
                        }}/>
                    </div>
                </div>
            </div>
        )}
        <div className="container">
            <div className="row mx-5">
                <div className="col-4 my-5">
                    <button className="btn btn-primary" onClick={() => {
                        dispatch(logoutThunk());
                        navigate("/tuiter/login");
                    }}>                   
                        Logout
                    </button>
                </div>
                <div className="col my-5">
                    <button className="btn btn-success" onClick={save}>Save  </button>
                </div>
            </div>
        </div>
    </div> 
 );  
}

export default ProfileScreen;

