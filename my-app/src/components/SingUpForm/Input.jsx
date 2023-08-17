const Input = ({formik,name, type="text" ,label}) => {


    return ( 
        <div>

             <div className="name-container">
              <label htmlFor="name">{label}</label>
              <input {...formik.getFieldProps(name)} name={name}  type="text" />
              {formik.errors[name] &&  formik.touched[name] && <p className='error'>{formik.errors[name]}</p>  }
             </div>

        </div>
     );
}
 
export default Input;