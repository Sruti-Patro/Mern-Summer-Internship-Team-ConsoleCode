import { useState } from "react";
import { Stepper } from "react-form-stepper";
import "./Maincart.css";
import { Button } from "@nextui-org/react";
import Payment from "./Payment";
import Address from "./Address";
import { motion } from "framer-motion";

function CustomStepper(props) {
  return (
    <Stepper
      {...props}
      connectorStateColors={true}
      connectorStyleConfig={{
        completedColor: "#ffbd13",
        activeColor: "#ffbd13",
        disabledColor: "#eee",
      }}
      styleConfig={{
        activeBgColor: "#ffd813",
        completedBgColor: "#ffbd13",
        inactiveBgColor: "#eee",
        activeTextColor: "#111",
        completedTextColor: "#222",
        inactiveTextColor: "#444",
      }}
    />
  );
}

function Maincart() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { label: "User details", onClick: () => setActiveStep(0) },
    // { label: 'Order Details' },
    { label: "Payment", onClick: () => setActiveStep(1) },
    { label: "Booking confirmation" },
  ];

  function UserDetails() {
    return (
      <>
        <div style={{ padding: "20px" }}>
          <h1>User Details</h1>
        </div>
        <Address />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 4,
              },
            },
          }}
        >
          <div className="bot" style={{ padding: "20px" }}>
            <Button
              color="warning"
              variant="ghost"
              onClick={() => setActiveStep(activeStep + 1)}
            >
              Submit&Proceed
            </Button>
          </div>
        </motion.div>
      </>
      //should call the address
    );
  }

  function Paymentpage() {
    return (
      <>
        <Payment />
        <div className="bot" style={{ padding: "20px" }}>
          <Button
            color="warning"
            variant="ghost"
            onClick={() => setActiveStep(activeStep + 1)}
          >
            Confirm
          </Button>
        </div>
      </>
    );
    //should call the payment
  }

  function Confirmation() {
    return (
      <>
        <h2>Booking is confirmed</h2>
      </>
    );
  }
  function getSectionComponent() {
    switch (activeStep) {
      case 0:
        return <UserDetails />;
      case 1:
        return <Paymentpage />;
      case 2:
        return <Confirmation />;
      default:
        return null;
    }
  }

  return (
    <div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.5,
            },
          },
        }}
      >
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 1,
                },
              },
            }}
          >
            <CustomStepper steps={steps} activeStep={activeStep} />
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 1.5,
                },
              },
            }}
          >
            <div style={{ padding: "20px" }}>{getSectionComponent()}</div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
export default Maincart;
