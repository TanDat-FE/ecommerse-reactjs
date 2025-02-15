import HeaderSideBar from "@components/ContentSideBar/Components/HeaderSideBar/HeaderSideBar";
import styles from "./styles.module.scss";
import { TfiReload } from "react-icons/tfi";
import ItemProduct from "@components/ContentSideBar/Components/ItemProduct/ItemProduct";
import Button from "@components/Button/Button";

function Compare() {
  const { container, boxIcon } = styles;
  return (
    <div className={container}>
      <div className={boxIcon}>
        <HeaderSideBar icon={<TfiReload />} content="Compare" />
        <ItemProduct />
      </div>
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <Button content={"View Compare"} />
      </div>
    </div>
  );
}

export default Compare;
