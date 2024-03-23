import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Hero from "./beranda/Hero";
import About from "./beranda/About";
import Program from "./beranda/Program";
import Article from "./beranda/Article";
import AboutWakaf from "./beranda/AboutWakaf";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Program />
      <Article />
      <AboutWakaf />
      <Footer />
    </>
  );
}
