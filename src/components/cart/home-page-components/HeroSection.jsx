import React, { useState, useEffect } from 'react';
import { ReactTyped } from 'react-typed';
import { useTranslation } from 'react-i18next';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700); // Simulate loading for 1 second
    return () => clearTimeout(timer);
  }, []);

  // Animation variants
  const slideInFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <SkeletonTheme color="#e0e0e0" highlightColor="#f5f5f5">
      <div>
        {loading ? (
          <>
            {/* Static Skeleton Loader */}
            <div className="font-bold ml-[5px] text-4xl text-[#FFB600]">
              <Skeleton height={40} width={300} borderRadius={20} />
            </div>
            <div className="mt-[20px] ml-[5px] w-[510px]">
              <Skeleton count={2} borderRadius={20} />
            </div>
          </>
        ) : (
          <>
            {/* Slide-in animation for title */}
            <motion.h1
              className="font-bold ml-[5px] text-4xl text-[#FFB600]"
              variants={slideInFromLeft}
              initial="hidden"
              animate="visible"
            >
              <ReactTyped strings={["Welcome To TrovKa"]} typeSpeed={100} loop />
            </motion.h1>
            <motion.div
              className="mt-[20px] ml-[5px] w-[510px]"
              variants={slideInFromLeft}
              initial="hidden"
              animate="visible"
            >
              <p>{t('Welcome')}</p>
            </motion.div>
          </>
        )}
      </div>
    </SkeletonTheme>
  );
};

export default HeroSection;
