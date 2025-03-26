import { useAuth, useClerk, useUser } from "@clerk/clerk-react";
import axios from "axios";
import { toast } from "react-toastify";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext();

const AppContextProvider = (props) => {
  const { userId } = useAuth();
  const [credit, setCredit] = useState(false);
  const [image, setImage] = useState(false);
  const [resultImage, setResultImage] = useState(false);

  console.log("Fetching credits for clerkId:", userId);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();

  const { getToken } = useAuth();
  const { isSignedIn } = useUser(); 
  const { openSignIn } = useClerk();

  const loadCreditsData = async () => {
    try {
      const token = await getToken();
      const { data } = await axios.get(backendUrl + "/api/user/credits",{ clerkId: userId },
         {
        headers: { token },
        
      });
      if (data.success) {
        setCredit(data.credits);
        console.log(data.credits); 
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const removeBg = async (image) => {
    try {   
      if (!isSignedIn) {
        return openSignIn();
      }
      setImage(image);
      setResultImage(false);
      navigate("/result");

      const token = await getToken();

      const formData = new FormData();
      image && formData.append("image", image);

      const {data} = await axios.post(
        backendUrl + "/api/image/remove-bg",
        formData,
        {
          headers: { token },
        }
      )
      if(data.success) {
        console.log("Received resultImage:", data.resultImage);
        setResultImage(data.resultImage);
        data.creditBalance && setCredit(data.creditBalance);
      }else{
        toast.error(data.message);
        data.creditBalance && setCredit(data.creditBalance);
       
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };
  const value = {
    credit,
    setCredit,
    loadCreditsData,
    backendUrl,
    image,
    setImage,
    removeBg,
    resultImage,
    setResultImage
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
