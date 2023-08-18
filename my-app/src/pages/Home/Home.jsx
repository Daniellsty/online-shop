import { useEffect, useState } from "react";
import Layout from "../../common/Layout/Layout";
import axios from 'axios';
import { useCart, useCartDispatcher } from "../../context/ContextProvider";
import { useData } from "../../context/ContextData";

const Home = () => {

  
   
  const [loading,setLoading] = useState(false)
  const dispatch = useCartDispatcher()
  const data = useData()
  const carts = useCart()
  
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

    const addToCart = (product)=>{

       dispatch({type:"ADD_TO_CART",cart:product})

    }

    const toggle=(product)=>{

       return carts.cart.find((item)=> item.id === product.id )

    }
    

  

    return ( 
       

            <Layout>
          <select name="" id="" onChange={(e)=>selectHandler(e)}>
                <option value="all">select product</option>
                <option value="men's clothing">men s wear</option>
                <option value="women's clothing">women wear</option>
                <option value="electronics">electronic</option>
                <option value="jewelery">jewerly</option>
            </select>

            <input type="text" onChange={(e)=> inputHandler(e)} />
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
 
export default Home;