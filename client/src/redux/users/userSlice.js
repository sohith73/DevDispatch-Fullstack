import { createSlice } from "@reduxjs/toolkit";


const initialState = {
     token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
     loading: false,
     signup: false,
     signupData: null,
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
          }
     }
)


export const { setToken, setLoading, setSignupData, setSignup } = authSlice.actions
export default authSlice.reducer