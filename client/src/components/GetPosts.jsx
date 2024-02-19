import React, { useState ,useEffect} from 'react'
import PostAnimated from './PostAnimated '
import { useDispatch, useSelector } from 'react-redux'
import store from '../redux/store'
import { GetPost } from '../Api/PostApi'

const GetPosts = () => {
     const {postData} = useSelector((store) => store.post)
     console.log(postData);
     const dispatch = useDispatch();
     const [postsData, setPostsData] = useState([null])
     useEffect(() => {
          dispatch(GetPost())
     }, [])
     useEffect(() => {
          setPostsData(postData);
          console.log("first is working ", postsData)
     }, [postData])
     return (
          <div className="main px-[150px] bg-[#fff3e3] w-full h-screen">
               <div className="flex-grow w-full h-full">
                    <div className='max-w-screen-xl mx-auto px-4 py-8'>
                         <div className='flex flex-wrap justify-start gap-5 div text-justify  text-[#edd142] py-10'>
                         {postData?.map((e1, index) => <PostAnimated imageSrc={e1.img} title={e1.title} createdBy={e1.title}  key={index} />)}
                    </div>
                    </div>
               </div>
               {/* <div className="flex justify-center items-center h-screen">
                    <PostAnimated
                         imageSrc="https://via.placeholder.com/300"
                         title="Sample Post"
                         createdBy="John Doe"
                    />
               </div> */}
          </div>
     )
}

export default GetPosts