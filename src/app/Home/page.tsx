import { Button } from "@/components/ui/button"
import HeroSection from "../component/HeroSection";
// import FeaturedCourses from "./component/FeaturedCourses";
import WhyChooseUs from "../component/WhyChooseUs";
import { InfiniteMovingCardsDemo } from "../component/InfiniteMovingCardsDemo";
import Navbar from "../component/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
         <Navbar />
       <HeroSection />
     {/* <FeaturedCourses />  */}
       <WhyChooseUs/> 
       <InfiniteMovingCardsDemo/> 
    </div>
  );
}
