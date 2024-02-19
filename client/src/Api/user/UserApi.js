import axios from "axios"
import { setLoading, setToken, setSignup, setSignupData, setName } from "../../redux/users/userSlice"


export const createUser = (name, email, password, navigate) => {
     return async (dispatch) => {
          dispatch(setLoading(true))
          try {
               const response = await axios.post("http://localhost:4000/api/v1/auth/signup", {
                    name,
                    email,
                    password,
               })
               console.log("Sign UP API RESPONSE............", response)
               if (!response.data.success) {
                    throw new Error(response.data.message)
               }
          } catch (error) {
               console.log("Sign up API ERROR............", error)
          }
          dispatch(setLoading(false))
          navigate("/signup")
     }
}

export const getUser = (email, password, navigate) => {
     return async (dispatch) => {
          dispatch(setLoading(true))
          try {
               const response = await axios.post("http://localhost:4000/api/v1/auth/login", {
                    email,
                    password
               })
               console.log("LOGIN API RESPONSE............", response)
               if (!response.data.success) {
                    throw new Error(response.data.message)
               }
               console.log(response.data.user)
               dispatch(setSignupData(response.data.user))
               dispatch(setName(response.data.user.name))
               dispatch(setToken(response.data.token))
               localStorage.setItem("token", JSON.stringify(response.data.token))
               localStorage.setItem("user", JSON.stringify(response.data.user))
               // navigate("/")
               // navigate("/")
               dispatch(setSignup(true))
          } catch (error) {
               console.log("LOGIN API ERROR............", error)
          }
          dispatch(setLoading(false))
          navigate("/")
     }
}
