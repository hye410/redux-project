import { configureStore } from "@reduxjs/toolkit";
import ListSlice from "./redux/ListSlice";


export default configureStore({
  reducer :  {
    ListSlice : ListSlice.reducer
  } 
})