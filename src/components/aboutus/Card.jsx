import React from "react";
import { useTranslation } from "react-i18next";

const Card = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col px-5  ">
      {/* animation 1 */}
      <div className="mt-[30px] self-start max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[66%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
              <div className="text-2xl font-bold text-center text-Primary max-md:max-w-full dark:text-Secondary">
                {t("Goal")}
              </div>
              <div className="mt-9 mx-[100px] text-base text-gray-900 max-md:max-w-full dark:text-gray-300">
                {t("Goal_Content")}
              </div>
            </div>
          </div>
          <div className="flex mx-[100px] flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
            <lottie-player
              src="https://lottie.host/b162f405-2819-4c84-9127-a13cc62a4878/nNQZuisCYR.json"
              background="##fff"
              speed="1"
              loop
              autoplay
              direction="1"
              mode="normal"
            ></lottie-player>
          </div>
        </div>
      </div>
      {/* animation 2 */}
      <div className="mt-[40px] self-start max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex ml-[100px] flex-col ml-5 w-[34%] max-md:ml-0 max-md:w-full ">
            <lottie-player
              src="https://lottie.host/acc7e1f3-1d16-4219-9380-cdc7d847e7c7/HUCKgu0ZOV.json"
              background="##FFFFFF"
              speed="1"
              loop
              autoplay
              direction="1"
              mode="normal"
            ></lottie-player>
          </div>
          <div className="flex flex-col w-[66%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
              <div className="text-2xl font-bold text-center text-Primary max-md:max-w-full dark:text-Secondary">
                {t("Mission")}
              </div>
              <div className="mt-9 mx-[100px] text-base text-gray-900 max-md:max-w-full dark:text-gray-300">
                {t("Mission_Content")}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* animation 1 */}
      <div className="mt-[40px] self-start max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[66%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
              <div className="text-2xl font-bold text-center text-Primary max-md:max-w-full dark:text-Secondary">
                {t("Vision")}
              </div>
              <div className="mt-9 mx-[100px] text-base text-gray-900 max-md:max-w-full dark:text-gray-300">
                {t("Vision_Content")}
              </div>
            </div>
          </div>
          <div className="flex mx-[100px] flex-col ml-5 w-[34%] max-md:ml-0 max-md:w-full">
            <dotlottie-player
              src="https://lottie.host/4addf017-a16f-4da2-b0f9-733077a73b4a/dJvPs4a4sa.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></dotlottie-player>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
