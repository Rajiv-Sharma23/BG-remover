// // import image123 from '../assets/123.jpg';

// const Hero = () => {
//   return (
//     <div className="flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20">
//       {/* left */}
//       <div>
//         <h1 className="text-4xl xl:text-5xl 2xl:w-6xl to-neutral-700 leading-tight font-bold">
//           Remove the <br className="max-md:hidden"/> <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent ">Background</span> from
//            <br className="max-md:hidden"/>
//             images for free
//         </h1>
//         <p className="my-6 text-[15px] text-gray-500">
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident,
//           est.br <br className="max-md:hidden"/>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit.
//         </p>
//         <div className="">
//           <input type="file" className="file" id="upload1" hidden />
//           <label htmlFor="upload1" className="bg-gradient-to-r from-violet-600 to-fuchsia-500 inline-flex px-8 p-3 rounded-3xl text-white m-auto hover:scale-105 transition-all duration-700  gap-3 cursor-pointer">
//             <p > ➕ Upload your image</p>
//           </label>
//         </div>
//       </div>
//       {/* Right */}
//       <div className="w-full max-w-md flex items-center justify-center">
//         <img src= "https://js.pngtree.com/astro_images/bg-remover/ai-background-remover.png" alt="image"  />
//         {/* <img src={image123} alt="image" /> */}
//       </div>
//     </div>
//   );
// };

// export default Hero;



// import image123 from '../assets/123.jpg'; // Uncomment agar local image use karna hai
import { motion as Motion } from "motion/react"; // Import Motion for animations

const  Hero = () => {
  return (
    <Motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 sm:mt-2 lg:mt-10  gap-8 "
    >
      {/* Left Section */}
      <Motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-lg"
      >
        <h1 className="text-4xl xl:text-5xl 2xl:text-6xl leading-tight font-extrabold text-gray-900">
          Remove the <br className="max-md:hidden" />
          <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
            Background
          </span>{" "}
          from <br className="max-md:hidden" />
          images for free
        </h1>
        <p className="my-6 text-[16px] text-gray-700 font-medium">
          Effortlessly remove backgrounds with our AI-powered tool. <br className="max-md:hidden" />
          Perfect for creators, designers, and anyone in between!
        </p>
        <div className="flex justify-center md:justify-start">
          <input type="file" className="file" id="upload1" hidden />
          <Motion.label
            htmlFor="upload1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-r from-violet-600 to-fuchsia-500 inline-flex px-8 py-3 rounded-full text-white hover:shadow-lg hover:opacity-90 transition-all duration-300 gap-3 cursor-pointer"
          >
            <span className="font-semibold">➕ Upload your image</span>
          </Motion.label>
        </div>
      </Motion.div>

      {/* Right Section */}
      <Motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full max-w-md flex items-center justify-center"
      >
        <img
          src="https://js.pngtree.com/astro_images/bg-remover/ai-background-remover.png"
          alt="Background Remover"
          className="w-full h-auto rounded-lg shadow-xl hover:scale-105 transition-transform duration-500"
        />
        {/* <img src={image123} alt="image" className="w-full h-auto rounded-lg shadow-xl" /> */}
      </Motion.div>
    </Motion.div>
  );
};

export default Hero;