import { NavLink } from "react-router-dom";
import { useCart, useCartDispatcher } from "../../context/ContextProvider";
const CartSummary = () => {
  const carts = useCart();

  const dispatch = useCartDispatcher()
 

  const incrementHandler=(product)=>{

    dispatch({type:"ADD_TO_CART",cart:product})
  }
  const decrementHandler=(item)=>{

    dispatch({type:"REMOVE",item:item})
  }

  return (
    <div>
        <div className="flex xl:flex-row flex-col">
        <div className="flex  flex-col xl:w-2/3">
        {carts.cart.map((item) => {
            return (
                <div key={item.id} className="flex xl:flex-col flex-col px-[2%] gap-5 my-6">
              <div className="flex  justify-between  items-center h-[200px]  w-full px-[2%] py-[5%] bg-white rounded">
                <div className="flex items-center justify-center">

                <div className="md:h-[150px] md:w-[150px] h-[80px] w-[80px] bg-white p-2 rounded">
                  <img
                    className="w-full h-full rounded "
                    src={item.image}
                    alt={item.image}
                  />
                </div>
                <div className="flex  flex-col items-center justify-between mx-2 md:h-[130px] h-[70px] ">
                  <h1 className="">
                    
                    price : $  {item.price} 
                  </h1>
                  <h1 className=" ">{item.category}</h1>
                </div>
                </div>
                <div className="flex md:flex-row flex-col justify-between gap-5">
                  <button onClick={()=> decrementHandler(item) } className="w-[66px] h-10 bg-[#6d28d9] hover:cursor-pointer rounded  text-[#f6f6f6]">
                    Remove
                  </button>
                  <h1 className="w-[66px] text-center leading-10 h-10 bg-[#6d28d9] hover:cursor-pointer rounded  text-[#f6f6f6]">
                    {item.quantity}
                  </h1>
                  <button onClick={()=> incrementHandler(item) } className="w-[66px] h-10 bg-[#6d28d9] hover:cursor-pointer rounded  text-[#f6f6f6]">
                    Add
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      
      </div>
        <div className=" h-[200px] xl:w-1/3  bg-white mx-[2%] mb-6 rounded xl:my-6">
        <h1 className="pt-5 pl-2 border-b border-slate-500">cart summary</h1>
        <div className="p-5">

         <h1>total price is  {(carts.total).toFixed(2)}</h1>
          <h1>
            net price is {(carts.total).toFixed(2)}
          </h1>
          <NavLink to='/signup'>

          <button className="px-2 mt-5 h-10 bg-[#6d28d9] hover:cursor-pointer rounded  text-[#f6f6f6]">checkout</button>
          </NavLink>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CartSummary;
