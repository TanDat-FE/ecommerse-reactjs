import ProductItem from "@components/ProductItem/ProductItem";
import styles from "./styles.module.scss";

function PopularProduct({ data }) {
  const { container } = styles;
  return (
    <div className={container}>
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
  );
}

export default PopularProduct;
