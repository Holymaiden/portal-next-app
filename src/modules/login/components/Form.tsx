import classNames from "classnames";
import FormGroup from "@/common/components/elements/bootstrap/forms/FormGroup";
import USERS, { getUserDataWithUsername } from "@/common/data/userDummyData";
import { useFormik } from "formik";
import Input from "@/common/components/elements/bootstrap/forms/Input";
import Button from "@/common/components/elements/bootstrap/Button";
import Spinner from "@/common/components/elements/bootstrap/Spinner";
import { useState } from "react";

interface IProps {
  handleOnClick: () => void;
  setUser: any;
}

const LoginForm = ({ handleOnClick, setUser }: IProps): JSX.Element => {
  const [signInPassword, setSignInPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const usernameCheck = (username: string) => {
    return !!getUserDataWithUsername(username);
  };

  const passwordCheck = (username: string, password: string) => {
    return getUserDataWithUsername(username).password === password;
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      loginUsername: USERS.JOHN.username,
      loginPassword: USERS.JOHN.password,
    },
    validate: (values) => {
      const errors: { loginUsername?: string; loginPassword?: string } = {};

      if (!values.loginUsername) {
        errors.loginUsername = "Required";
      }

      if (!values.loginPassword) {
        errors.loginPassword = "Required";
      }

      return errors;
    },
    validateOnChange: false,
    onSubmit: (values) => {
      if (usernameCheck(values.loginUsername)) {
        if (passwordCheck(values.loginUsername, values.loginPassword)) {
          if (setUser) {
            setUser(values.loginUsername);
          }

          handleOnClick();
        } else {
          formik.setFieldError(
            "loginPassword",
            "Username and password do not match."
          );
        }
      }
    },
  });

  const handleContinue = () => {
    setIsLoading(true);
    setTimeout(() => {
      if (
        !Object.keys(USERS).find(
          (f) => USERS[f].username.toString() === formik.values.loginUsername
        )
      ) {
        formik.setFieldError(
          "loginUsername",
          "No such user found in the system."
        );
      } else {
        setSignInPassword(true);
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <form className="row g-4">
      <div className="col-12">
        <FormGroup
          id="loginUsername"
          isFloating
          label="Your email or username"
          className={classNames({
            "d-none": signInPassword,
          })}
        >
          <Input
            autoComplete="username"
            value={formik.values.loginUsername}
            isTouched={formik.touched.loginUsername}
            invalidFeedback={formik.errors.loginUsername}
            isValid={formik.isValid}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            onFocus={() => {
              formik.setErrors({});
            }}
          />
        </FormGroup>
        {signInPassword && (
          <div className="text-center h4 mb-3 fw-bold">
            Hi, {formik.values.loginUsername}.
          </div>
        )}
        <FormGroup
          id="loginPassword"
          isFloating
          label="Password"
          className={classNames({
            "d-none": !signInPassword,
          })}
        >
          <Input
            type="password"
            autoComplete="current-password"
            value={formik.values.loginPassword}
            isTouched={formik.touched.loginPassword}
            invalidFeedback={formik.errors.loginPassword}
            validFeedback="Looks good!"
            isValid={formik.isValid}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </FormGroup>
      </div>
      <div className="col-12">
        {!signInPassword ? (
          <Button
            color="warning"
            className="w-100 py-3"
            isDisable={!formik.values.loginUsername}
            onClick={handleContinue}
          >
            {isLoading && <Spinner isSmall inButton isGrow />}
            Continue
          </Button>
        ) : (
          <Button
            color="warning"
            className="w-100 py-3"
            onClick={formik.handleSubmit}
          >
            Login
          </Button>
        )}
      </div>
    </form>
  );
};

export default LoginForm;
