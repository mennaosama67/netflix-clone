import {createSlice } from '@reduxjs/toolkit';

export const userSlice=createSlice({
    name:'user',
    initialState:{
        user:null,
        isValid:true
    },
    reducers:{
        login:(state,action)=>{
            state.user=action.payload;
        },
        logout:(state)=>{
            state.user=null;
        },
        validUser:(state,action)=>{
            state.isValid=action.payload;
        }

    }
})
export const {login,logout,validUser}=userSlice.actions;
export const selectUser=state=>state.user.user;
export default userSlice.reducer;

