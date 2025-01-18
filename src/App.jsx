import Hero from "./components/Hero";
import BookingTimer from "./components/BookingTimer";
import HighLight from "./components/HighLight";
import ProofInSlide from "./components/ProofInSlide";
import Brands from "./components/Brands";
import Testimonials from "./components/Testimonials";
import Tips from "./components/Tips";
import Calendly from "./components/Calendly";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RectangleOverlay from "./assets/rectangle_overlay.webp";


export default function App() {
  return (
    <>
      <div className="w-full" style={{
        backgroundImage: `url(${RectangleOverlay})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
          <Hero />
        <BookingTimer />
        <HighLight />
        <ProofInSlide />
      </div>
      
      <Brands />
      <Testimonials />
      <Calendly />
      <Tips />
      <Faqs />
      <Footer />
    </>
  );
}
