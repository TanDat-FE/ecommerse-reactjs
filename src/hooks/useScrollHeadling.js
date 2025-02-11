import { useEffect, useRef, useState } from "react";

const useScrollHeadling = () => {
  const [scrollDriction, setScrollDriction] = useState(null); //up or down

  const previousScrollDriction = useRef(0); //lưu vị trí trước đó của scroll để biết đang up hay down
  const [scrollPosition, setScrollPosition] = useState(0);

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

  useEffect(() => {
    window.addEventListener("scroll", scrollTracking);

    return () => window.removeEventListener("scroll", scrollTracking);
  }, [scrollDriction]);

  return {
    scrollPosition,
    scrollDriction,
  };
};

export default useScrollHeadling;
