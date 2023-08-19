import { useEffect, useState } from "react";
import Layout from "../../common/Layout/Layout";
import axios from 'axios';
import { useCart, useCartDispatcher } from "../../context/ContextProvider";
import { useData } from "../../context/ContextData";
import Pagination from "../../components/Pagination/Pagination";
import { ToastContainer, toast } from "react-toastify";

const Product = () => {

  
   
  const [loading,setLoading] = useState(false)
  const dispatch = useCartDispatcher()
  const carts = useCart()
  const data = useData()
  
  const {filterProduct,searchProduct,arrayToFilter,setArrayToFilter,searchValue,selectValue,setSelectValue,setSearchValue,product} = data
  
  
  const selectHandler=(e)=>{

   
    setSelectValue(e.target.value)
  }

  const inputHandler=(e)=>{

   
    setSearchValue(e.target.value)
    
  }


 

 
  
  useEffect(()=>{
   let result = product
   result = filterProduct(result)
   result = searchProduct(result)
   setArrayToFilter(result)
   
  
  },[selectValue,searchValue])



  useEffect(()=>{
    setLoading(true)
  },[])

    if(!loading) {
        return(

            <div className="absolute top-[50%] left-[50%]"><h1 className="text-3xl font-bold">loading...</h1></div>
        )
    } 
    const notify = () => toast.success('product added !', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      });;

    const addToCart = (product)=>{
      notify();
       dispatch({type:"ADD_TO_CART",cart:product})

    }

    const toggle=(product)=>{

       return carts.cart.find((item)=> item.id === product.id )

    }
    

  

    return ( 
       

            <Layout>
            <div className="px-[9%]">

            <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss={false}
                  draggable
                  pauseOnHover
                  theme="light"
                />
           <form action="" className="py-5  item-center">

        <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select the category products </label>
        <div className="flex lg:flex-row flex-col gap-5 my-5 ">
          
<select onChange={(e)=>selectHandler(e)} id="countries" className="w-2/3  lg:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option defaultValue='all'  value='all'>select products</option>
  <option  value="all">all products</option>
  <option value="men's clothing">men  wear</option>
  <option value="women's clothing">women wear</option>
  <option value="electronics">electronic</option>
  <option value="jewelery">jewerly</option>
</select>
          <div className="w-1/3 lg:w-1/2">

            <input className="rounded w-full" placeholder="search prodcuts ...." type="text" onChange={(e)=> inputHandler(e)} />
          </div>
        </div>
           </form>
            </div>
          <div className="mt-[50px] grid  gap-10 grid-auto-fit px-[10%]  ">
          {arrayToFilter && arrayToFilter.map((item)=>{
               return(
                <div key={item.id} className="shadow shadow-xl transform  duration-200 hover:scale-110 my-[20px] bg-white flex flex-col items-center justify-center  pt-[10%] rounded-[10px]">
                    <div className="p-[20px] h-[300px]">

                <img className="h-full w-full  " src={item.image} alt={item.category} />
                    </div>
                <div className="my-3 text-center flex flex-col justify-between ">
                    <div className="flex text-center mx-auto justify-between w-full my-5 px-[30px]">

                    <h1> price :</h1>
                    <h1> $ {item.price}</h1>
                    </div>
                    <h1 className="w-full px-[30px] text-center mx-auto text-justify">$ {item.title}</h1>
                </div>
                <div className="my-5">
                    
                    <button onClick={()=> addToCart(item)} className="px-[6px] py-[5px] bg-[#6d28d9] hover:cursor-pointer rounded  text-[#f6f6f6]">{toggle(item) ? 'in cart' : 'Add to cart'  }</button>
                </div>
            </div>
               )
            })}
          </div>
        

            </Layout>
      
      
     );
}
 
export default Product;