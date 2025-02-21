import styles from "./styles.module.scss";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useState } from "react";

function InputCommon({ label, type, isRequired = false, ...props }) {
  const { labelInput, boxInput, container, boxIcon, formikErr } = styles;
  const [showPassword, setShowPassword] = useState(true);
  const isPassword = type === "password";
  const isShowPassword = type === "password" && showPassword ? "text" : type;
  // const {formik, id} = props;
  const isErr = props.formik.errors[props.id] && props.formik.touched[props.id];
  return (
    <div className={container}>
      <div className={labelInput}>
        {label} {isRequired && <span>*</span>}
      </div>
      <div className={boxInput}>
        <input
          type={isShowPassword}
          {...props}
          onBlur={props.formik.handleBlur}
          onChange={props.formik.handleChange} //lắng nghe sự thay đổi của form khi ta nhập vào ô input đó
          value={props.formik.values[props.id]}
        />
        {isPassword && (
          <div
            className={boxIcon}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <IoEyeOutline /> : <FaRegEyeSlash />}
          </div>
        )}
        {isErr && (
          <div className={formikErr}>{props.formik.errors[props.id]}</div>
        )}
      </div>
    </div>
  );
}

export default InputCommon;
