import React from "react";
import {Card, CardBody, CardFooter, CardHeader, Image} from "@nextui-org/react";
import HeroSlider from "./HeroSlider";
function ViewAllFootWear() {
    const Flist = [
        {
            id:1,
            title: "Active Men Running Shoes",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
            img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/vzC6KzxUrPC5U2rvcfck1qfe",
            price: "$5.50",
            category:"Men",
          },
          {
            id:2,
            title: "X1 Men Training Shoes",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
            img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/A5zHEXStvFKHc8H8NFUg2FpG",
            price: "$3.00",
            category:"Men",
          },
          {
            id:3,
            title: "Flomo Men Running Shoes",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
            img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/X2aMtdY5VkXDT9CCWkGj8JXy",
            price: "$10.00",
            category:"Men",
          },
          {
            id:4,
            title: "Windblazer Men Running Shoe",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
            img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/rDJN48sJ2WYbCn9SBHSFggZc",
            price: "$5.30",
            category:"Men",
          },
          {
            id:5,
            title: "X1 Women Training Shoes",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
            img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/DjLjUrxWhPEXjbWXrxBPmbit",
            price: "$15.70",
            category:"Women",
          },
          {
            id:6,
            title: "X1 Men Training Shoes",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
            img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/Mwr3NB9m7fDyxYD7jPeAFQKe",
            price: "$8.00",
            category:"Men",
          },
          {
            id:7,
            title: "Avant Men's Ultra Light Running and Training Shoes - Grey",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
            img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/5sHoEZg9p6WK69BR4XLPrnPQ",
            price: "$7.50",
            category:"Men",
          },
          {
            id:8,
            title: "Crosstrain Men Training Shoes",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
            img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/n5KdCxCpmsr4pnmutKqqnFPe",
            price: "$12.20",
            category:"Men",
          },
          {
            id:1,
            title: "Active Men Running Shoes",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
            img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/vzC6KzxUrPC5U2rvcfck1qfe",
            price: "$5.50",
            category:"Men",
          },
          {
            id:2,
            title: "X1 Men Training Shoes",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
            img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/A5zHEXStvFKHc8H8NFUg2FpG",
            price: "$3.00",
            category:"Men",
          },
          {
            id:3,
            title: "Flomo Men Running Shoes",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
            img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/X2aMtdY5VkXDT9CCWkGj8JXy",
            price: "$10.00",
            category:"Men",
          },
          {
            id:4,
            title: "Windblazer Men Running Shoe",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
            img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/rDJN48sJ2WYbCn9SBHSFggZc",
            price: "$5.30",
            category:"Men",
          },
          {
            id:5,
            title: "X1 Women Training Shoes",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
            img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/DjLjUrxWhPEXjbWXrxBPmbit",
            price: "$15.70",
            category:"Women",
          },
          {
            id:6,
            title: "X1 Men Training Shoes",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
            img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/Mwr3NB9m7fDyxYD7jPeAFQKe",
            price: "$8.00",
            category:"Men",
          },
          {
            id:7,
            title: "Avant Men's Ultra Light Running and Training Shoes - Grey",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
            img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/5sHoEZg9p6WK69BR4XLPrnPQ",
            price: "$7.50",
            category:"Men",
          },
          {
            id:8,
            title: "Crosstrain Men Training Shoes",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
            img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/n5KdCxCpmsr4pnmutKqqnFPe",
            price: "$12.20",
            category:"Men",
          },
          {
            id:1,
            title: "Active Men Running Shoes",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
            img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/vzC6KzxUrPC5U2rvcfck1qfe",
            price: "$5.50",
            category:"Men",
          },
          {
            id:2,
            title: "X1 Men Training Shoes",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
            img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/A5zHEXStvFKHc8H8NFUg2FpG",
            price: "$3.00",
            category:"Men",
          },
          {
            id:3,
            title: "Flomo Men Running Shoes",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
            img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/X2aMtdY5VkXDT9CCWkGj8JXy",
            price: "$10.00",
            category:"Men",
          },
          {
            id:4,
            title: "Windblazer Men Running Shoe",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
            img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/rDJN48sJ2WYbCn9SBHSFggZc",
            price: "$5.30",
            category:"Men",
          },
          {
            id:5,
            title: "X1 Women Training Shoes",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
            img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/DjLjUrxWhPEXjbWXrxBPmbit",
            price: "$15.70",
            category:"Women",
          },
          {
            id:6,
            title: "X1 Men Training Shoes",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
            img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/Mwr3NB9m7fDyxYD7jPeAFQKe",
            price: "$8.00",
            category:"Men",
          },
          {
            id:7,
            title: "Avant Men's Ultra Light Running and Training Shoes - Grey",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
            img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/5sHoEZg9p6WK69BR4XLPrnPQ",
            price: "$7.50",
            category:"Men",
          },
          {
            id:8,
            title: "Crosstrain Men Training Shoes",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
            img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/n5KdCxCpmsr4pnmutKqqnFPe",
            price: "$12.20",
            category:"Men",
          },
      ];
    return (
            <>
                <HeroSlider/>
            
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
          {Flist.map((item, index) => (
            <Card className="m-7"shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
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
          ))}
        </div>
    </>
      );
    }
export default ViewAllFootWear;