import { useContext } from "react";

import { AppContext } from "@/context/AppContext";
import { useNavigate } from "react-router-dom";

const Result = () => {

  const {resultImage,image} = useContext(AppContext);
  const navigate = useNavigate();                         
  return (
    <div className="mx-4 lg:mx-44 my-10 ">
      <div className=" bg-white rounded-lg px-8 py-6 drop-shadow-md">
        {/* image container */}
        <div className="flex flex-col sm:grid grid-cols-2 gap-8  p-2">
          {/* left-side */}
          <div>
            <p className="font-semibold text-gray-600 mb-2">Original</p>
            <img
              className="w-full rounded-md border-gray-300 border"
              src={image ? URL.createObjectURL(image) : ""}
            />
          </div>
          {/* right-side */}
          <div className="flex flex-col ">
            <p className="font-semibold text-gray-600 mb-2">
              Background removed
            </p>
            <div className="rounded-md border border-gray-300 h-full  relative bg-layer overflow-hidden">
              {/* <img 
                src="https://js.pngtree.com/astro_images/bg-remover/ai-background-remover.png"
                alt="image"
              /> */}
              <img className="w-full h-full" src={resultImage ? resultImage:" "} alt="result image" />
              <div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2">
               {!resultImage && image &&  <div className="border-4 border-violet-600 rounded-full w-14 h-14 border-t-transparent animate-spin"></div>}
              </div>
            </div>
          </div>
        </div>
        {/* button */}
        {resultImage && <div className="flex justify-center sm:justify-end gap-4 flex-wrap mt-6">
          <button className="bg-white border border-violet-600 inline-flex px-3 p-2 rounded-3xl text-violet-600   gap-3 cursor-pointer" onClick={() => navigate("/")}>
            Dusra Try kar
          </button>

          <a
            className="
      bg-gradient-to-r from-violet-600 to-fuchsia-500 inline-flex px-3 p-2 rounded-3xl text-white cursor-pointer"
            href={resultImage} download
          >
            Download image
          </a>
        </div>}
      </div>
    </div>
  );
};

export default Result;
