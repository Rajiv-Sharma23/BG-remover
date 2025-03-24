// // import React from "react";

// // const Testimonials = () => {
// //   return (
// //     <div>
// //       <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent py-5 ">
// //         Customer Testimonials
// //       </h1>
// //     </div>
// //   );
// // };

// // export default Testimonials;


// // Testimonials.jsx
// 'use client'; // Mark this component as a client component

// import React, { useState } from 'react';

// const testimonialsData = [
//   {
//     id: 1,
//     quote: "This product exceeded my expectations! I'm incredibly happy with the results.",
//     author: "Jane Doe",
//     company: "ABC Corp",
//     image: "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80", // Replace with actual image URL
//   },
//   {
//     id: 2,
//     quote: "The service was outstanding. I highly recommend this company to anyone.",
//     author: "John Smith",
//     company: "XYZ Industries",
//     image: "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80", // Replace with actual image URL
//   },
//   {
//       id:3,
//       quote:"Incredible value and support! A truly wonderful experience.",
//       author:"Alice Johnson",
//       company:"Innovate Solutions",
//       image:"https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
//   },
//   {
//     id:4,
//     quote:"I've never been more satisfied. Their attention to detail is remarkable.",
//     author:"Bob Williams",
//     company: "Global Tech",
//     image: "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
//   }
// ];

// const Testimonials = () => {
//   const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentTestimonialIndex((prevIndex) =>
//       (prevIndex + 1) % testimonialsData.length
//     );
//   };

//   const handlePrev = () => {
//     setCurrentTestimonialIndex((prevIndex) =>
//       (prevIndex - 1 + testimonialsData.length) % testimonialsData.length
//     );
//   };

//   const currentTestimonial = testimonialsData[currentTestimonialIndex];

//   return (
//     <div className="testimonials-container p-8 bg-gray-100 rounded-lg ">
//       <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent py-5 ">What Our Clients Say</h1>
//       <div className="testimonial-card flex flex-col items-center text-center bg-purple-200 p-8 rounded-2xl shadow-md">
//         <img
//           src={currentTestimonial.image}
//           alt={currentTestimonial.author}
//           className="rounded-full w-32 h-32 mb-4 object-cover shadow-md"
//         />
//         <blockquote className="text-lg italic mb-4">
//           "{currentTestimonial.quote}"
//         </blockquote>
//         <p className="font-semibold">{currentTestimonial.author}</p>
//         <p className="text-gray-600">{currentTestimonial.company}</p>

//         <div className="mt-6 flex justify-center space-x-4 gap-4">
//           <button
//             onClick={handlePrev}
//             className="bg-gradient-to-r from-violet-600 to-fuchsia-500 inline-flex px-4 p-2 rounded-3xl text-white m-auto hover:scale-105 transition-all duration-700  gap-3 cursor-pointer "
//           >
//             Previous
//           </button>
//           <button
//             onClick={handleNext}
//             className="bg-gradient-to-r from-violet-600 to-fuchsia-500 inline-flex px-4 p-2  rounded-3xl text-white m-auto hover:scale-105 transition-all duration-700  gap-3 cursor-pointer"
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;



"use client"; // Mark this component as a client component

import React, { useState } from "react";
import { motion as Motion } from "motion/react"; // Added for animations

const testimonialsData = [
  {
    id: 1,
    quote: "This product exceeded my expectations! I'm incredibly happy with the results.",
    author: "Jane Doe",
    company: "ABC Corp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=76&q=80",
  },
  {
    id: 2,
    quote: "The service was outstanding. I highly recommend this company to anyone.",
    author: "John Smith",
    company: "XYZ Industries",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=76&q=80",
  },
  {
    id: 3,
    quote: "Incredible value and support! A truly wonderful experience.",
    author: "Alice Johnson",
    company: "Innovate Solutions",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=76&q=80",
  },
  {
    id: 4,
    quote: "I've never been more satisfied. Their attention to detail is remarkable.",
    author: "Bob Williams",
    company: "Global Tech",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=76&q=80",
  },
];

const Testimonials = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const handleNext = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      (prevIndex + 1) % testimonialsData.length
    );
  };

  const handlePrev = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      (prevIndex - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  const currentTestimonial = testimonialsData[currentTestimonialIndex];

  return (
    <Motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="p-8 "
    >
      {/* Heading */}
      <Motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center text-2xl md:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-gray-900 to-purple-600 bg-clip-text text-transparent py-5"
      >
        What Our Clients Say
      </Motion.h1>

      {/* Testimonial Card */}
      <Motion.div
        key={currentTestimonial.id} // Key for re-animation on change
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center bg-gradient-to-br from-lime-200 to-blue-200 p-8 rounded-2xl shadow-lg max-w-2xl mx-auto"
      >
        <Motion.img
          src={currentTestimonial.image}
          alt={currentTestimonial.author}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-full w-24 h-24 mb-4 object-cover border-4 border-white shadow-md hover:scale-110 transition-transform duration-300"
        />
        <blockquote className="text-lg italic text-gray-800 mb-4">
          "{currentTestimonial.quote}"
        </blockquote>
        <p className="font-semibold text-purple-900">{currentTestimonial.author}</p>
        <p className="text-gray-600">{currentTestimonial.company}</p>

        {/* Navigation Buttons */}
        <div className="mt-6 flex justify-center space-x-4 gap-4">
          <Motion.button
            onClick={handlePrev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-r from-violet-600 to-fuchsia-500 px-4 py-2 rounded-full text-white hover:shadow-lg hover:opacity-90 transition-all duration-300"
          >
            Previous
          </Motion.button>
          <Motion.button
            onClick={handleNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-r from-violet-600 to-fuchsia-500 px-4 py-2 rounded-full text-white hover:shadow-lg hover:opacity-90 transition-all duration-300"
          >
            Next
          </Motion.button>
        </div>
      </Motion.div>
    </Motion.div>
  );
};

export default Testimonials;