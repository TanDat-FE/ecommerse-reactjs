import styles from "./styles.module.scss";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useState } from "react";

function InputCommon({ label, type, isRequired = false }) {
  const { labelInput, boxInput, container, boxIcon } = styles;
  const [showPassword, setShowPassword] = useState(true);
  const isPassword = type === "password";
  const isShowPassword = type === "password" && showPassword ? "text" : type;

  return (
    <div className={container}>
      <div className={labelInput}>
        {label} {isRequired && <span>*</span>}
      </div>
      <div className={boxInput}>
        <input type={isShowPassword} />
        {isPassword && (
          <div
            className={boxIcon}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <IoEyeOutline /> : <FaRegEyeSlash />}
          </div>
        )}
      </div>
    </div>
  );
}

export default InputCommon;
