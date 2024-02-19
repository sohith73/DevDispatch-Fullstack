import { createSlice } from "@reduxjs/toolkit";


const initialState = {
     postData: null,
     name: null,
     postLoading: false,
}

const authSlice = createSlice(
     {
          name: 'post',
          initialState: initialState,
          reducers: {
               setPostData(state, action) {
                    state.postData = action.payload;
               },
               setName(state, action) {
                    state.name = action.payload;
               },
               setPostLoading(state, action) {
                    state.postLoading = action.payload;
               }
          }
     }
)


export const { setPostData, setName, setPostLoading } = authSlice.actions
export default authSlice.reducer