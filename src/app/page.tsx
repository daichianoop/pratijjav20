import {AnimatedTestimonialsDemo} from "@/app/components/animated-testimonials-demo";
import FlipCard from "@/app/components/FlipCards";
import AboutPageFlipCards from "@/app/components/AboutPageFlipCards";
import Footer from "@/app/components/Footer";
import HeaderFirstPage from "@/app/components/HeaderFirst";
import HeaderSecondPage from "@/app/components/HeaderSecond";


export default function Home() {
  return (
    <>
      <AnimatedTestimonialsDemo/>
        <FlipCard/>

      <HeaderFirstPage/>
        <AboutPageFlipCards/>
        <Footer/>
        <HeaderSecondPage/>
    </>
  );
}
