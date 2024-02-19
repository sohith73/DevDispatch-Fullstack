import axios from "axios"

import { setPostData, setName, setPostLoading } from "../redux/posts/postSlice"


export const CreatePost = (title, body, img, tags, navigate) => {
     return async (dispatch) => {
          dispatch(setPostLoading(true))
          try {
               const response = await axios.post("http://localhost:4000/api/v1/post/create", {
                    title,
                    body,
                    img,
                    tags
               })
               console.log("CREATE POST API RESPONSE............", response)
               if (!response.data.success) {
                    throw new Error(response.data.message)
               }
          } catch (error) {
               console.log("CREATE POST  API ERROR............", error)
          }
          dispatch(setPostLoading(false))
          navigate("/")
     }
}



export const GetPost = () => {
     return async (dispatch) => {
          dispatch(setPostLoading(true))
          try {
               const response = await axios.get("http://localhost:4000/api/v1/post/",)
               const data = response.data
               dispatch(setPostData(data.data))
               console.log("GET POST API RESPONSE............", response)
               if (!response.data.success) {
                    throw new Error(response.data.message)
               }
          } catch (error) {
               console.log("GET POST  API ERROR............", error)
          }
          dispatch(setPostLoading(false))

     }
}