import React from 'react';
import { Link } from 'react-router-dom';

const PostAnimated = ({ imageSrc, title, createdBy }) => {
     return (
          <Link >
          <div className="relative overflow-hidden w-64 h-80 rounded-md shadow-md transition-transform duration-300 transform hover:scale-105">
               <img src={imageSrc} alt="Post Cover" className="object-cover w-full h-52 rounded-t-md" />
               <div className="p-4">
                    <h2 className="text-lg font-bold mb-2">{title}</h2>
                    <p className="text-sm text-gray-600">Created by {createdBy}</p>
               </div>
          </div>
          </Link>
     );
};

export default PostAnimated;
