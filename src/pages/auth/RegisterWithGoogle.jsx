import React from "react";

export const RegisterWithGoogle = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-[500px] h-[560px] border border-grey rounded-lg bg-white">
        <div className="h-[250px]">
          <div className="flex justify-center pt-10 pb-5">
            <img className="w-[80px]" src=".//src/assets/image/Trovka icon.png" alt="Trovka Icon" />
          </div>
          <div>
            <p className="text-Primary flex justify-center pt-0 text-md font-bold">
              Choose A Google Account
            </p>
            <p className="text-grey-600 flex justify-center text-sm mt-2 text-[18px]">
              to register to TROVKA
            </p>
          </div>
        </div>

        <div className="h-[250px]">
          <div className="h-[75px] flex pt-3">
            <div className="pl-20 pr-5">
              <a href="#">
                <img className="w-[50px] rounded-full" src=".//src/assets/image/profile.png" alt="Profile" />
              </a>
            </div>
            <div>
              <p className="text-sm font-medium pb-1 text-[18px]">
                <a href="#">Chim Saina</a>
              </p>
              <p className="text-sm font-normal text-[16px]">
                <a href="#">Chimsaina@gmail.com</a>
              </p>
            </div>
          </div>
          <hr className="w-[500px] ml-12" />

          <div className="h-[75px] flex pt-3">
            <div className="pl-20 pr-5">
              <a href="#">
                <img className="w-[50px] h-[50px] rounded-full" src=".//src/assets/image/kitty.jpg" alt="Kitty" />
              </a>
            </div>
            <div>
              <p className="text-sm font-medium pb-1 text-[18px]">
                <a href="#">SainaIna Chim</a>
              </p>
              <p className="text-sm font-normal text-[16px]">
                <a href="#">Chimsaina168@gmail.com</a>
              </p>
            </div>
          </div>
          <hr className="w-[500px] ml-12" />

          <div className="h-[75px] flex pt-3">
            <div className="pl-20 pr-5">
              <a href="#">
                <img className="w-[50px] h-[50px] rounded-full" src=".//src/assets/image/fox.jpg" alt="Fox" />
              </a>
            </div>
            <div>
              <p className="text-sm font-medium pt-4 text-[18px]">
                <a href="#">Use another account</a>
              </p>
            </div>
          </div>
          <hr className="w-[500px] ml-12" />
        </div>
      </div>
    </div>
  );
}

export default RegisterWithGoogle;
