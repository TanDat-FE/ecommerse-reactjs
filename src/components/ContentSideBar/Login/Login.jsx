import InputCommon from "@components/InputCommon/InputCommon";
import styles from "./styles.module.scss";
import Button from "@components/Button/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useContext, useState } from "react";
import { ToasContext } from "@/contexts/ToastifyProvider";
import { register } from "@/apis/authService";
function Login() {
  const { container, title, boxRemember, lostPw, loginButton } = styles;
  const [isRegister, setIsRegister] = useState(false);
  const { toast } = useContext(ToasContext);
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email")
        .required("please enter a valid email"),
      password: Yup.string()
        .min(6, "password is 6 characters long")
        .required("please enter a valid password"),
      cfmpassword: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Password must match"
      ),
    }),
    onSubmit: async (values) => {
      if (isLoading) return;
      if (isRegister) {
        const { email: username, password } = values;
        setIsLoading(true);
        await register({ username, password })
          .then((res) => {
            toast.success(res.data.message);
            setIsLoading(false);
          })
          .catch((err) => {
            toast.error(err.response.data.message);
            setIsLoading(false);
          });
      }
    },
  });

  const handleToggle = () => {
    setIsRegister(!isRegister);
    formik.resetForm();
  };

  return (
    <div className={container}>
      <div className={title}>{isRegister ? "SIGN UP" : "SIGN IN"}</div>
      <form onSubmit={formik.handleSubmit} formik={formik}>
        <InputCommon
          id="email"
          label="Username or email"
          type="text"
          isRequired
          formik={formik}
        />
        <InputCommon
          id="password"
          label="Password"
          type="password"
          isRequired
          formik={formik}
        />

        {isRegister && (
          <InputCommon
            id="cfmpassword"
            label="Comfirm Password"
            type="password"
            isRequired
            formik={formik}
          />
        )}
        {!isRegister && (
          <div className={boxRemember}>
            <input type="checkbox" />
            <span>Remember me</span>
          </div>
        )}
        <div>
          {/* khi click vào btn có type submit thì nó sẽ triger đến cái hàm onSubmit của form, 
        từ đó formik sẽ gọi đến hàm handleSubmit và nó sẽ lấy ra đc giá trị mà ta đã khai báo: email, password. */}
          <Button
            content={
              isLoading ? "Loading..." : isRegister ? "Register" : "Login"
            }
            type="submit"
            // onClick={() => toast.success("Success")}
          />
        </div>
      </form>
      <div style={{ marginTop: "10px" }} onClick={handleToggle}>
        <Button
          content={
            isRegister ? "Already have an account?" : "Don`t have an account"
          }
          type="submit"
          isPrimary={false}
        />
      </div>
      {!isRegister && <div className={lostPw}>Lost your password?</div>}
    </div>
  );
}

export default Login;
