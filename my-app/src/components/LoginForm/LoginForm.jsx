import { useFormik } from "formik";
import * as yup from "yup";
import Input from "../SingUpForm/Input";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const LoginForm = (Navigate) => {
  const [formValue, setFormValue] = useState(null);

  


 

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

  const onSubmit= async(values)=>{

  
    const {name,email,phoneNumber,password} = values
    const value ={
     name,
     email,
     phoneNumber,
     password
    }


   }


  const formik = useFormik({
    initialValues: initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

  return (
    <div className='flex justify-center  w-full my-10 '>

    <div className=' border border-1 w-full rounded border-black p-10 mx-[10%]'>
      <form onSubmit={formik.handleSubmit} className="flex flex-col">
        <Input formik={formik} label="Email" name="email" />
        <Input formik={formik} label="password" name="password" />
        
        <button className='w-[100px]  mt-5 h-10 bg-[#6d28d9] hover:cursor-pointer rounded  text-[#f6f6f6]' type="submit" disabled={!formik.isValid}>
          Submit
        </button>
      
      </form>
      <div className="flex items-center my-5">
       <p className=''>dont have an account ?  </p>
       <NavLink className="text-red-500" to='/singup' >
       sing up
       </NavLink>

      </div>
    </div>
    </div>
  );
};

export default LoginForm;
