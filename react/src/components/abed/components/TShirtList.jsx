import React from "react";
import {Card, CardBody, CardFooter, CardHeader, Image} from "@nextui-org/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Link} from "@nextui-org/react";
import Product from "./FAQ";
import { NavLink } from 'react-router-dom';


function TShirtList() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 2551 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 2550, min: 1021 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1020, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
     
  const Tlist = [
    {
      id:1,
      title: "Odour-Resistant Running t-shirt",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
      img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/wFdGUmoYyELyg9MRcfkDmxho",
      price: "$5.50",
      category:"Men",

    },
    {
      id:2,
      title: "Melange Performance t-shirt",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
      img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/47njzyY5GJRtpbTErqsU2J83",
      price: "$3.00",
      category:"Men",
    },
    {
      id:3,
      title: "Graphic Print Running t-shirt",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
      img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/yV8P8U7Pd33zphikQRXZDn1h",
      price: "$10.00",
      category:"Men",
    },
    {
      id:4,
      title: "Graphic Print Training t-shirt",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
      img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/PHx7skZy3gMFConddxgqiDLq",
      price: "$5.30",
      category:"Women",
    },
    {
      id:5,
      title: "Graphic Print Running t-shirt",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
      img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/rfPRcj3bf6E2a7S3ME1Astnu",
      price: "$15.70",
      category:"Men",
    },
    {
      id:6,
      title: "typographic Print Everday t-shirt",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
      img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/HGHgcWBe9Pxf1CrK7nMaFuZA",
      price: "$8.00",
      category:"Women",
    },
    {
      id:7,
      title: "Graphic Print Performance T-shirt",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
      img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/NsRHkXxkZmsQvcyuFZi2AkJd",
      price: "$7.50",
      category:"Men",
    },
    {
      id:8,
      title: "Logo Print Yoga t-shirt",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
      img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/bs5jnZMizNCcMgUBxXpkN44Q",
      price: "$12.20",
      category:"Men",
    },
  ];

  return (
    <>
    <div className="text-left" >
        <h1 className="text-2xl font-mono">T-SHIRTS</h1>
      <a href="/tshirt" className="md:text-red-400 hover:text-red-600">View All</a>
      
    </div>
  <Carousel responsive={responsive}>
    
    {Tlist.map((item, id) => {
      return(
        <a href={`/singleproduct/${id}`}>
     
  <div>
   
      <Card className="m-3" key={Tlist.id} isPressable onPress={() => console.log("item pressed")}>
        <CardBody className="overflow-visible p-0">
            <Image
             isZoomed
             width="100%"
             alt={item.title}
             src={item.img}
     />
         </CardBody>
         <CardFooter className="text-small justify-between h-20">
           <b>{item.title}</b>
           <p className="text-default-500">{item.price}</p>
         </CardFooter>
       </Card>

       </div>
       </a>
      //  </NavLink>
      )
      })}
  </Carousel>
  </>
  );
}

export default TShirtList;


 
   