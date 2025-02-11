import { useEffect, useState } from "react";
import useScrollHeadling from "@/hooks/useScrollHeadling";

const useTranslateXImage = () => {
  const [translateXPosition, setTranslateXPosition] = useState(80);

  const { scrollDriction, scrollPosition } = useScrollHeadling();

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

  return {
    translateXPosition,
  };
};

export default useTranslateXImage;
