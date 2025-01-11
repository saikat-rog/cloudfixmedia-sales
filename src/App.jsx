import Hero from "./components/Hero";
import BookingTimer from './components/BookingTimer';
import HighLight from './components/HighLight';
import ProofInSlide from './components/ProofInSlide';
import Brands from './components/Brands';
import Testimonials from './components/Testimonials';
import Tips from './components/Tips';
import Faqs from './components/Faqs';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App() {
  return (
    <>
      <Hero/>
      <HighLight/>
      <BookingTimer targetDate="2024-12-31T23:59:59"/>
      <ProofInSlide/>
      <Brands/>
      <Testimonials/>
      <Tips/>
      <Faqs/>
    </>
  )
}