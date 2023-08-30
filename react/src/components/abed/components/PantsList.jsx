import React from "react";
import {Card, CardBody, CardFooter, CardHeader, Image} from "@nextui-org/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Link} from "@nextui-org/react";
import Product from "./FAQ";
import { NavLink } from 'react-router-dom';


function PantsList() {
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
     
  const Plist = [
    {
      id:1,
      title: "Seamless Jacquard Tights",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
      img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/rjw9oJAvgPcGVR5xra33FsCc",
      price: "$5.50",
      category:"Women", 
    },
    {
      id:2,
      title: "Solid High Waist Straight Pants with Pockets",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
      img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/YiUo6vKjXEd5x1vVRn37Dacy",
      price: "$3.00",
      category:"Women", 
    },
    {
      id:3,
      title: "Seamless Form Leggings",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
      img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/u79gUGd8psjnBKBUpoKtR9y8",
      price: "$10.00",
      category:"Women", 
    },
    {
      id:4,
      title: "AbsoluteFit Essential Black Tights With Pockets",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
      img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/QtuoG2UHSKtq84Spp5b3kT73",
      price: "$5.30",
      category:"Women", 
    },
    {
      id:5,
      title: "Solid High Waist Straight Pants with Pocket",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
      img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/ktrLkpbz1fkQyeCr9JrTqYgC",
      price: "$15.70",
      category:"Women", 

    },
    {
      id:6,
      title: "Seamless Squat Proof Leggings",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
      img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/LXiuSHLgWXm7Kfq8Atce3WKK",
      price: "$8.00",
      category:"Women", 

    },
    {
      id:7,
      title: "AbsoluteFit Abstract Print Tights",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
      img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/ay58KZVzaorEZCrbV7KBmpQ2",
      price: "$7.50",
      category:"Women", 

    },
    {
      id:8,
      title: "Floral Ombre Yoga Tights with Side Pocket",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
      img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/rfSpSusUV7WwZ8B7iDMMsovQ",
      price: "$12.20",
      category:"Women", 

    },
  ];

  return (
    <>
    <div className="text-left" >
        <h1 className="text-2xl font-mono">TIGHTS</h1>
        <a href="/tights" className="md:text-red-400 hover:text-red-600">View All</a>
      
    </div>
  <Carousel responsive={responsive}>
    
    {Plist.map((item, id) => (
      <a href={`/singleproduct/${id}`}>
  <div>
      <Card className="m-3" shadow="sm" key={Plist.id} isPressable onPress={() => console.log("item pressed")}>
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
     ))}
  </Carousel>
  </>
    );
}

export default PantsList;


 
   