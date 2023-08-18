const Input = ({formik,name, type="text" ,label}) => {


    return ( 
        <div>

             <div className="flex flex-col ">
              <label htmlFor="name">{label}</label>
              <input className="max-w-[300px] rounded" {...formik.getFieldProps(name)} name={name}  type="text" />
              {formik.errors[name] &&  formik.touched[name] && <p className="text-red-500">{formik.errors[name]}</p>  }
             </div>

        </div>
     );
}
 
export default Input;