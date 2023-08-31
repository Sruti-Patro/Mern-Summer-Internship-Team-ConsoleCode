import React, { useState } from "react";
import {Input} from "@nextui-org/react";
import './Address.css'
import { motion } from 'framer-motion';
// import {RadioGroup, Radio} from "@nextui-org/react";

function Address() {
function Email() {
  const [value, setValue] = React.useState(""); //change if array is present
  const validateEmail = (value) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const validationState = React.useMemo(() => {
    if (value === "") return undefined;

    return validateEmail(value) ? "valid" : "invalid";
  }, [value]);

  return (
    <Input
      value={value}
      isRequired
      type="email"
      label="Email"
      variant="bordered"
      color={validationState === "invalid" ? "danger" : "success"}
      errorMessage={validationState === "invalid" && "Please enter a valid email"}
      validationState={validationState}
      onValueChange={setValue}
      className="email"
    />
  );
}

function FullName() {
    const [value, setValue] = React.useState(""); //change if array is present

//   const validateName = (value) => value.match(/^[A-Z0-9._]$/i);

  const validationState = React.useMemo(() => {
    if (value === "") return undefined;

    return "valid";
  }, [value]);

  return (
    <Input
      value={value}
      isRequired
      type="text"
      label="FullName"
      variant="bordered"
      color={validationState === "invalid" ? "danger" : "success"}
      errorMessage={validationState === "invalid" && "Please Enter a Name"}
      validationState={validationState}
      onValueChange={setValue}
      className="fullname"
    />
  );
}

function PhoneNumber() {
    const [value, setValue] = React.useState(""); //change if array is present

  const validateNumber = (value) => value.match(/^[0-9]{10,11}$/i);

  const validationState = React.useMemo(() => {
    if (value === "") return undefined;

    return validateNumber(value) ? "valid" : "invalid";
  }, [value]);

  return (<>
    <Input
      value={value}
      isRequired
      type="text"
      label="PhoneNumber"
      variant="bordered"
      color={validationState === "invalid" ? "danger" : "success"}
      errorMessage={validationState === "invalid" && "Please enter a valid number"}
      validationState={validationState}
      onValueChange={setValue}
      className="phonenumber"
    />
    </>
  );
}

function PinCode() {
    const [value, setValue] = React.useState(""); //change if array is present

  const validatePin = (value) => value.match(/^[[0-9]{6,7}$/i);

  const validationState = React.useMemo(() => {
    if (value === "") return undefined;

    return validatePin(value) ? "valid" : "invalid";
  }, [value]);

  return (
    <Input
      value={value}
      isRequired
      type="text"
      label="Pincode"
      variant="bordered"
      color={validationState === "invalid" ? "danger" : "success"}
      errorMessage={validationState === "invalid" && "Please enter a valid email"}
      validationState={validationState}
      onValueChange={setValue}
      className="pincode"
    />
  );
}

function Add() {
    const [value, setValue] = React.useState(""); //change if array is present

    // const validateAddress = (value) => value.match(/^[A-Z0-9._,/-]$/i);
  
    const validationState = React.useMemo(() => {
      if (value === "") return undefined;
  
      return "valid" ;
    }, [value]);
  
    return (
      <Input
        value={value}
        isRequired
        type="text"
        label="Address"
        variant="bordered"
        color={validationState === "invalid" ? "danger" : "success"}
        errorMessage={validationState === "invalid" && "Please Enter a Name"}
        validationState={validationState}
        onValueChange={setValue}
        className="address"
      />
    );
}


  return(
    <><motion.div initial="hidden" animate="visible" variants={{
      hidden: {
        scale: .8,
        opacity: 0
      },
      visible: {
        scale: 1,
        opacity: 1,
        transition: {
          delay: 1
        }
      },
    }}>
       <div style={{padding: '20px'}}><FullName/></div>
    </motion.div>
    
    <div className="in" style={{padding: '20px'}}><PhoneNumber/><PinCode/></div>
    <div style={{padding: '20px'}}><Email/></div>
    <div style={{padding: '20px'}}><Add/></div>
    </>
    
  )
}
export default Address;