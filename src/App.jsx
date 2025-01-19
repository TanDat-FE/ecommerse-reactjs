import { useState } from "react";
import "./App.css";
import MyHeader from "@components/Header/Header.jsx";
import MyFooter from "@components/Footer/Footer.jsx";
import MainLayout from "@components/Layout/Layout.jsx";

function App() {
  return (
    <>
      <MainLayout>
        <MyHeader />
        Content
        <MyFooter />
      </MainLayout>
    </>
  );
}

export default App;
