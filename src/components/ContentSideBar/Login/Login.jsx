import InputCommon from "@components/InputCommon/InputCommon";
import styles from "./styles.module.scss";
import Button from "@components/Button/Button";

function Login() {
  const { container, title, boxRemember, lostPw, loginButton } = styles;
  return (
    <div className={container}>
      <div className={title}>SIGN IN</div>
      <InputCommon label="Username or email" type="text" isRequired />
      <InputCommon label="Password" type="password" isRequired />
      <div className={boxRemember}>
        <input type="checkbox" />
        <span>Remember me</span>
      </div>
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <Button content={"LOGIN"} style={{ width: "300px" }} />
      </div>
      <div className={lostPw}>Lost your password?</div>
    </div>
  );
}

export default Login;
