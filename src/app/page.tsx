import { Button } from "@/components/ui/button"
import { Login } from "./login/page";
import HeroSection from "./component/HeroSection";
// import FeaturedCourses from "./component/FeaturedCourses";
import WhyChooseUs from "./component/WhyChooseUs";
import { InfiniteMovingCardsDemo } from "./component/InfiniteMovingCardsDemo";

export default function Home() {
  return (
    <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
       {/* <HeroSection />
      {/* <FeaturedCourses /> */}
      {/* <WhyChooseUs/> */}
      {/* <InfiniteMovingCardsDemo/>  */}
      <Login/>
    </div>
  );
}
