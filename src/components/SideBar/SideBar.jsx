import { useContext } from "react";
import styles from "./styles.module.scss";
import { SideBarContext } from "@/contexts/SideBarProvider";
import classNames from "classnames";
import { IoCloseCircleOutline } from "react-icons/io5";

function SideBar() {
  const { container, overlay, sideBar, sliderSideBar, boxIcon } = styles;
  const { isOpen, setIsOpen } = useContext(SideBarContext);

  const handleToggle = () => {
    setIsOpen(!isOpen);
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
        Sidebar
      </div>
    </div>
  );
}

export default SideBar;
