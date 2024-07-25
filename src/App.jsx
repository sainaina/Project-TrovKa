import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import InitialAnimation from './components/animation/InitialAnimation';
import { Metadata } from '../../lib/Metadata'

function App() {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  useEffect(() => {
    const delay = 1000; 
    const timer = setTimeout(() => {
      setIsAnimationComplete(true);
    }, 3000 + delay); 

    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      <Metadata
        title="Home | TrovKa"
        description="Welcome to Service-TrovKa"
        author="SainaIna"
        keywords="services, trovka, home"
        thumbnail="https://k-quicksight.istad.co/opengraph-image.jpg?d3bb2a9115260a5a"
      />
      {!isAnimationComplete && <InitialAnimation />}
      <div className={`${isAnimationComplete ? "block" : "hidden"}`}>
      </div>

    </>
  );
}


export default App;
