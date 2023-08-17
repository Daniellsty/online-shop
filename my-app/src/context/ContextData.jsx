import { createContext, useContext, useEffect, useReducer, useState } from "react";
import axios from 'axios';
const DataState = createContext();
const DataStateDispatcher = createContext();

const DataProvider = ({ children }) => {
    const [product,setProduct] = useState([])

    const getDatas= async ()=>{
        try {
            const{data} = await axios.get('https://fakestoreapi.com/products')
           
            setProduct(data)
        } catch (error) {
  
            console.log(error);
            
        }
    }
    useEffect(() => {
          getDatas()
      }, []);

   


   

 
  return (
      <DataState.Provider value={product}>
      <DataStateDispatcher.Provider value={setProduct}>
        {children}
      </DataStateDispatcher.Provider>
    </DataState.Provider>
  );
};

export default DataProvider;
export const useData = ()=> useContext(DataState);
export const useDataDispatcher =()=> useContext(DataStateDispatcher);
