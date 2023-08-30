import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";
import {Link} from "@nextui-org/react";


export default function FAQ() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <>
    
    <div className="text-left" >
        <h1 className="text-2xl font-mono">FAQ</h1>
        </div>
        <div className="text-right">
      <Link className=" md:text-red-400 hover:text-red-600" href="#">View All</Link></div>

    <Accordion
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            height: "auto",
            transition: {
              height: {
                type: "spring",
                stiffness: 500,
                damping: 30,
                duration: 1,
              },
              opacity: {
                easings: "ease",
                duration: 1,
              },
            },
          },
          exit: {
            y: -10,
            opacity: 0,
            height: 0,
            transition: {
              height: {
                easings: "ease",
                duration: 0.25,
              },
              opacity: {
                easings: "ease",
                duration: 0.3,
              },
            },
          },
        },
      }}
    >
      <AccordionItem key="1" aria-label="What is cultsport and what does it offer?" title="What is cultsport and what does it offer?">
      Cultsport from the house of cure.fit aims to make health easy by providing smart fitness products for the everyday athlete.  Designed to give you the best workout experience, the cultsport product range includes sportswear, at-home workout equipments, bicycles & nutraceutical.
      </AccordionItem>
      <AccordionItem key="2" aria-label="What makes cultsport special?" title="What makes cultsport special?">
      cultsport has a wide range of smart fitness products across categories. Each of the products is crafted to create you workout exprience better. Be it the moisture-wicking technology in our apparel, extra soft and light insole in our footwear, smart tracking in the outdoor cycle or progress tracker in our home equipment. cultsport aims to give you products that look good and have even better quality. With our post-sale assembly & installation service, we make sure you have a delightful experience from when you add to cart till when it's delivered.
      </AccordionItem>
      <AccordionItem key="3" aria-label="What kind of payments do we accept?" title="What kind of payments do we accept?">
      We accept payments through credit/debit cards, net banking, UPI and wallet.
      </AccordionItem>
    </Accordion>
    </>
  );
}
