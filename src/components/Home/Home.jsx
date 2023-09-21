import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Home = () => {
    return ( 
       
        <div>
            
            <Header></Header>
            <div>
            <h2>HELLO FROM HOME</h2>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;