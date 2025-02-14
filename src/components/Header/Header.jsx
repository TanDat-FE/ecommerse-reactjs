import BoxIcon from "./BoxIcon/BoxIcon";
import Menu from "./Menu/Menu";
import Logo from "@icons/images/Logo-retina.png";
import styles from "./styles.module.scss";
import { icons, dataMenu } from "./constant.jsx";
import { TfiReload } from "react-icons/tfi";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import useScrollHeadling from "@/hooks/useScrollHeadling";
import { useContext, useEffect, useState } from "react";
import classNames from "classnames";
import { SideBarContext } from "@/contexts/SideBarProvider";

function MyHeader() {
  const {
    containerBoxIcon,
    containerMenu,
    containerHearder,
    containerBox,
    container,
    fixedHeader,
    topHeader,
  } = styles;

  const { scrollPosition } = useScrollHeadling();
  const [fixedPosition, setFixedPosition] = useState(false);

  const { isOpen, setIsOpen, setType } = useContext(SideBarContext);
  // console.log(isOpen);

  const handleOpenSideBar = (type) => {
    setIsOpen(true);
    setType(type);
  };

  useEffect(() => {
    setFixedPosition(scrollPosition >= 80);
  }, [scrollPosition]);

  return (
    <div
      className={classNames(container, topHeader, {
        [fixedHeader]: fixedPosition,
      })}
    >
      <div className={containerHearder}>
        <div className={containerBox}>
          <div className={containerBoxIcon}>
            {icons.map((item) => {
              return <BoxIcon type={item.type} href={item.href} />;
            })}
          </div>
          <div className={containerMenu}>
            {dataMenu.slice(0, 3).map((item) => {
              return <Menu content={item.content} />;
            })}
          </div>
        </div>
        <div>
          <img
            src={Logo}
            style={{
              width: "153px",
              height: "53px",
            }}
            alt="Logo"
          />
        </div>
        <div className={containerBox}>
          <div className={containerMenu}>
            {dataMenu.slice(3, 6).map((item) => {
              return <Menu content={item.content} setIsOpen={setIsOpen} />;
            })}
          </div>
          <div className={containerBoxIcon}>
            <TfiReload
              style={{ width: "20px", height: "20px" }}
              onClick={() => handleOpenSideBar("compare")}
            />
            <IoIosHeartEmpty
              style={{ width: "20px", height: "20px" }}
              onClick={() => handleOpenSideBar("wishlist")}
            />
            <IoCartOutline
              style={{ width: "20px", height: "20px" }}
              onClick={() => handleOpenSideBar("cart")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default MyHeader;
