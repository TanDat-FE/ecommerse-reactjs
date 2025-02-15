import HeaderSideBar from "@components/ContentSideBar/Components/HeaderSideBar/HeaderSideBar";
import styles from "./styles.module.scss";
import { IoCartOutline } from "react-icons/io5";
import ItemProduct from "@components/ContentSideBar/Components/ItemProduct/ItemProduct";
import Button from "@components/Button/Button";

function Cart() {
  const { container, boxIcon, total } = styles;
  return (
    <div className={container}>
      <div>
        <HeaderSideBar icon={<IoCartOutline />} content={"cart"} />
        <ItemProduct />
      </div>
      <div className={boxIcon}>
        <div className={total}>
          <span>Subtotal:</span>
          <span>$119.9</span>
        </div>
        <Button content={"view cart"} />
        <Button content={"checkout"} isPrimary={false} />
      </div>
    </div>
  );
}

export default Cart;
