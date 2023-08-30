import React from "react";
import TShirtList from "./components/TShirtList";
import PantsList from "./components/PantsList";
import FootWear from "./components/FootWears";
import FAQ from "./components/FAQ";
import HeroSlider from "./components/HeroSlider";


function ProductPage(){
return( 
    <>
        <HeroSlider/>
        <TShirtList/>
        <PantsList/>
        <FootWear/>
        <FAQ/>
    
    </>

)

};

export default ProductPage;