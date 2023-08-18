import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';
const DataState = createContext();
const DataStateDispatcher = createContext();

const DataProvider = ({ children }) => {
    const [product,setProduct] = useState([])
    const [filteredProducts,setFilteredProducts] = useState([])
    const [searchProducts,setSearchProducts] = useState([])
    const [arrayToFilter,setArrayToFilter] = useState([])
  
   
  const [searchValue,setSearchValue] = useState('') 
  const [selectValue,setSelectValue] = useState('')
  
    const getDatas= async ()=>{
        try {
            const {data} = await axios.get('https://fakestoreapi.com/products')
            setProduct(data)
         

        } catch (error) {
  
            console.log(error);
            
        }
    }
    useEffect(() => {
          getDatas()
         
      }, []);



    

      const filterProduct=(array)=>{
          if(selectValue === 'all') return product
     
          return array.filter((item)=>  item.category === selectValue)
         
       
      }

      const searchProduct=(array)=>{
     
    
          if(searchValue === ' '){
            return product
          }else{
    
                      return  array.filter((item)=>  item.title.trim().toLowerCase().includes(searchValue.toLowerCase())  )

          }
          
        }
      
      
        
       
        useEffect(()=>{
          setArrayToFilter(product)
        },[product])
        
        
      
 
  return (
      <DataState.Provider value={{filterProduct,searchProduct,arrayToFilter,setArrayToFilter,searchValue,selectValue,setSelectValue,setSearchValue,product}}>
      {children}
    </DataState.Provider>
  );
};

export default DataProvider;
export const useData = ()=> useContext(DataState);
export const useDataDispatcher =()=> useContext(DataStateDispatcher);
