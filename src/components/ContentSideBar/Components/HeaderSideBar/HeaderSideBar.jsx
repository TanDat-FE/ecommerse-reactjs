import styles from "./styles.module.scss";

function HeaderSideBar({ icon, content }) {
  const { container, title } = styles;
  return (
    <div className={container}>
      <div style={{ fontSize: "24px" }}>{icon}</div>
      <div className={title}>{content}</div>
    </div>
  );
}

export default HeaderSideBar;
