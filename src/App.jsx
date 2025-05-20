import { useState, useEffect, useRef } from "react";
import { ImageContainer } from "./components/ImageContainer";
import { ProgressBarCard } from "./components/ProgressBarCard";

const App =()=> {

  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [autoAnimationStopped, setAutoAnimationStopped] = useState(false);
  const animationTimerRef = useRef(null);

  const titleCards=[
    {
      title:"Role based access control",
      header:"faUserGear",
      image:"/Image (7).svg"
    },
    {
      title:"Run pipelines in the region of your choice",
      header:"faMapLocationDot",
      image:"/Image (6).svg"
    },
    {
      title:"Compliance that you can trust",
      header:"faShieldHalved",
      image:"/Image (8).svg"
    },
  ]

  const startCircularAnimation = (index) => {
    setIsAnimating(true);
    setActiveCardIndex(index);

    setTimeout(() => {
      setIsAnimating(false);
      if (!autoAnimationStopped) {
        const nextIndex = (index + 1) % titleCards.length;
        animationTimerRef.current = setTimeout(() => {
          startCircularAnimation(nextIndex);
        }, 500);
      }
    }, 2000);
  };

  const handleCardClick = (index) => {
    if (animationTimerRef.current) {
      clearTimeout(animationTimerRef.current);
    }

  const handleCardClick = (index) => {
    setActiveCardIndex(index);
  }
    setAutoAnimationStopped(true);
    if (isAnimating) {
      setTimeout(() => {
        setActiveCardIndex(index);
        setIsAnimating(false);
      }, 500);
    } else {
      setActiveCardIndex(index);
    }
  };

  useEffect(() => {
    startCircularAnimation(0);
    return () => {
      if (animationTimerRef.current) {
        clearTimeout(animationTimerRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="layout">
        <div className="columns">
          <h1>Get enterprise-grade security</h1>
          <p>Regulate and control pipeline accesss across your team. Configure the data plane region as per your need.</p>
          {titleCards.map((titleCard, index) => (
            <ProgressBarCard 
              title={titleCard.title} 
              header={titleCard.header} 
              key={index}
              isActive={index === activeCardIndex}
              isAnimating={isAnimating && index === activeCardIndex}
              onClick={() => handleCardClick(index)}
            />
          ))}
        </div>
        <div className="columns image-side">
          <ImageContainer activeImage={titleCards[activeCardIndex].image} />
        </div>
      </div>
    </>
  );
};

export default App;