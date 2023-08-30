import React from "react";
import {Card, CardBody, CardFooter, CardHeader, Image} from "@nextui-org/react";
import HeroSlider from "./HeroSlider";
function ViewAllTshirt() {
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
        <HeroSlider/>
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
          {Tlist.map((item, index) => (
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
export default ViewAllTshirt;