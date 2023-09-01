import React from "react";

import {Image} from "@nextui-org/react";
import EliteCards from "./components/EliteCards";
import Navbar from "../../sruti/navbar/Navbar";
import TopFooter from "../../sruti/footer/TopFooter";
import Footer from "../../sruti/footer/Footer";


function FitnessPage() {
    return(
        <>
        <Navbar/>
        <div>
        <Image
        width={1600}
        alt="NextUI hero Image"
        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_1600,q_auto:eco,dpr_1,f_auto,fl_progressive/image/vm/5cca784e-085d-4660-9830-f99e61cb0b7a.png"
      /> 
      </div>
      <EliteCards/>
      <TopFooter/>
      <Footer/>
      </>
      
     
    )
    
}
export default FitnessPage;
