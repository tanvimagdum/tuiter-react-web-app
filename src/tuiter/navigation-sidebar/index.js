import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaHome, FaHashtag, FaBell, FaEnvelope, FaBookmark, FaList, FaUser, FaEllipsisH } from "react-icons/fa";
import { useSelector } from "react-redux";

const NavigationSidebar = () => {
  const { pathname } = useLocation();
  const [ignore, tuiter, active] = pathname.split("/");
  const { currentUser } = useSelector((state) => state.user);
  
  return (
    <div className="list-group">
      <Link to={"/tuiter/home "} className={`list-group-item ${active === "home" ? "active" : ""}`}>
        <FaHome className="wd-icon-margin"/>
        <span className="d-none d-xl-inline">Home</span>
      </Link>
      <Link to={"/tuiter/explore "} className={`list-group-item ${active === "explore" ? "active" : ""}`}>
        <FaHashtag className="wd-icon-margin"/>
        <span className="d-none d-xl-inline">Explore</span>
      </Link>
      <Link to={"/tuiter/notifications "} className={`list-group-item ${active === "notifications" ? "active" : ""}`}>
        <FaBell className="wd-icon-margin"/>
        <span className="d-none d-xl-inline">Notifications</span>
      </Link>
      <Link to={"/tuiter/messages "} className={`list-group-item ${active === "messages" ? "active" : ""}`}>
        <FaEnvelope className="wd-icon-margin"/>
        <span className="d-none d-xl-inline">Messages</span>
      </Link>
      <Link to={"/tuiter/bookmarks "} className={`list-group-item ${active === "bookmarks" ? "active" : ""}`}>
        <FaBookmark className="wd-icon-margin"/>
        <span className="d-none d-xl-inline">Bookmarks</span>
      </Link>
      <Link to={"/tuiter/lists "} className={`list-group-item ${active === "lists" ? "active" : ""}`}>
        <FaList className="wd-icon-margin"/>
        <span className="d-none d-xl-inline">Lists</span>
      </Link>
      <Link to={"/tuiter/profile "} className={`list-group-item ${active === "profile" ? "active" : ""}`}>
        <FaUser className="wd-icon-margin"/>
        <span className="d-none d-xl-inline">Profile</span>
      </Link>
      <Link to={"/tuiter/more "} className={`list-group-item ${active === "more" ? "active" : ""}`}>
        <FaEllipsisH className="wd-icon-margin"/>
        <span className="d-none d-xl-inline">More</span>
      </Link>

      {!currentUser && <Link className="list-group" to="/tuiter/login">   Login   </Link>}
      {!currentUser && <Link className="list-group" to="/tuiter/register">Register</Link>}
    </div>
  );
};
export default NavigationSidebar;

