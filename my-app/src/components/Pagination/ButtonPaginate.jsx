import { useState } from "react";

const ButtonPaginate = ({paginate,currentPage,setNumber,perPage}) => {
    let buttons = []

    for(let i = 1 ; i< Math.ceil(paginate.length  / currentPage +1 ) ; i++){

        buttons.push(i)
        
    }

   
    return ( 
        <div >

          <div  className="flex items-center my-20 mb-[150px] px-5 mx-auto text-center justify-center">
            {buttons.map((number)=>{
               
              return( 
              <div className=" text-center mx-[1%]"  key={number} >
              
                <li className="list-none">
                <button  onClick={()=> setNumber(number)}  className={ `${perPage === number ? 'text-slate-900 border-[2px] border-[#ece9e9]' :null } border rounded   mx-[5px] px-[10px] py-[5px]  bg-[#6d28d9] text-white`  }  >{number}</button>
                </li>
          
            
               </div>

            )  }) }

          </div>
        </div>
     );
}
 
export default ButtonPaginate;