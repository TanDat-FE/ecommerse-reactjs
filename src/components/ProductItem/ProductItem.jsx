import styles from "./styles.module.scss";
import reLoadIcon from "@icons/svgs/reloadIcon.svg";
import heartIcon from "@icons/svgs/heartIcon.svg";
import cartIcon from "@icons/svgs/cartIcon.svg";
import eyeIcon from "@icons/svgs/eyeIcon.svg";

function ProductItem({ src, prevSrc, name, price }) {
  const { boxImg, boxIcon, showImgWhenHover, showFncWhenHover, title, cash } =
    styles;
  return (
    <div>
      <div className={boxImg}>
        <img src={src} alt="img-1" />
        <img src={prevSrc} alt="img-2" className={showImgWhenHover} />
        <div className={showFncWhenHover}>
          <div className={boxIcon}>
            <img src={cartIcon} alt="cartIcon" />
          </div>
          <div className={boxIcon}>
            <img src={heartIcon} alt="heartIcon" />
          </div>
          <div className={boxIcon}>
            <img src={reLoadIcon} alt="reLoadIcon" />
          </div>
          <div className={boxIcon}>
            <img src={eyeIcon} alt="eyeIcon" />
          </div>
        </div>
      </div>
      <div className={title}>{name}</div>
      <div className={cash}>{price}</div>
    </div>
  );
}

export default ProductItem;
