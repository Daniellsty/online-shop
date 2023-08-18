import { useEffect, useState  } from "react";
import axios from 'axios'
import ButtonPaginate from "./ButtonPaginate";
import { useData } from "../../context/ContextData";
import { useCart } from "../../context/ContextProvider";

const Pagination=()=> {
  const [paginate , setPagiante ] = useState([])
  const [loading,setLoading] = useState(false)
  const [perPage,setPerPage] = useState(1)
  const [currentPage,setCurrentPage] = useState(5)
  const [showPage,setShowPage] = useState([])


  const data = useData()
 
  

  const {product} = data
  useEffect(() => {
  
      setPagiante(product)
    setLoading(true)


  }, [product]);



  const lastIndexOfPage = perPage * currentPage ;
  const firstIndexOfPage = lastIndexOfPage - currentPage;
  const indexedPage = paginate.slice(firstIndexOfPage,lastIndexOfPage)

  
  useEffect(()=>{
      console.log(indexedPage);
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
  </div>
 )
   
   


}

export default Pagination;
