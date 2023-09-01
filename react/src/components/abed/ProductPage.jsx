import React from "react";
import TShirtList from "./components/TShirtList";
import PantsList from "./components/PantsList";
import FootWear from "./components/FootWears";
import FAQ from "./components/FAQ";
import HeroSlider from "./components/HeroSlider";
import StoreNav from "../sruti/navbar/StoreNav";

function ProductPage(){
return( 
    <>
    <StoreNav/>
       <div>
       <HeroSlider/>
        <TShirtList/>
        <PantsList/>
        <FootWear/>
        <FAQ/>
       </div>
    
    </>

)

};

export default ProductPage;