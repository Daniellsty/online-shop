import Layout from "../../common/Layout/Layout";
import { useCart } from "../../context/ContextProvider";

const Cart = () => {
    const datas = useCart()
    console.log(datas);
    return ( 
        <div>
            <Layout/>

        </div>
     );
}
 
export default Cart;