import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

export default function EliteCards() {
  return (
    <>
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-3 ">
    <div className="m-5">
    <Card className="max-w-[400px] bg-gray-800">
      <CardHeader className="justify-center text-gray-200 font-sans text-2xl">
            cultpass
        </CardHeader>
    
      <CardBody className="ml-16">
      <Image
          alt="nextui logo"
       
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_107,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cult-pass-elite-partial.png"
          width={200}
        />
      </CardBody>
      
      <CardFooter className="justify-center text-gray-400 text-2xl">
        Starting at $10 / month + taxes
      </CardFooter>
    </Card>
    </div>
    <div className="m-5">
    <Card className="max-w-[400px] ">
      <CardHeader className="justify-center text-gray-200 font-sans text-2xl">
            cultpass
        </CardHeader>
    
      <CardBody className="ml-16">
      <Image
          alt="nextui logo"
       
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_78,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass-pro-partial.png"
          width={150}
        />
      </CardBody>
      
      <CardFooter className="justify-center">
        Starting at $10 / month + taxes
      </CardFooter>
    </Card>
    </div>
    <div className="m-5">
    <Card className="max-w-[400px] ">
      <CardHeader className="justify-center">
            cultpass
        </CardHeader>
    
      <CardBody className="ml-16">
      <Image
          alt="nextui logo"
        
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_107,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cult-pass-elite-partial.png"
          width={200}
        />
      </CardBody>
      
      <CardFooter className="justify-center">
        Starting at $10 / month + taxes
      </CardFooter>
    </Card>
    </div>
    

    </div>
    </>
  );
}
