import { Link, NavLink,   } from "react-router-dom";
import { GiCancel } from "react-icons/gi";
import { AiOutlineMenu } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { AiFillShopping } from "react-icons/ai";
import { SiAdobepremierepro } from "react-icons/si";
import { HiInformationCircle } from "react-icons/hi";
import { BiLogIn } from "react-icons/bi";
import { useEffect, useState } from "react";

import myimg from  '../../assets/react.svg'
import { useCart } from "../../context/ContextProvider";
const Navigation = () => {

    const [open,setOpen] = useState(false)

    const carts = useCart()

    useEffect(() => {
        if (open) {
            
          document.body.classList.add("dark");
        } else {
          document.body.classList.remove("dark");
        }
      }, [open]);
    

      
    return ( 
        
        < >
          <div  className="text-primary h-full sticky z-20 top-0   overflow-hidden">
                <nav className="flex w-full h-[80px] justify-between  px-[10%]  bg-navbar backdrop-blur-[8px]  shadow-navbar-shadow">
                <ul className="flex  justify-between items-center">
                          

                            <NavLink  to='/' >
                        <li className="p-2 rounded hover:bg-white">
                              Home
                        </li>
                              </NavLink>
                            <NavLink  to='/cart'  >
                    <li className="m-10 flex relative text-center align-center leading-10 h-10 px-[12px] rounded hover:bg-white  ">
                              
                              <span className="absolute right-[-20px] bottom-6 text-center  bg-red-600 rounded-full leading-[30px] w-[30px] w-[30px] text-white">{carts.cart.length}</span>
                              <p>cart</p>

                                
                         
                        </li>
                            </NavLink>
                    </ul>
                    <ul className="flex sm:w-1/2 justify-between items-center py-8  ">

                    <NavLink to='/product'>
                    <li className="hidden sm:block  p-2 rounded hover:bg-white">
                             <p>product</p>
                         
                           
                        </li>
                            </NavLink>
                            <NavLink to='/contactus'  >
                        <li className="hidden sm:block  p-2 rounded hover:bg-white">
                             <p>contact us</p>
                           
                        </li>
                            </NavLink>
                       
                            <NavLink to='/singup'   >
                        <li className="hidden sm:block  p-2 rounded hover:bg-white">
                             <p>signUp</p>
                           
                        </li>
                            </NavLink>
                      
                      <li className=" sm:hidden">
                        <AiOutlineMenu className="hover:cursor-pointer " onClick={()=> setOpen(prev=> !prev) } size={22}/>
                        
                           
                      </li>
                    
                    </ul>
                    
                </nav>
                <section className=" sm:hidden h-full">
                        <div  className={  `${!open ? ' translate-x-[200px] ' : 'translate-x-[0px]  ' } 'flex justify-between transition-all ease-in-out duration-700 delay-50   h-full bg-white  fixed right-0   top-0  w-[150px]  ' `}  >
                                <div className="  mt-5 ">
                                <div className="border-b-2  border-gray-200 w-full py-[10px]">
                                <GiCancel className="ml-2 hover:cursor-pointer" onClick={()=> setOpen(prev=> !prev) }  size={22}/>

                                </div>
                                    <ul className="mt-10 flex flex-col items-start ml-5 z-10">
                        <li className="my-2 flex items-center ">
                            <AiFillHome className="mr-3"/>
                            <NavLink  to='/' >
                                <p className="  leading-12 text-center   rounded">home</p>
                            </NavLink>
                        </li>
                                    <li   className="my-2 flex items-center">
                                <BsFillCartFill className="mr-3"/>
                            <NavLink to='/cart'  >
                                
                              <p className="  leading-10 text-center  rounded">cart</p>

                                
                         
                            </NavLink>
                        </li>
                        <li className="my-2 flex items-center">
                            <SiAdobepremierepro className="mr-2"/>
                            <NavLink  to='/product'  >
                             <p className="  leading-10 text-center  rounded">product</p>
                            </NavLink>
                           
                        </li>
                        <li className="my-2 flex items-center">
                            <BiLogIn className="mr-2"/>
                            <NavLink  to='/singup'  >
                             <p className="  leading-10 text-center  rounded">signUp</p>
                            </NavLink>
                           
                        </li>
                        <li className="my-2 flex items-center">
                            <HiInformationCircle  className="mr-2 "/>
                            <NavLink to='/contactus'>
                             <p className="leading-10 text-center hover:cursor-pointer ">contact us</p>
                            </NavLink>
                           
                        </li>
                                    </ul>
                                </div>
                            </div>

                </section>

            </div>
            </>
         
       
       
     );
}
 
export default Navigation;