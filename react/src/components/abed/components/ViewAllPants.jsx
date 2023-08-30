import React from "react";
import {Card, CardBody, CardFooter, CardHeader, Image} from "@nextui-org/react";
import HeroSlider from "./HeroSlider";
function ViewAllPants() {
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
        <HeroSlider/>
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
          {Plist.map((item, id) => (
            <a href={`/singleproduct/${id}`}>
            <div>
            <Card className="m-7"shadow="sm" key={id} isPressable onPress={() => console.log("item pressed")}>
              <CardBody className="overflow-visible p-0">
              <Image
             isZoomed
             width="100%"
             alt={item.title}
             src={item.img}
     />
              </CardBody>
              <CardFooter className="text-small justify-between">
                <b>{item.title}</b>
                <p className="text-default-500">{item.price}</p>
              </CardFooter>
            </Card>
            </div>
            </a>
          ))}
        </div>
        </>
      );
    }
export default ViewAllPants;