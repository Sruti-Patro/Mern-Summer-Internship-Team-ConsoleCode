// import React from "react";
// import './Payment.css';
// import {RadioGroup, Radio} from "@nextui-org/react";

// function Option() {
//   return (
    
//     <RadioGroup
//       label="Select your Payment Method"
//       color="danger"
//       defaultValue="CoD"
//     >
//       <Radio value="phonepe UPI" description={"The capital of Argentina"+"@ybl"}>
//         Phonepe UPI
//       </Radio>
//       <Radio value="googlePayUPI" description={"The capital of Australia"+"@oksbi"}>
//         Google Pay UPI
//       </Radio>
//       <Radio value="CDA" description="Add and secure your card as per RBI guidelines">
//         Credit / Debit / ATM Card
//       </Radio>
//       <Radio value="NB" description="This instrument has low success, use UPI or cards for better experience">
//         Net Banking
//       </Radio>
//       <Radio value="CoD" >
//         Cash on Delivery
//       </Radio>
//     </RadioGroup>
//   );
// }

// function PriceDetail() {
    
// }
// function Payment() {
//   return(<>
//     <Option/>
//     </>
//   )
// }
// export default Payment;




import React from "react";
import {RadioGroup, Radio, cn} from "@nextui-org/react";

export const CustomRadio = (props) => {
  const {children, ...otherProps} = props;

  return (
    <Radio
      {...otherProps}
      classNames={{
        base: cn(
          "inline-flex m-0 bg-stone-50 hover:bg-violet-600 active:bg-violet-700 items-center justify-between",
          "flex-row-reverse max-w-[100] cursor-pointer rounded-lg gap-4 p-4 border-1 border-transparent",
          "data-[selected=true]:border-warning"
        ),
      }}
    >
      {children}
    </Radio>
  );
};

function Payment() {
  const [selected, setSelected] = React.useState("");
  return (
    <RadioGroup color="warning"
    value={selected}
        onValueChange={setSelected}
    >
      <CustomRadio value="phonepe UPI" description={"The capital of Argentina"+"@ybl"}>
         Phonepe UPI
       </CustomRadio>
       <CustomRadio value="googlePayUPI" description={"The capital of Australia"+"@oksbi"}>
         Google Pay UPI
       </CustomRadio>
       <CustomRadio value="CDA" description="Add and secure your card as per RBI guidelines">
         Credit / Debit / ATM Card
       </CustomRadio>
       <CustomRadio value="NB" description="This instrument has low success, use UPI or cards for better experience">
         Net Banking
       </CustomRadio>
       <CustomRadio value="CoD" >
         Cash on Delivery
       </CustomRadio>
    </RadioGroup>
  );
}


export default Payment;