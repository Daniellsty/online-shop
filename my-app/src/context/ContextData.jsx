import { createContext, useContext, useEffect, useReducer, useState } from "react";
import axios from 'axios';
const DataState = createContext();
const DataStateDispatcher = createContext();

const DataProvider = ({ children }) => {
    const [product,setProduct] = useState([])
    const [filteredProducts,setFilteredProducts] = useState([])
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

      useEffect(() => {
       

        setFilteredProducts(product)
    }, [product]);

      const filterProduct=(e)=>{
        const value = e.target.value
        if(value=== 'all'){
          setFilteredProducts(product)
        }else{

          const filteredProduct = product.filter((item)=>{
             return item.category === value
          })
  
          setFilteredProducts(filteredProduct)
        }
      }
      

 
  return (
      <DataState.Provider value={{filterProduct,filteredProducts}}>
      {children}
    </DataState.Provider>
  );
};

export default DataProvider;
export const useData = ()=> useContext(DataState);
export const useDataDispatcher =()=> useContext(DataStateDispatcher);
