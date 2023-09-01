import {Image,Card, CardBody} from "@nextui-org/react"
import Navbar from "../components/sruti/navbar/Navbar";
import TopFooter from "../components/sruti/footer/TopFooter";
import Footer from "../components/sruti/footer/Footer";

function Care() {
 
    return(
     < div className="bg-black">
           <Navbar/>
<h4 className="text-white font-bold  text-centre underline italic text-3xl pt-8 text-4xl">LAB TESTS</h4> 
<p className="text-3xl  text-blue-200  italic underline pb-8 text-red-200 text-2xl text-orange-200 animate-none ">Assess and monitor your health from the comfort of your home now.</p>

      <div className="flex w-full flex-wrap ">
        
      <div className="max-w-[600px] gap-0  grid-rows-2 px-20 ">
      <Card className="col-span-12 sm:col-span-4 h-[200px] ">
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center ">
          <div className="relative col-span-6 md:col-span-4 bg-amber-200 ">
            <Image
             isZoomed
              alt="Album cover"
              className="z-0 w-full h-full object-cover"
              height={200}
              shadow="md"
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/FitCheck_Magazine-02.png"
              width="100%"
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8 bg-amber-200">
            <div className="flex justify-between items-start ">
              <div className="flex flex-col gap-0 ">
              <h1 className="text-large font-medium mt-2  text-yellow-700  ">PRICE>>>$1900</h1>
                <h3 className="font-semibold text-foreground/90  pt-3 text-red-300">Offer Price>>>$990</h3>
               
              </div>
       </div>
       </div>
       </div>
       </CardBody> 
       </Card>

       </div>
       <div className="max-w-[600px] gap-0  grid-rows-2 px-20">
      <Card className="col-span-12 sm:col-span-4 h-[200px]">
    
  
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 md:col-span-4 bg-amber-200">
            <Image
             isZoomed
              alt="Album cover"
              className="z-0 w-full h-full object-cover"
              height={200}
              shadow="md"
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/mp/diag_pack_Vitamin_Profile_clp.jpg"
              width="100%"
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
              <h1 className="text-large font-medium mt-2  text-yellow-700  ">PRICE>>>$1000</h1>
                <h3 className="font-semibold text-foreground/90  pt-3 text-red-300">Offer Price>>>$750</h3>
              </div>
       </div>
       </div>
       </div>
       </CardBody>



       
       </Card>
       </div>

       <div className="max-w-[600px] gap-0  grid-rows-2 px-20 pt-7 ">
      <Card className="col-span-12 sm:col-span-4 h-[200px]  ">
    
  
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center ">
          <div className="relative col-span-6 md:col-span-4 bg-amber-200 ">
            <Image
             isZoomed
              alt="Album cover"
              className="z-0 w-full h-full object-cover"
              height={200}
              shadow="md"
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/diagnostics/screening-packs/sr_citizen_adv_m_mag.png"
              width="100%"
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8 bg-amber-200">
            <div className="flex justify-between items-start ">
              <div className="flex flex-col gap-0 ">
              <h1 className="text-large font-medium mt-2  text-yellow-700  ">PRICE>>>$3900</h1>
                <h3 className="font-semibold text-foreground/90  pt-3 text-red-300">Offer Price>>>$1990</h3>
              </div>
       </div>
       </div>
       </div>
       </CardBody>



       
       </Card>
       </div>



       <div className="max-w-[600px] gap-0  grid-rows-2 px-20 pt-7 ">
      <Card className="col-span-12 sm:col-span-4 h-[200px]  ">
    
  
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center ">
          <div className="relative col-span-6 md:col-span-4 bg-amber-200 ">
            <Image
             isZoomed
              alt="Album cover"
              className="z-0 w-full h-full object-cover"
              height={200}
              shadow="md"
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/mp/diag_pack_Thyroid_Screening_clp.jpg"
              width="100%"
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8 bg-amber-200">
            <div className="flex justify-between items-start ">
              <div className="flex flex-col gap-0 ">
              <h1 className="text-large font-medium mt-2  text-yellow-700  ">PRICE>>>$900</h1>
                <h3 className="font-semibold text-foreground/90  pt-3 text-red-300">Offer Price>>>$550</h3>
              </div>
       </div>
       </div>
       </div>
       </CardBody>



       
       </Card>
       </div>


       <div className="max-w-[600px] gap-0  grid-rows-2 px-20 pt-7 ">
      <Card className="col-span-12 sm:col-span-4 h-[200px]  ">
    
  
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center ">
          <div className="relative col-span-6 md:col-span-4 bg-amber-200 ">
            <Image
             isZoomed
              alt="Album cover"
              className="z-0 w-full h-full object-cover"
              height={200}
              shadow="md"
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/diagnostics/screening-packs/sr_citizen_adv_f_mag.png"
              width="100%"
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8 bg-amber-200">
            <div className="flex justify-between items-start ">
              <div className="flex flex-col gap-0 ">
              <h1 className="text-large font-medium mt-2  text-yellow-700  ">PRICE>>>$3900</h1>
                <h3 className="font-semibold text-foreground/90  pt-3 text-red-300">Offer Price>>>$1990</h3>
              </div>
       </div>
       </div>
       </div>
       </CardBody>



       
       </Card>
       </div>


       <div className="max-w-[600px] gap-0  grid-rows-2 px-20 pt-7 ">
      <Card className="col-span-12 sm:col-span-4 h-[200px]  ">
    
  
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center ">
          <div className="relative col-span-6 md:col-span-4 bg-amber-200 ">
            <Image
             isZoomed
              alt="Album cover"
              className="z-0 w-full h-full object-cover"
              height={200}
              shadow="md"
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/IronScreeningClp122020.png"
              width="100%"
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8 bg-amber-200">
            <div className="flex justify-between items-start ">
              <div className="flex flex-col gap-0 ">
              <h1 className="text-large font-medium mt-2  text-yellow-700  ">PRICE>>>$890</h1>
                <h3 className="font-semibold text-foreground/90  pt-3 text-red-300">Offer Price>>>$750</h3>
              </div>
       </div>
       </div>
       </div>
       </CardBody>



       
       </Card>
       </div>


       <div className="max-w-[600px] gap-0  grid-rows-2 px-20 pt-7 ">
      <Card className="col-span-12 sm:col-span-4 h-[200px]  ">
    
  
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center ">
          <div className="relative col-span-6 md:col-span-4 bg-amber-200 ">
            <Image
             isZoomed
              alt="Album cover"
              className="z-0 w-full h-full object-cover"
              height={200}
              shadow="md"
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/diagnostics/screening-packs/WorkoutWellness_men_magazine_web2.png"
              width="100%"
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8 bg-amber-200">
            <div className="flex justify-between items-start ">
              <div className="flex flex-col gap-0 ">
              <h1 className="text-large font-medium mt-2  text-yellow-700  ">PRICE>>>$4900</h1>
                <h3 className="font-semibold text-foreground/90  pt-3 text-red-300">Offer Price>>>$2990</h3>
              </div>
       </div>
       </div>
       </div>
       </CardBody>



       
       </Card>
       </div>


       <div className="max-w-[600px] gap-0  grid-rows-2 px-20 pt-7 ">
      <Card className="col-span-12 sm:col-span-4 h-[200px]  ">
    
  
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center ">
          <div className="relative col-span-6 md:col-span-4 bg-amber-200 ">
            <Image
             isZoomed
              alt="Album cover"
              className="z-0 w-full h-full object-cover"
              height={200}
              shadow="md"
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/ImmunityCcreening_Magazine.png"
              width="100%"
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8 bg-amber-200">
            <div className="flex justify-between items-start ">
              <div className="flex flex-col gap-0 ">
              <h1 className="text-large font-medium mt-2  text-yellow-700  ">PRICE>>>$600</h1>
                <h3 className="font-semibold text-foreground/90  pt-3 text-red-300">Offer Price>>>$372</h3>
              </div>
       </div>
       </div>
       </div>
       </CardBody>
       </Card>
       </div>


       <div className="max-w-[600px] gap-0  grid-rows-2 px-20 pt-7 ">
      <Card className="col-span-12 sm:col-span-4 h-[200px]  ">
    
  
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center ">
          <div className="relative col-span-6 md:col-span-4 bg-amber-200 ">
            <Image
             isZoomed
              alt="Album cover"
              className="z-0 w-full h-full object-cover"
              height={200}
              shadow="md"
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/Alcohol_magazine.png"
              width="100%"
              width="100%"
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8 bg-amber-200">
            <div className="flex justify-between items-start ">
              <div className="flex flex-col gap-0 ">
              <h1 className="text-large font-medium mt-2  text-yellow-700  ">PRICE>>>$4900</h1>
                <h3 className="font-semibold text-foreground/90  pt-3 text-red-300">Offer Price>>>$2990</h3>
              </div>
       </div>
       </div>
       </div>
       </CardBody>



       
       </Card>
       </div>


       <div className="max-w-[600px] gap-0  grid-rows-2 px-20 pt-7 ">
      <Card className="col-span-12 sm:col-span-4 h-[200px]  ">
    
  
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center ">
          <div className="relative col-span-6 md:col-span-4 bg-amber-200 ">
            <Image
             isZoomed
           
              alt="Album cover"
              className="z-0 w-full h-full object-cover"
              height={200}
              shadow="md"
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/HairFallScreeningClp122019.png"
             
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8 bg-amber-200">
            <div className="flex justify-between items-start ">
              <div className="flex flex-col gap-0 ">
              <h1 className="text-large font-medium mt-2  text-yellow-700  ">PRICE>>>$11900</h1>
                <h3 className="font-semibold text-foreground/90  pt-3 text-red-300">Offer Price>>>$9190</h3>
              </div>
       </div>
       </div>
       </div>
       </CardBody>



       
       </Card>
       </div>





       </div>
       <TopFooter/>
       <Footer/>
       </div>
       
       
       )
    }
       export default Care;
