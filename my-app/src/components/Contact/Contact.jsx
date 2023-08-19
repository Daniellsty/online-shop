import { useState } from "react";

const Contact = () => {
    const [input,setInput] = useState({name:'',message:"",data: new Date().toLocaleDateString('fa-IR') , id:Math.floor(Math.random() * 1000 ) })
    const [data,setData] = useState([])
    const [show,setShow] = useState(false)
    const changeHandler=(e)=>{
        const value = e.target.value

        setInput( {...input ,[e.target.name]:value} )
      
    }
    
    const sendHanlder=()=>{
        const updateInput = {...input}
        setData([...data,updateInput])

    }


  return (
    <div>
      <div className="my-10">
        <div className="flex flex-col mx-5 max-w-[500px]">
        <label className="my-2" htmlFor="name"> Name</label>
       <input onChange={changeHandler} value={input.name} name="name" className="rounded mx:w-1/2" id="name" type="text" />


        </div>
        <div className="flex flex-col mx-5 max-w-[300px]">
        <label className="my-2" htmlFor="message">your message</label>
        <textarea onChange={changeHandler} value={input.message} className="rounded mx:w-1/2" name="message" id="message"  rows="10"></textarea>

       
        </div>
      <div className="px-5">
      <button onClick={sendHanlder} className="px-3 mt-5 h-10 bg-[#6d28d9] hover:cursor-pointer rounded  text-[#f6f6f6]">send</button>
      </div>
      </div>

      <div className="m-5">
        <h1 onClick={()=> setShow( (prev)=> !prev ) } className="hover:cursor-pointer transform  duration-200  hover:translate-y-[-10px]">show message</h1>
        <div className={`${show ? 'block' : 'hidden' }`}>
        {data.map((item)=>{
          return(
            <div id={item.id} className=" my-10 max-w-[400px] rounded p-5 text-white h-[300px] bg-[#6d28d9]">
                <h1>{item.name}</h1>
                <h1>{item.message}</h1>
                <h1>{item.data}</h1>

            </div>
          )
        })}
      </div>
      </div>
    <footer className="text-center text-white bg-[#6d28d9] p-10">
    <h1 className="">Copyright is prohibited on this site © </h1>
</footer>
    </div>
  );
};

export default Contact;
