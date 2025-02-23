import FlipCard from "@/app/components/FlipCards";
import HeaderFirstPage from "./components/HeaderFirst";
import {AnimatedTestimonialsDemo} from "@/app/components/animated-testimonials-demo";

export default function Home() {
  return (
    <>
      <div className={"bg-[#ebce89] font-built-titling"}>
        <div className={"hero-part bg-[url('/formbg.png')] bg-opacity-0 bg-cover bg-fixed"}>
        <HeaderFirstPage/>
          </div>
        <div className={"uppercase text-[2.6rem] text-[#2e1413] font-built-titling font-extrabold mt-5 text-center"}>
          claim prizes worth &#8377; 1 lakh! march 21-23, 2025
        </div>
      <AnimatedTestimonialsDemo/>
      <FlipCard/>
      </div>
    </>
  );
}
