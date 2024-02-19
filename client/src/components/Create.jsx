import React, { useState } from 'react';

const Create = () => {
     const [title, setTitle] = useState('');
     const [img, setImg] = useState('');
     const [body, setBody] = useState('');

     const handleSubmit = (e) => {
          e.preventDefault();
          // You can perform any action with title and body states here, such as sending them to an API
          console.log('Title:', title);
          console.log('Body:', body);
          // Reset the input fields after submission
          setTitle('');
          setBody('');
     };

     const handleCancel = () => {
          // Reset the input fields if cancel button is clicked
          setTitle('');
          setBody('');
     };

     return (
          <div className="flex justify-center items-center h-full ">
               <div className="bg-orange-200 rounded-lg shadow-lg p-8 w-[100vh] ">
                    <h2 className="text-lg font-bold mb-4">Enter the Title</h2>
                    <input
                         type="text"
                         value={title}
                         onChange={(e) => setTitle(e.target.value)}
                         className="input-field mb-4 w-[90vh] text-[#5d5e59] "
                         placeholder="Title"
                    />
                    <h2 className="text-lg font-bold mb-4">Enter the Image Links</h2>
                    <input
                         type="text"
                         value={img}
                         onChange={(e) => setImg(e.target.value)}
                         className="input-field mb-4 w-[90vh]"
                         placeholder="Link"
                    />
                    <h2 className="text-lg font-bold mb-4">Enter the Body</h2>
                    <textarea
                         value={body}
                         onChange={(e) => setBody(e.target.value)}
                         className="input-field mb-4 w-[90vh] text-[#5d5e59] "
                         placeholder="Body"
                         rows="4"
                    ></textarea>
                    <div className="flex justify-center gap-20">
                         <button onClick={handleSubmit} className="create-button mr-2">
                              Create
                         </button>
                         <button onClick={handleCancel} className="cancel-button">
                              Cancel
                         </button>
                    </div>
               </div>
          </div>
     );
}

export default Create