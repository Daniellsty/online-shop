import { useEffect } from "react";
import Layout from "../../common/Layout/Layout";
import Pagination from "../../components/Pagination/Pagination";
import { useData } from "../../context/ContextData";

const Home = () => {

    const {setArrayToFilter,product} = useData()
 
  useEffect(() => {
    setArrayToFilter()
  
     

  }, [product]);
    return ( 
        <div>
            <Layout>
                  <Pagination/>
            </Layout>
        </div>
     );
}
 
export default Home;