import { useEffect, useState  } from "react";
import axios from 'axios'
import ButtonPaginate from "./ButtonPaginate";
import { useData } from "../../context/ContextData";
import { useCart, useCartDispatcher } from "../../context/ContextProvider";
import { NavLink } from "react-router-dom";

const Pagination=()=> {
  const [paginate , setPagiante ] = useState([])
  const [loading,setLoading] = useState(false)
  const [perPage,setPerPage] = useState(1)
  const [currentPage,setCurrentPage] = useState(5)
  const [showPage,setShowPage] = useState([])

  const dispatch = useCartDispatcher()
  const data = useData()
  
  
  const {product} = data
  const {setArrayToFilter} = useData()
  useEffect(() => {
    setArrayToFilter()
  
      setPagiante(product)
    setLoading(true)


  }, [product]);


 

  const lastIndexOfPage = perPage * currentPage ;
  const firstIndexOfPage = lastIndexOfPage - currentPage;
  const indexedPage = paginate.slice(firstIndexOfPage,lastIndexOfPage)

  
  useEffect(()=>{
      console.log(data);
      setArrayToFilter()
      setShowPage(indexedPage)
  
      
    },[data,perPage,product])
    
    const setNumber=(curr)=>{
      
      
   return setPerPage(curr)
   
    

  }

  const carts = useCart()

  const addToCart = (product)=>{

    dispatch({type:"ADD_TO_CART",cart:product})

 }

 const toggle=(product)=>{

    return carts.cart.find((item)=> item.id === product.id )

 }

  
 const renderUsers=()=>{
  if(!loading) return <p className="text-center text-2xl font-bold mx-auto">loading ... </p>
  return (
    <div className="mt-[50px] grid  gap-10 grid-auto-fit px-[10%]">

    {showPage && showPage.map((item)=>{
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
  );
 }

 return(
  <div>
    <>{renderUsers()}</>
    <ButtonPaginate perPage={perPage} setNumber={setNumber} paginate={paginate} currentPage={currentPage} />

    <div className="px-[10%]">
        <div>
            <h1 className="text-3xl my-5 text-[#6d28d9]">about our website</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci nulla modi rem quasi reprehenderit rerum ex illum distinctio hic ipsa mollitia odit ducimus nemo enim alias, eveniet, magnam neque ad labore repellendus atque amet vel, similique ea! Dolores dolor cum nam cupiditate obcaecati animi commodi eius blanditiis, repellendus facilis </p>
        </div>
        <div className="my-5">
            <ul>
                <li>Variety of products</li>
                <li>fast sending</li>
                <li>24 hour support</li>
                <li>Tracking orders</li>
                <li>add one :)</li>
            </ul>
            <NavLink  to='/aboutus'>
            <button className="px-[6px] my-5 py-[5px] bg-[#6d28d9] hover:cursor-pointer rounded text-[#f6f6f6]">about us</button>
            </NavLink>
        </div>
        <div className="w-full">
            <h1 className="text-3xl my-5 text-[#6d28d9]">do your first shop now </h1>
            <div className="flex flex-col my-10 items-center lg:flex-row w-full justify-between bg-white rounded p-5 ">

            <p className="w-1/3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, itaque.</p>
            <NavLink to='/product'>
            <button className="px-[6px] mb-10 mt-5 py-[5px] bg-[#6d28d9] hover:cursor-pointer rounded text-[#f6f6f6]">product</button>
            </NavLink>
            </div>
        </div>
    </div>
    <footer className="text-center text-white bg-[#6d28d9] p-10">
        <h1 className="">Copyright is prohibited on this site © </h1>
    </footer>
  </div>
 )
   
   


}

export default Pagination;
