import { dataInfo } from "@components/Info/constants";
import InfoCard from "@components/Info/InfoCard/InfoCard";
import styles from "./styles.module.scss";

function Info() {
  const { container } = styles;
  return (
    <>
      <div className={container}>
        {dataInfo.map((info) => {
          return (
            <InfoCard
              content={info.title}
              description={info.description}
              src={info.src}
            />
          );
        })}
      </div>
    </>
  );
}

export default Info;
