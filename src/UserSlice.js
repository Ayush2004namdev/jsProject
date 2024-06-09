import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: "user",
    initialState: {
        user:null,
        userAddress:null,
        isSignedIn:false,
        userData:{}
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        removeUser: (state) => {
            state.user = null;
        },
        toggleSignedIn: (state,action) => {
            state.isSignedIn = !state.isSignedIn;
        },
        setUserdata: (state,action) => {
            state.userData = action.payload
        },
        setUserAddress : (state,action) => {
            state.userAddress = action.payload
        }
    },
});

export const { setUser, removeUser ,toggleSignedIn,setUserdata,setUserAddress} = UserSlice.actions;
export default UserSlice.reducer;