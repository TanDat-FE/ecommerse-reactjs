import { useState, useRef, useEffect } from "react";
const useTranslateXImage = () => {
  const [scrollDriction, setScrollDriction] = useState(null); //up or down

  const previousScrollDriction = useRef(0); //lưu vị trí trước đó của scroll để biết đang up hay down
  const [scrollPosition, setScrollPosition] = useState(0);
  const [translateXPosition, setTranslateXPosition] = useState(80);

  const scrollTracking = () => {
    // lay ra vị trí hiện tại của Scroll đó
    const currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition > previousScrollDriction.current) {
      setScrollDriction("down");
    } else if (currentScrollPosition < previousScrollDriction.current) {
      setScrollDriction("up");
    }

    previousScrollDriction.current =
      currentScrollPosition <= 0 ? 0 : currentScrollPosition;

    setScrollPosition(currentScrollPosition);
  };

  const handleTranslateX = () => {
    if (scrollDriction === "down" && scrollPosition >= 1400) {
      setTranslateXPosition(
        translateXPosition <= 0 ? 0 : translateXPosition - 1
      );
    } else if (scrollDriction === "up") {
      setTranslateXPosition(
        translateXPosition >= 80 ? 80 : translateXPosition + 1
      );
    }
  };

  useEffect(() => {
    handleTranslateX();
  }, [scrollPosition]);

  useEffect(() => {
    window.addEventListener("scroll", scrollTracking);

    return () => window.removeEventListener("scroll", scrollTracking);
  }, [scrollDriction]);

  console.log(scrollPosition);

  return {
    translateXPosition,
  };
};

export default useTranslateXImage;
