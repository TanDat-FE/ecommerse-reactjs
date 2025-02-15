import HeaderSideBar from "@components/ContentSideBar/Components/HeaderSideBar/HeaderSideBar";
import styles from "./styles.module.scss";
import { IoIosHeartEmpty } from "react-icons/io";
import ItemProduct from "@components/ContentSideBar/Components/ItemProduct/ItemProduct";
import Button from "@components/Button/Button";

function WishList() {
  const { container } = styles;
  return (
    <div className={container}>
      <div>
        <HeaderSideBar icon={<IoIosHeartEmpty />} content="wishlist" />
        <ItemProduct />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          width: "100%",
        }}
      >
        <Button content={"View Wishlist"} />
        <Button content={"Add All To Cart"} isPrimary={false} />
      </div>
    </div>
  );
}

export default WishList;
