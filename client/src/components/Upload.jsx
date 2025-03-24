


import React, { useContext } from "react";
import { LuUpload } from "react-icons/lu"; // Updated icon from react-icons
import { motion as Motion } from "motion/react"; // Added for animations
import { AppContext } from "@/context/AppContext";

const Upload = () => {

   const {removeBg} = useContext(AppContext);
  return (
    <Motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="py-14 bg-gradient-to-br from-indigo-100 via-pink-100 to-yellow-100 rounded-2xl mx-4 lg:mx-44 shadow-md"
    >
      {/* Heading */}
      <Motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center text-2xl md:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-gray-900 to-purple-600 bg-clip-text text-transparent"
      >
        Jaadu Dekhna Hai? Try Kar!
      </Motion.h1>

      {/* Upload Button */}
      <div className="flex items-center justify-center mt-8">
        <input type="file" className="file" id="upload1" hidden accept="image/*" 
        onChange={(e)=>  removeBg(e.target.files[0])}
        />
        <Motion.label
          htmlFor="upload1"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-r from-violet-600 to-fuchsia-500 inline-flex items-center px-6 py-3 rounded-full text-white hover:shadow-lg hover:opacity-90 transition-all duration-300 gap-3 cursor-pointer"
          >
          <LuUpload  className="text-xl" /> {/* Updated icon */}
          <span className="font-semibold">Upload Your Image</span>
        </Motion.label>
      </div>
    </Motion.div>
  );
};

export default Upload;




// import React from 'react'

// const Upload = () => {
//   return (
//     <div className='py-14 '>
//         <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent">Jaadu Dekhna hai, try kar</h1>

//         <div className="flex items-center justify-center mt-8 ">
//           <input type="file" className="file" id="upload1" hidden />
//           <label htmlFor="upload1" className="bg-gradient-to-r from-violet-600 to-fuchsia-500 inline-flex px-3 p-2 rounded-3xl text-white m-auto hover:scale-105 transition-all duration-700  gap-3 cursor-pointer">
//             <p > ➕ Upload your image</p>
//           </label>
//         </div>
//     </div>
//   )
// }

// export default Upload