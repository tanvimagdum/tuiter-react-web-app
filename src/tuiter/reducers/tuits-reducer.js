import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
    "userName": "Kate",
    "handle": "@kate",
    "image": "kate.jpg",
};
   
const templateTuit = {
    ...currentUser,
    "topic": "New Topic",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}
   

const tuitsSlice = createSlice({
 name: 'tuits',
 initialState: { tuits: tuits },
 reducers : {
    toggleLike(state, action) {
        const tuit = state.tuits.find(tuit => tuit._id === action.payload);
        if (tuit) {
          tuit.liked = !tuit.liked;
          tuit.likes += tuit.liked ? 1 : -1;
        }
    },
    createTuit(state, action) {
        state.tuits.unshift({
          ...action.payload,
          ...templateTuit,
          _id: (new Date()).getTime(),
        })
    },
    deleteTuit(state, action) {
        const index = state.tuits.findIndex(tuit => tuit._id === action.payload);
        state.tuits.splice(index, 1);
    }   
 }
});

export const { toggleLike, createTuit, deleteTuit } = tuitsSlice.actions;
export default tuitsSlice.reducer;

