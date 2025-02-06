import MyHeader from "@components/Header/Header.jsx";
import Banner from "@components/Banner/Banner.jsx";
import styles from "./styles.module.scss";
import Info from "@components/Info/Info";
import AdvanceHeadling from "@components/AdvanceHeadling/AdvanceHeadling";
import HeadingListProduct from "@components/HeadingListProduct/HeadingListProduct";
function HomePage() {
  const { container } = styles;
  return (
    <div>
      <div className={container}>
        <MyHeader />
        <Banner />
        <Info />
        <AdvanceHeadling />
        <HeadingListProduct />
      </div>
    </div>
  );
}

export default HomePage;
