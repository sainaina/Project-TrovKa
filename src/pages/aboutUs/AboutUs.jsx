import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Card from "../../components/aboutus/Card";
import { Team } from "../../components/aboutus/Team";
import { Mentor } from "../../components/aboutus/Mentor";
import { motion } from "framer-motion";
import { Metadata } from "../../lib/Metadata";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();
  useEffect(() => {
    // Simulate a longer loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate loading for 1.5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mx-4 lg:my-[20px] lg:mx-30">
      <Metadata
        title="AboutUs | Troka"
        description="All about me "
        author="SainaInaIna"
        keywords="services, trovka, aboutus"
        thumbnail="https://i.ibb.co/s6D2gFC/trovka-icon.png"
      />
      {loading ? (
        <>
          <Skeleton
            width={64}
            height={64}
            className="ml-[585px] mb-[20px] mt-[30px]"
            borderRadius={20} // Increased border radius
          />
          <Skeleton
            height={40}
            width={200}
            className="mb-4 mx-auto"
            borderRadius={20} // Increased border radius
          />
          <Skeleton
            height={20}
            width={300}
            className="text-center mx-auto mb-4"
            borderRadius={20} // Increased border radius
          />
          <Skeleton
            height={200}
            width="100%"
            className="my-6"
            borderRadius={20} // Increased border radius
          />
          <Skeleton
            height={30}
            width="100%"
            className="bg-[#022278] text-white rounded-md mb-6 mx-auto"
            borderRadius={20} // Increased border radius
          />
          <Skeleton
            height={200}
            width="100%"
            className="my-6"
            borderRadius={20} // Increased border radius
          />
          <Skeleton
            height={30}
            width="100%"
            className="bg-[#022278] text-white rounded-md mb-6 mx-auto"
            borderRadius={20} // Increased border radius
          />
        </>
      ) : (
        <>
          <motion.img
            src="./public/image/logo/Trovka-icon.png"
            alt="Logo"
            className="ml-[590px] mb-[22px] w-16 h-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          />
          <motion.h1
            className="flex justify-center mb-4 text-4xl font-bold text-[#98caf9] text-center lg:text-left"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {t("About_Trovka")}
          </motion.h1>
          <div className="px-4 py-[6px] w-full max-w-3xl mx-auto ">
            <motion.p
              className="text-center mt-[5px] lg:text-left text-gray-900 dark:text-gray-300"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {t("About_Des")}
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-[45%] mt-[33px] ml-[350px] mb-[80px] ">
              <dotlottie-player
                src="https://lottie.host/4664f3d5-bf53-4a77-a45c-b59b74b7f5f1/8eZIpWEnNY.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></dotlottie-player>
            </div>
            <div className="flex justify-center my-[40px] text-4xl font-bold text-[#98caf9] text-center lg:text-left ">
            {t("Goal_Mission_Vision")}
          </div>
            <Card />
          </motion.div>
          <div className="mt-[90px]">
            <motion.div
              className="bg-[#022278] pt-[3px] w-full h-[30px] text-white rounded-md flex justify-center"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {t("Our_Mentor")}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Mentor />
            </motion.div>
          </div>
          <motion.div
            className="bg-[#022278] pt-[3px] w-full h-[30px] mb-[100px] text-white rounded-md flex justify-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t("Our_Team")}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Team />
          </motion.div>
        </>
      )}
    </div>
  );
};

export default AboutUs;
