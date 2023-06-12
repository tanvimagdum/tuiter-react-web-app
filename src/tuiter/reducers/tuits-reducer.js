import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';
import {findTuitsThunk, deleteTuitThunk, createTuitThunk, updateTuitThunk} from "../services/tuits-thunks";

const initialState = {
   tuits: [],
   loading: false
}

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
    "dislikes": 0
}
   

const tuitsSlice = createSlice({
 name: 'tuits',
 initialState,
 extraReducers: {
    [updateTuitThunk.fulfilled]:
        (state, { payload }) => {
            state.loading = false
            const tuitNdx = state.tuits.findIndex((t) => t._id === payload._id)
            state.tuits[tuitNdx] = { ...state.tuits[tuitNdx], ...payload }
        },
    [createTuitThunk.fulfilled]:
        (state, { payload }) => {
            state.loading = false
            state.tuits.push(payload)
        },
    [deleteTuitThunk.fulfilled] :
        (state, { payload }) => {
            state.loading = false
            state.tuits = state.tuits .filter(t => t._id !== payload)
        },
   [findTuitsThunk.pending]:
        (state) => {
            state.loading = true
            state.tuits = [] 
        },
   [findTuitsThunk.fulfilled]:
        (state, { payload }) => {
            state.loading = false
            state.tuits = payload 
        },
   [findTuitsThunk.rejected]:
        (state, action) => {
            state.loading = false
            state.error = action.error
        }
 },
 reducers: {
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

