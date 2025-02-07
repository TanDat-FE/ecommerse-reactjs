import MyHeader from "@components/Header/Header.jsx";
import Banner from "@components/Banner/Banner.jsx";
import styles from "./styles.module.scss";
import Info from "@components/Info/Info";
import AdvanceHeadling from "@components/AdvanceHeadling/AdvanceHeadling";
import HeadingListProduct from "@components/HeadingListProduct/HeadingListProduct";
import MainLayout from "@components/Layout/Layout";
import { getProducts } from "@/apis/productsService";

import { useEffect } from "react";
function HomePage() {
  const { container } = styles;

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <div className={container}>
        <MyHeader />
        <Banner />
        <MainLayout>
          <Info />
          <AdvanceHeadling />
          <HeadingListProduct />
        </MainLayout>
      </div>
    </div>
  );
}

export default HomePage;
