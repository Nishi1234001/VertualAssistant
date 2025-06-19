import React, { useContext, useState } from "react";
import { userDataContext } from "../context/userContext";
import { IoArrowBackSharp } from "react-icons/io5";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Customize2() {
  const { userData, backendImage, selectedImage, serverUrl, setUserData } =
    useContext(userDataContext);
  const [assistantName, setAssistantName] = useState(
    userData?.AssistantName || ""
  );
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleUpdateAssistant = async () => {
    setLoading(true)
    try {
      let formData = new FormData();
      formData.append("assistantName", assistantName);
      if (backendImage) {
        formData.append("assistantImage", backendImage);
      } else {
        formData.append("imageUrl", selectedImage);
      }
      const result = await axios.post(
        `${serverUrl}/api/user/update`,
        formData,
        { withCredentials: true }
      );
      console.log(result.data);
      setUserData(result.data);
      setLoading(false)
      navigate("/")
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  };

  return (
    <div className="w-full h-[100vh] bg-gradient-to-t from-[black] to-[#030353] flex justify-center items-center flex-col p-[20px]">
      <IoArrowBackSharp
        className="absolute top-[30px] left-[30px] text-white w-[25px] h-[25px] cursor-pointer "
        onClick={() => navigate("/customize")}
      />
      <h1 className="text-white text-[30px] mb-[30px] text-center items-center flex-wrap gap-[150px] ">
        Enter your<span className="text-blue-200">Assistant Name</span>
      </h1>
      <input
        type="text"
        placeholder="eg.shifra"
        className="w-full max-w-[600px] h-[60px] outline- none  border-2 border-white bg-transparent text-white placeholder-grey-300 px-[20px] py-[10px] rounded-full text-[18px]"
        required
        onChange={(e) => setAssistantName(e.target.value)}
        value={assistantName}
      />
      {assistantName && (
        <button
          className=" min-w-[300px] h-[60px] mt-[30px] text-black font-semibold bg-white cursor-pointer rounded-full text-[19px] "
          disabled={loading}
          onClick={() => {
            handleUpdateAssistant();
          }}
        >
          {!loading ? " Finally Create Your Assistant" : "Loading..."}
        </button>
      )}
    </div>
  );
}

export default Customize2;
