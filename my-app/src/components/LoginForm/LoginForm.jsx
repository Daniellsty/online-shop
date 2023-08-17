import { useFormik } from "formik";
import * as yup from "yup";
import Input from "../SingUpForm/Input";
import { useEffect, useState } from "react";
import style from "../SingUpForm/SingUp.css";
import { Link } from "react-router-dom";
import { login } from "../../services/login";

const LoginForm = (Navigate) => {
  const [formValue, setFormValue] = useState(null);
  const [err, setErr] = useState("");

  


 

  const phoneRegExp =    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const validationSchema = yup.object({
    email: yup
      .string()
      .email("invalid format")
      .required("email is required !")
      .min(8, "must at least contain 8 charackter"),
    password: yup
      .string()
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*[\]{}()?"\\,><':;|_~`=+-])[a-zA-Z\d!@#$%^&*[\]{}()?"\\,><':;|_~`=+-]{12,99}$/,
        "Must contain at least 12 Characters, 1 Uppercase, 1 Lowercase, 1 Special Character, and 1 Number"
      ),
  });

  const initialValues = {
    email: "",
    password: "",
  };



  const formik = useFormik({
    initialValues: initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="Form">
        <Input formik={formik} label="email" name="email" />
        <Input formik={formik} label="password" name="password" />

        <button type="submit" disabled={!formik.isValid}>
          Submit
        </button>
        {err ? <p style={{color:'red'}} >{err}</p> : null}
        <Link to='/signup'>
          <p>not sign up yet?</p>
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
