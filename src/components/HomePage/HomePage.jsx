import MyHeader from "@components/Header/Header.jsx";
import Banner from "@components/Banner/Banner.jsx";
import Info from "@components/Info/Info";
import AdvanceHeadling from "@components/AdvanceHeadling/AdvanceHeadling";
import HeadingListProduct from "@components/HeadingListProduct/HeadingListProduct";
import MainLayout from "@components/Layout/Layout";
import { getProducts } from "@/apis/productsService";

import { useEffect, useState } from "react";
import PopularProduct from "@components/PopularProduct/PopularProduct";
function HomePage() {
  const [listProduct, setListProduct] = useState([]);

  useEffect(() => {
    getProducts().then((res) => {
      setListProduct(res.contents);
    });
  }, []);

  console.log(listProduct);

  return (
    <>
      <MyHeader />
      <Banner />
      <MainLayout>
        <Info />
        <AdvanceHeadling />
        <HeadingListProduct data={listProduct.slice(0, 2)} />
        <PopularProduct data={listProduct.slice(2, 10)} />
      </MainLayout>
    </>
  );
}

export default HomePage;
