import { AppContext } from "@/context/AppContext";
import { motion as Motion } from "motion/react"; // Import Motion for animations
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const { removeBg, credit } = useContext(AppContext);
  const navigate = useNavigate();

  // Handle file upload and credit check
  const handleImageUpload = (file) => {
    if (credit === 0) {
      navigate("/buy"); // Navigate to /buy if credits are 0
    } else {
      removeBg(file); // Proceed with background removal if credits exist
    }
  };

  return (
    <Motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 sm:mt-2 lg:mt-10 gap-8"
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
          <input
            type="file"
            className="file"
            id="upload1"
            accept="image/*"
            hidden
            onChange={(e) => handleImageUpload(e.target.files[0])}
          />
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
      </Motion.div>
    </Motion.div>
  );
};

export default Hero;