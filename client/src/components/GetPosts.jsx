import React from 'react'
import PostAnimated from './PostAnimated '

const GetPosts = () => {
     return (
          <div className="main px-[150px] bg-[#fff3e3] w-full h-screen">
               <div className="flex-grow w-full h-full">
                    <div className='max-w-screen-xl mx-auto px-4 py-8'>
                         {/* <div className='flex flex-wrap justify-start gap-5 div text-justify  text-[#f5ecc0] py-10'>
                         {noteData?.map((e1, index) => <NoteCard {...e1} key={index} />)}
                    </div> */}
                    </div>

               </div>
               <div className="flex justify-center items-center h-screen">
                    <PostAnimated
                         imageSrc="https://via.placeholder.com/300"
                         title="Sample Post"
                         createdBy="John Doe"
                    />
               </div>
          </div>
     )
}

export default GetPosts