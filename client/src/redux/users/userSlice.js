import { createSlice } from "@reduxjs/toolkit";


const initialState = {
     token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
     loading: false,
     signup: false,
     signupData: null,
     name : null,
}

const authSlice = createSlice(
     {
          name: 'auth',
          initialState: initialState,
          reducers: {
               setToken: (state, action) => {
                    state.token = action.payload
               },
               setLoading(state, action) {
                    state.loading = action.payload;
               },
               setSignupData(state, action) {
                    state.signupData = action.payload;
               },
               setSignup(state, action) {
                    state.signup = action.payload;
               },
               setName(state, action){
                    state.name = action.payload;
               }
          }
     }
)


export const { setToken, setLoading, setSignupData, setSignup,setName } = authSlice.actions
export default authSlice.reducer