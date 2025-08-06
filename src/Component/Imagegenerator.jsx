import React, { useRef, useState } from 'react';
import image from '../assets/image'

const Imagegenerator = () => {


  const [imageurl,setimageurl]=useState("/");

  const inputref=useRef(null);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold mb-8">
        AI image <span className="text-pink-500">generator</span>
      </h1>

    
      <div className="mb-6">
          <img className="w-[350px] h-[350px]" src={imageurl=="/"?image:imageurl} alt="" />
  
      </div>

      <div className="flex items-center gap-4 bg-[#1c1c1c] p-4 rounded-full w-full max-w-xl">
        <input
          type="text"
          ref={inputref}
         
          placeholder="Write Description"
          className="flex-1 bg-transparent text-white focus:outline-none px-4"
        />
        <button
          onClick={() => alert(`Prompt: ${prompt}`)}
          className="bg-pink-500 hover:bg-pink-600 px-6 py-2 rounded-full font-semibold transition"
        >
          Generate
        </button>
      </div>
    </div>
  );
};

export default Imagegenerator;
