import React from "react";
import { useNavigate } from "react-router-dom";

export const VerifyEmail = () => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate('/verify-code');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-[450px] h-[450px] bg-white border-4 border-blue-400 rounded-lg shadow-md">
        <div className="flex flex-col items-center mt-12 mb-8">
          <img className="w-[80px]" src=".//src/assets/image/image.png" alt="Verification" />
        </div>
        <div>
          <p className="text-Primary flex justify-center pb-0 text-lg">Congratulations</p>
          <p className="text-Primary flex justify-center pt-0 text-lg">You successfully registered!</p>
        </div>
        <div className="mt-5 text-center">
          <p>A confirmation email has been sent to</p>
          <p>trovka@gmail.com</p>
          <p>Please verify your email to continue with us!</p>
        </div>
        <div className="flex flex-col items-center mt-10">
          <button
            className="w-[250px] bg-Secondary hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded-lg"
            onClick={handleNextClick}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
