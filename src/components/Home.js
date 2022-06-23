import React from "react";
import Banner from '../components/Banner';
import Overview from '../components/Overview';
import Highlights from '../components/Highlights';
import Configuration from '../components/Configuration';
import Googlemap from "../components/Googlemap";
import Amenites from "../components/Amenities";
import Footer from '../components/Footer';
import Homegalleries from "../components/Homegalleries";
const Home = () => {
    return(
        <>
           <Banner />
           <Overview />
           <Highlights />
           <Configuration />
           <Googlemap />
           <Amenites  />
           <Homegalleries />
           <Footer />
        </>
    )
}
export default Home;