import { Routes, Route } from "react-router";
import Nav from "../nav";
import HomeScreen from "./home-screen";
import ExploreScreen from "./explore-screen/index";
import BookmarksScreen from "./bookmarks-screen";
import ProfileScreen from "./profile-screen";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";

const store = configureStore(
  {reducer: {who: whoReducer, tuits: tuitsReducer}});

function Tuiter() {
    return(
      <Provider store={store}>
         <Nav/>
         <div className="row">
            <div className="d-none d-sm-block col-sm-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
               <NavigationSidebar />
            </div>
            <div className="col col-lg-8 col-xl-7 col-xxl-7">
               <Routes>
                  <Route path="/home" element={<HomeScreen />} />
                  <Route path="/explore" element={<ExploreScreen />} />
                  <Route path="/bookmarks" element={<BookmarksScreen />} />
                  <Route path="/profile" element={<ProfileScreen />} />
               </Routes>
            </div>
            <div className="d-none d-lg-block col-lg-3 col-xl-3 col-xxl-3">
               <WhoToFollowList />
            </div>
         </div>
      </Provider>
    );
 }
 export default Tuiter