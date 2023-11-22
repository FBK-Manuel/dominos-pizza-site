// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BackgroundImg from "./frontLayout/BackgroundImg";
import FooterContact from "./frontLayout/FooterContact";
import NavBar from "./frontLayout/NavBar";
import SocialMedia from "./frontLayout/SocialMedia";
import DownLayer from "./frontLayout/downLayer";
import Footer from "./frontLayout/footer";
import MainLayer from "./frontLayout/layer";
import OrderList from "./frontLayout/orderList";
import SocialVideo from "./frontLayout/socialVideo";
// import { faBell } from "@fortawesome/free-solid-svg-icons";


const Home = () => {
    return (
        <>
            <NavBar />
            <MainLayer />
            <OrderList />
            <DownLayer />
            <SocialMedia />
            <SocialVideo />
            <FooterContact />
            <BackgroundImg />
            <Footer />


        </>
    );
}

export default Home;