import {createSlice} from "@reduxjs/toolkit";

export const userSlice=createSlice({
    name:"alerts",
    initialState:{
        user:null,
        reloadUser:true,
    },
    reducers:{
        setUser:(state,action)=>{
            state.user=action.payload;
        },
       
       
    }
})

export const {setUser}=userSlice.actions;