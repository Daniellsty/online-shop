import Navigation from "../../components/Navigation/Navigation";
import Section from "../../components/Section/Section";


const Layout = ({children}) => {
    return ( 
        <div >
            <Navigation/>
            <Section/>
            {children}
        </div>
     );
}
 
export default Layout;