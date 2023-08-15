import { NavLink,   } from "react-router-dom";
import { GiCancel } from "react-icons/gi";
import { AiOutlineMenu } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { AiFillShopping } from "react-icons/ai";
import { HiInformationCircle } from "react-icons/hi";

import { useEffect, useState } from "react";
const Navigation = () => {

    const [open,setOpen] = useState(false)

    useEffect(() => {
        if (open) {
            
          document.body.classList.add("dark");
        } else {
          document.body.classList.remove("dark");
        }
      }, [open]);
    

    return ( 
        <div className="overflow-x-hidden" >
          <header  className="text-primary shadow-lg " >
                <nav className="flex justify-between w-full bg-slate-100 px-[10%] ">
                <ul className="flex justify-between items-center  ">
                        <li className="  p-2 rounded hover:bg-white">
                           
                            <NavLink to='/' >Home</NavLink>
                        </li>
                    <li className="ml-10  text-center align-center leading-10 h-10 w-12 rounded hover:bg-white hover:border-none ">
                            <NavLink  to='/cart'  >
                                
                              <p>cart</p>

                                
                         
                            </NavLink>
                        </li>
                    </ul>
                    <ul className="flex sm:w-1/2  justify-between items-center py-8  ">

                    
                        <li className="hidden sm:block  p-2 rounded hover:bg-white">
                            <NavLink    >
                             <p>about us</p>
                            </NavLink>
                           
                        </li>
                       
                        <li className="hidden sm:block  p-2 rounded hover:bg-white">
                            <NavLink    >
                             <p>products</p>
                            </NavLink>
                           
                        </li>
                        <li className="hidden sm:block  p-2 rounded ">
                             <p>noco shop</p>
                         
                           
                        </li>
                      <li className=" sm:hidden ">
                        <AiOutlineMenu className="hover:cursor-pointer" onClick={()=> setOpen(prev=> !prev) } size={22}/>
                        <div  className={  `${!open ? 'translate-x-[420px] ' : 'translate-x-[0px]' } 'flex justify-between transition-all ease-in-out duration-700 delay-50 z-10  min-h-full bg-white fixed right-0 top-0 w-2/3 ' `}  >
                                <div className="  mt-5 ">
                                <div className="border-b-2  border-gray-200 w-full py-[10px]">
                                <GiCancel className="ml-2 hover:cursor-pointer" onClick={()=> setOpen(prev=> !prev) }  size={22}/>

                                </div>
                                    <ul className="mt-10 flex flex-col items-start ml-5 ">
                        <li className="my-2 flex items-center ">
                            <AiFillHome className="mr-3"/>
                            <NavLink  to='/' >
                                <p className="  leading-12 text-center  hover:border-[#7e22ce] rounded">home</p>
                            </NavLink>
                        </li>
                                    <li className="my-2 flex items-center">
                                <BsFillCartFill className="mr-3"/>
                            <NavLink  to='/cart'  >
                                
                              <p className="  leading-10 text-center hover:border-[#7e22ce] rounded">cart</p>

                                
                         
                            </NavLink>
                        </li>
                       
                        <li className="my-2 flex items-center">
                            <AiFillShopping className="mr-2"/>
                            <NavLink    >
                             <p className="  leading-10 text-center hover:border-[#7e22ce] rounded">products</p>
                            </NavLink>
                           
                        </li>
                        <li className="my-2 flex items-center">
                            <HiInformationCircle  className="mr-2 "/>
                            <NavLink>
                             <p className="leading-10 text-center hover:border-[#7e22ce] rounded">about us</p>
                            </NavLink>
                           
                        </li>
                                    </ul>
                                </div>
                            </div>
                      </li>
                    
                    </ul>
                    
                </nav>
            </header>
            <div className="text-center flex flex-col items-center justify-center w-full h-[400px] bg-shop-nav bg-center bg-no-repeat bg-cover relative before:conten-[''] before:absolute before:w-full before:h-full before:block before:bg-bg-image ">
                <h1 className="text-white z-10">Noco shop</h1>
                <h1 className="text-white z-10 text-xl">the most popular and famous shop</h1>
            </div>
        </div>
     );
}
 
export default Navigation;