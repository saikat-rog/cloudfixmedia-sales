import Hero from "./components/Hero";
import BookingTimer from './components/BookingTimer';

export default function App() {
  return (
    <>
      <Hero/>
      <BookingTimer targetDate="2024-12-31T23:59:59"/>
    </>
  )
}