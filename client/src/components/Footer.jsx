// "use client"; // Mark this component as a client component

// import React from "react";
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Import social media icons

// const Footer = () => {
//   return (
//     <footer className="bg-white drop-shadow-md rounded-2xl p-4  bottom-0 ">
//       <div className="container mx-auto px-4 ">
//         <div className="flex flex-col md:flex-row justify-between items-center">
//           <div className="mb-4 md:mb-0 ">
//             <p className="text-lg font-semibold">
//               &copy; {new Date().getFullYear()} Bg-remover. All rights
//               reserved.
//             </p>
//           </div>
//           <div className="flex gap-4 ">
//             <a
//               href="#"
//               className="hover:text-gray-400 transition-colors duration-300"
//             >
//               <FaFacebook className="text-2xl text-blue-600" />
//             </a>
//             <a
//               href="#"
//               className="hover:text-gray-400 transition-colors duration-300"
//             >
//               <FaTwitter className="text-2xl text-blue-500" />
//             </a>
//             <a
//               href="#"
//               className="hover:text-gray-400 transition-colors duration-300"
//             >
//               <FaInstagram className="text-2xl text-pink-500" />
//             </a>
//             <a
//               href="#"
//               className="hover:text-gray-400 transition-colors duration-300"
//             >
//               <FaLinkedin className="text-2xl text-blue-800" />
//             </a>
//           </div>
//         </div>
//         <div className="mt-4 text-center text-sm">
//           <p>
//             <a
//               href="/privacy"
//               className="hover:text-gray-400 transition-colors duration-300"
//             >
//               Privacy Policy
//             </a>{" "}
//             |{" "}
//             <a
//               href="/terms"
//               className="hover:text-gray-400 transition-colors duration-300"
//             >
//               Terms of Service
//             </a>
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



"use client"; // Mark this component as a client component

import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion as Motion } from "motion/react"; // Import Motion for animations
import { Link } from "react-router-dom"; // Added for navigation links

const Footer = () => {
  return (
    <Motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-gradient-to-r from-indigo-100 via-pink-100 to-red-100 drop-shadow-md rounded-2xl p-6 mt-12"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright Section */}
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-4 md:mb-0"
          >
            <p className="text-lg font-semibold text-gray-800">
              © {new Date().getFullYear()} BG Remover. All rights reserved.
            </p>
          </Motion.div>

          {/* Social Icons */}
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex gap-6"
          >
            <Motion.a
              href="#"
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ duration: 0.3 }}
              className="text-2xl text-blue-600 hover:text-blue-800"
            >
              <FaFacebook />
            </Motion.a>
            <Motion.a
              href="#"
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ duration: 0.3 }}
              className="text-2xl text-blue-500 hover:text-blue-700"
            >
              <FaTwitter />
            </Motion.a>
            <Motion.a
              href="#"
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ duration: 0.3 }}
              className="text-2xl text-pink-500 hover:text-pink-700"
            >
              <FaInstagram />
            </Motion.a>
            <Motion.a
              href="#"
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ duration: 0.3 }}
              className="text-2xl text-blue-800 hover:text-blue-900"
            >
              <FaLinkedin />
            </Motion.a>
          </Motion.div>
        </div>

        {/* Privacy & Terms Links */}
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-4 text-center text-sm"
        >
          <p className="text-gray-700">
            <Link
              to="/privacy"
              className="text-purple-600 hover:text-purple-800 transition-colors duration-300"
            >
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link
              to="/terms"
              className="text-purple-600 hover:text-purple-800 transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </p>
        </Motion.div>
      </div>
    </Motion.footer>
  );
};

export default Footer;
