// import { Carousel } from "@material-tailwind/react";
import Category from "../../components/category/Category";
import HeroSection from "../../components/heroSection/HeroSection";
import HomePageProductCard from "../../components/homePageProductCard/HomePageProductCard";
import Layout from "../../components/layout/Layout";
import Testimonial from "../../components/testimonial/Testimonial";
import Track from "../../components/track/Track";
import SliderCarousel from '../../components/heroSection/SliderCarousel'
import Sliderr from "../../components/heroSection/Slider2";
import HomeSlider from "../../components/heroSection/about";

const HomePage = () => {
    return (
        <Layout>
            {/* <SliderCarousel/> */}
            <HomeSlider/>
            {/* <Sliderr/> */}
            <Category/>
            <HomePageProductCard/>
            <Track/>
            <Testimonial/>
        </Layout>
    );
}

export default HomePage;
