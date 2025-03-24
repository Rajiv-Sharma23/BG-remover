// import React from "react";
// import { LuUpload } from "react-icons/lu";

// const Steps = () => {
//   return (
//     <div className="mx-4 lg:mx-44 py-20 xl:py-40">
//       <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent">
//         Steps to remove background from <br /> Images in seconds
//       </h1>

//       <div className="flex items-start flex-wrap  gap-4 mt-10 xl:mt-24 justify-center">
//         <div className="flex items-start gap-4 bg-white  drop-shadow-md p-7 pv-10 rounded-md hover:scale-105 transition-all duration-500">
//           <LuUpload className="text-3xl p-1 mt-1 bg-purple-500  rounded-xl" />
//           <div>
//             <p className="text-xl font-medium">Upload image</p>
//             <p className="text-sm text-gray-500 mt-1">
//               Lorem ipsum dolor sit ame Lorem. <br />
//               Lorem ipsum dolor sit.
//             </p>
//           </div>
//         </div>
//         {/* ------------------------------------------------------------------------------ */}
//         <div className="flex items-start gap-4 bg-white  drop-shadow-md p-7 pv-10 rounded-md hover:scale-105 transition-all duration-500">
//           <LuUpload className="text-3xl p-1 mt-1 bg-purple-500  rounded-xl" />
//           <div>
//             <p className="text-xl font-medium">Upload image</p>
//             <p className="text-sm text-gray-500 mt-1">
//               Lorem ipsum dolor sit ame Lorem. <br />
//               Lorem ipsum dolor sit.
//             </p>
//           </div>
//         </div>
//         {/* ------------------------------------------------------------------------------ */}
//         <div className="flex items-start gap-4 bg-white  drop-shadow-md p-7 pv-10 rounded-md hover:scale-105 transition-all duration-500">
//           <LuUpload className="text-3xl p-1 mt-1 bg-purple-500  rounded-xl" />
//           <div>
//             <p className="text-xl font-medium">Upload image</p>
//             <p className="text-sm text-gray-500 mt-1">
//               Lorem ipsum dolor sit ame Lorem. <br />
//               Lorem ipsum dolor sit.
//             </p>
//           </div>
//         </div>
//         {/* ------------------------------------------------------------------------------ */}
//       </div>
//     </div>
//   );
// };

// export default Steps;



import React from "react";
import { LuUpload } from "react-icons/lu";
import { motion as Motion } from "motion/react"; // Added for animations

const stepsData = [
  {
    title: "Upload Image",
    description:
      "Simply upload your image using our easy drag-and-drop tool.",
    color: "from-violet-500 to-purple-600",
  },
  {
    title: "AI Processing",
    description:
      "Our AI instantly removes the background with precision.",
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Download",
    description:
      "Get your image with a transparent background in seconds.",
    color: "from-pink-500 to-fuchsia-600",
  },
];

const Steps = () => {
  return (
    <Motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="mx-4  "
    >
      {/* Heading */}
      <Motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center text-2xl md:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-gray-900 to-purple-600 bg-clip-text text-transparent"
      >
        Steps to Remove Background <br className="max-md:hidden" /> from Images
        in Seconds
      </Motion.h1>

      {/* Steps Cards */}
      <div className="flex items-start flex-wrap gap-6 mt-10 xl:mt-24 justify-center">
        {stepsData.map((step, index) => (
          <Motion.div
            key={step.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            whileHover={{ scale: 1.05, rotate: 2, transition: { duration: 0.3 } }}
            className={`flex items-start gap-4 bg-gradient-to-br ${step.color} text-white drop-shadow-lg p-7 rounded-xl max-w-xs`}
          >
            <LuUpload className="text-3xl p-1 mt-1 bg-white text-purple-600 rounded-xl" />
            <div>
              <p className="text-xl font-semibold">{step.title}</p>
              <p className="text-sm opacity-80 mt-2">{step.description}</p>
            </div>
          </Motion.div>
        ))}
      </div>
    </Motion.div>
  );
};

export default Steps;