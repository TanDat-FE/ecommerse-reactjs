import styles from "./styles.module.scss";
import CountdownBanner from "@components/CountdownBanner/CountdownBanner";
import ProductItem from "@components/ProductItem/ProductItem";

function HeadingListProduct() {
  const { container, containerItem } = styles;

  return (
    <div className={container}>
      <CountdownBanner />
      <div className={containerItem}>
        <ProductItem />
        <div>2</div>
      </div>
    </div>
  );
}

export default HeadingListProduct;
