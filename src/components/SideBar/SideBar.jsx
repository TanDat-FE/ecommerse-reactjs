import { useContext } from "react";
import styles from "./styles.module.scss";
import { SideBarContext } from "@/contexts/SideBarProvider";
import classNames from "classnames";
import { IoCloseCircleOutline } from "react-icons/io5";
import Login from "@components/ContentSideBar/Login/Login";
import Compare from "@components/ContentSideBar/Compare/Compare";

function SideBar() {
  const { container, overlay, sideBar, sliderSideBar, boxIcon } = styles;
  const { isOpen, setIsOpen, type } = useContext(SideBarContext);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSideBarContent = () => {
    switch (type) {
      case "login":
        return <Login />;
      case "compare":
        return <Compare />;
      case "wishlist":
        return "wishlist";
      case "cart":
        return "cart";

      default:
        <Login />;
    }
  };

  return (
    <div className={container}>
      <div
        className={classNames({
          [overlay]: isOpen,
        })}
        onClick={handleToggle}
      />
      <div
        className={classNames(sideBar, {
          [sliderSideBar]: isOpen,
        })}
      >
        <IoCloseCircleOutline className={boxIcon} onClick={handleToggle} />
        {handleSideBarContent()}
      </div>
    </div>
  );
}

export default SideBar;
