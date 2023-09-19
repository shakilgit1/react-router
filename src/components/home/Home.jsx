import { Outlet, useNavigation } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Header></Header>
            {
              navigation.state === "loading" 
              ? "loading..." 
              : <Outlet></Outlet>
            }
            <Footer></Footer>
        </div>
    );
};

export default Home;