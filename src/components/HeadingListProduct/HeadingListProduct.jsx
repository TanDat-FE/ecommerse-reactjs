import styles from "./styles.module.scss";
import CountdownBanner from "@components/CountdownBanner/CountdownBanner";
import ProductItem from "@components/ProductItem/ProductItem";

function HeadingListProduct({ data }) {
  const { container, containerItem } = styles;
  return (
    <div className={container}>
      <CountdownBanner />
      <div className={containerItem}>
        {data.map((item) => {
          return (
            <ProductItem
              key={item.id}
              src={item.images[0]}
              prevSrc={item.images[1]}
              name={item.name}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default HeadingListProduct;
