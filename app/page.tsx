import Image from "next/image";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <Header/>
      <Hero/>
      <Footer/>

    </div>
  );
}
