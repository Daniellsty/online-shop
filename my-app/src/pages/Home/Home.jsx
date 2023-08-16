import { useEffect, useState } from "react";
import Layout from "../../common/Layout/Layout";
import axios from 'axios';

import { useCart, useCartDispatcher } from "../../context/ContextProvider";
import Section from "../../components/Section/Section";
const Home = () => {

  const [product,setProduct] = useState([])
  const [loading,setLoading] = useState(false)
  
  const dispatch = useCartDispatcher()
  const carts = useCart()
  const getDatas= async ()=>{
      try {
          const{data} = await axios.get('https://fakestoreapi.com/products')
          setLoading(true)
          setProduct(data)
      } catch (error) {

          console.log(error);
          
      }
  }
  useEffect(() => {
        getDatas()
    }, []);

    if(!loading) {
        return(

            <div className="absolute top-[50%] left-[50%]"><p className="text-2xl">loading...</p></div>
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
                
          <div className="mt-[50px] grid  gap-10 grid-auto-fit px-[10%]  ">
          {product.map((item)=>{
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