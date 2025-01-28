import style from "./styles.module.scss";

function MainLayout({ children }) {
  return (
    <main className={style.wrapLayout}>
      <div className={style.container}>{children}</div>
    </main>
  );
}

export default MainLayout;
