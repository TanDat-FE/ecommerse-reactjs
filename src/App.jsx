import { useState } from "react";
import MyHeader from "@components/Header/Header.jsx";
import MyFooter from "@components/Footer/Footer.jsx";
import MainLayout from "@components/Layout/Layout.jsx";
import Button from "@components/Button/Button.jsx";

function App() {
  return (
    <>
      <MainLayout>
        <MyHeader />
        {/* Content
        <MyFooter />
        <Button /> */}
      </MainLayout>
    </>
  );
}

export default App;
