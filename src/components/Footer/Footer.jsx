import styles from "./styles.module.scss";
import { dataMenu } from "./constants.jsx";

function Footer() {
  const { container, boxNav, title, des } = styles;

  return (
    <div className={container}>
      <div>
        <img
          src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/marseille-logo-300x104.png"
          width={160}
          height={55}
          alt="img-footer"
        />
      </div>
      <div className={boxNav}>
        {dataMenu.map((item) => {
          return <div>{item.content}</div>;
        })}
      </div>
      <div>
        <div className={title}>Guaranteed safe ckeckout</div>
        <img
          src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/elementor/thumbs/Icons-123-pzks3go5g30b2zz95xno9hgdw0h3o8xu97fbaqhtb6.png"
          width={270}
        />
      </div>
      <div className={title}>
        Copyright © 2024 NguyenTanDat theme. Created by NguyenTanDat.
      </div>
    </div>
  );
  z;
}

export default Footer;
