import BoxIcon from "./BoxIcon/BoxIcon";
import Menu from "./Menu/Menu";
import Logo from "@icons/images/Logo-retina.png";
import styles from "./styles.module.scss";
import { icons, dataMenu } from "./constant.jsx";
import reLoadIcon from "@icons/svgs/reloadIcon.svg";
import heartIcon from "@icons/svgs/heartIcon.svg";
import cartIcon from "@icons/svgs/cartIcon.svg";

function MyHeader() {
  const { containerBoxIcon, containerMenu, containerHearder, containerBox } =
    styles;

  return (
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
            return <Menu content={item.content} />;
          })}
        </div>
        <div className={containerBoxIcon}>
          <img width={26} height={26} src={reLoadIcon} alt="reloadIcon" />
          <img width={26} height={26} src={heartIcon} alt="heartIcon" />
          <img width={26} height={26} src={cartIcon} alt="cartIcon" />
        </div>
      </div>
    </div>
  );
}
export default MyHeader;
