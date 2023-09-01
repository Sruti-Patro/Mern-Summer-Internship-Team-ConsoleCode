import Home from "./Home";
import Well from "./Well";
import Static from "./Static";
import Navbar from "../components/sruti/navbar/Navbar";
import TopFooter from "../components/sruti/footer/TopFooter";
import Footer from "../components/sruti/footer/Footer";

export default function MainHome() {
  return (
    <div className="bg-black">
      <Navbar />
      <Home />
      <Well />
      <Static />
      <TopFooter/>
      <Footer/>
    </div>
  );
}
