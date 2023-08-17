import {useFormik} from 'formik'
import * as yup from 'yup';
import Input from './Input';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const SingUpForm = () => {

    const [formValue,setFormValue] = useState(null)

    const navigate = useNavigate();

    


    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const validationSchema = yup.object({
        name:yup.string().required('name is required !'),
        phoneNumber:
        yup.string().required("phone required")
        .matches(phoneRegExp, 'Phone number is not valid')
        .min(11, "too short ")
        .max(11, "too long"),
        email:yup.string().email('invalid format').required('email is required !').min(8,'must at least contain 8 charackter'),
        password:yup.string().required('Password is required').matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*[\]{}()?"\\,><':;|_~`=+-])[a-zA-Z\d!@#$%^&*[\]{}()?"\\,><':;|_~`=+-]{12,99}$/,
            'Must contain at least 12 Characters, 1 Uppercase, 1 Lowercase, 1 Special Character, and 1 Number'
          ),
        passConfirm:yup.string().required('Password confirm is required').oneOf([yup.ref('password'), null], 'Passwords must match'),
       })

   

       const initialValues = {
        name:'',  
        phoneNumber:'',
        email:'', 
        password:'',
        passConfirm:''
       
      }

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
        initialValues:  initialValues  ,
        onSubmit,
       validationSchema,
       validateOnMount:true,
       enableReinitialize:true
       })


    
   
   

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="Form">
        <Input formik={formik} label="name" name="name" />
        <Input formik={formik} label="phoneNumber" name="phoneNumber" />
        <Input formik={formik} label="Email" name="email" />
        <Input formik={formik} label="password" name="password" />
        <Input formik={formik} label="passConfirm" name="passConfirm" />
        
        <button type="submit" disabled={!formik.isValid}>
          Submit
        </button>
        {err ? <p style={{color:'red'}} >{err}</p> : null}
      </form>
       <Link  to='/login' >
       <p>already loged in ?</p>
       </Link>
    </div>
  );

}

export default SingUpForm;
