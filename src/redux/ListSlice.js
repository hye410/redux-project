import { createSlice } from "@reduxjs/toolkit";

let ListSlice = createSlice({
  name : 'ListSlice',
  initialState : {
    selectedIds : [],
    target:0
  },
  reducers : {
    addToCart(state,action){
      state.selectedIds = [action.payload,...state.selectedIds];    
    },
    RemoveFromCart(state,action){
      const indexOfId = state.selectedIds.indexOf(action.payload);
      state.selectedIds.splice(indexOfId,1);
    },
    RemoveAllItems(state){
      state.selectedIds=[];
    },
    changeCount(state,action){
      state.target = action.payload;
    }
  }  
})

export let { addToCart, RemoveFromCart,RemoveAllItems,changeCount } = ListSlice.actions;

export default ListSlice;