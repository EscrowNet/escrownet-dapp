import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="w-full h-[100vh] overflow-hidden relative bg-[#F5F5F5]">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}
