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

  return (
    <RadioGroup color="warning"
    label="Payment Methods:"
    >
      <CustomRadio value="phonepe UPI" description={"@ybl"}>
         Phonepe UPI
       </CustomRadio>
       <CustomRadio value="googlePayUPI" description={"@oksbi"}>
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