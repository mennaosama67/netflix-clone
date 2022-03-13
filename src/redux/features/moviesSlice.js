import { createSlice,createAsyncThunk } from "@reduxjs/toolkit"
import axios from "../../axios/axios";

export const getMovies=createAsyncThunk('movie/getMovies',async(fetchURL,thunkAPI)=>{
    const {rejectWithValue}=thunkAPI;
    try {
        const request = await axios.get(fetchURL);
        const response=request.data.results;
        return response
    } catch (error) {
        return rejectWithValue(error.message)
    }
  
})


export const moviesSlice=createSlice({
    name:'movie',
    initialState:{
        movie:[],
        showVideo:false,
        searchQuery:'',
        toggleBtn:false
        
    },
    reducers:{
       showTrailer:(state,action)=>{
         state.showVideo=action.payload;
       },
       search:(state,action)=>{
           state.searchQuery=action.payload;
       },
       addMovie:(state,action)=>{
        state.movie.push(action.payload);
       },
       toggleBtns:(state,action)=>{
           state.toggleBtn=action.payload;
       }

     
     
    },
     extraReducers:{
         [getMovies.pending]:(state,action)=>{
             
         },
         [getMovies.fulfilled]:(state,action)=>{
            state.movie.push(action.payload);           
         },
         [getMovies.rejected]:(state,action)=>{
         
         },
        
     }
})
export const {showTrailer,search,addMovie,toggleBtns} =moviesSlice.actions;


export default moviesSlice.reducer;