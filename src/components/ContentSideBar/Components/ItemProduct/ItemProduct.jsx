import styles from "./styles.module.scss";
import { IoCloseOutline } from "react-icons/io5";
function ItemProduct() {
  const { container, boxContent, title, isPrice, boxIcon } = styles;
  return (
    <div className={container}>
      <img
        src="https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min-251x300.jpg"
        alt=""
      />
      <div className={boxIcon}>
        <IoCloseOutline style={{ color: "ccc", fontSize: "25px" }} />
      </div>
      <div className={boxContent}>
        <div className={title}>10K Yellow Gold</div>
        <div className={isPrice}>$99.99</div>
      </div>
    </div>
  );
}

export default ItemProduct;
