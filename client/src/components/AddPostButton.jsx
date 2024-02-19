import React from 'react';
import { Link } from 'react-router-dom';

const AddPostButton = () => {
     return (
          <Link to="create" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#be6a14] hover:bg-[#be6a14] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
               create a Post
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
               </svg>

          </Link>
     );
};

export default AddPostButton;
