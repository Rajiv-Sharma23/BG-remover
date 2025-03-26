
// Button component ko shadcn/ui se import karna na bhoolo
import { Button } from "@/components/ui/button";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { useContext, useEffect } from "react";
import { AppContext } from "@/context/AppContext";
import { BsCoin } from "react-icons/bs";


import { Link } from "react-router-dom";
import { motion as Motion } from "motion/react"; // Import Motion component


const Navbar = () => {
     
  const {openSignIn} = useClerk();
  const {isSignedIn} = useUser();
  const{credit,loadCreditsData} = useContext( AppContext);
  

  useEffect(()=>{
    if(isSignedIn) {
      loadCreditsData();
    }
  },[isSignedIn, loadCreditsData])
  return (
    <Motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-3 px-4 lg:px-44 sticky top-0 bg-gradient-to-r from-indigo-100 via-pink-100 to-red-100 border-b-2 border-purple-500 z-30 shadow-md"
    >
      <div className="flex items-center justify-between py-3">
        {/* Logo */}
        <Link to={"/"}>
          <Motion.h1
            whileHover={{ scale: 1.05 }}
            className="w-32 sm:w-44 font-extrabold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"
            >
            BG Remover
            
          </Motion.h1>
        </Link>
        {/* User Profile */}
        {isSignedIn ? 
        
        <div className="flex gap-6 " > 
        <span className="flex gap-1 ">
        <BsCoin className="text-3xl mt-1 antialiased text-green-500 mr-2"/>
        <Button className=" bg-pink-200 text-md">
          <p>Credits : {credit}</p>
        </Button>
        
        </span>
        

        <UserButton />
        </div>
        :
       
        <Button onClick={() => openSignIn({})}
          asChild
          className="w-32 sm:w-44 font-semibold bg-gradient-to-r from-purple-600 to-pink-600 text-white border-none hover:opacity-90 rounded-full"
        >
          <Motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            >
            Get Started ✔
          </Motion.button>
        </Button>
        }


        
       
        
      </div>
    </Motion.div>
  );
};

export default Navbar;



// import { Link } from "react-router-dom"

// const Navbar = () => {
//   return (
//     <div className="py-3 px-4 lg:px-44 border-b-2 border-purple-500 sticky top-0 bg-white z-30">
//       <div className="flex items-center justify-between  py-3">
//       <Link to={"/"}>
//         <h1 className='w-32 sm:w-44 font-bold text-lg text-center'>BG Remover</h1>
//        </Link>

//         <button className='w-32 sm:w-44 font-semibold text-purple-500'>
//             Get Started ✔
//         </button>
//       </div>

//     </div>
//   )
// }

// export default Navbar