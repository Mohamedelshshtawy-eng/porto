import { useRef, useState } from "react";
import ComputerContainer from "./computer/ComputerContainer";
import { Counter } from "./Counter";
import "./services.css";
import { motion, useInView } from "motion/react";
import IphoneContainer from "./iphone/IphoneContainer";
import BookContainer from "./book/BookContainer";
const textVarient = {
  inital: {
    x: -100,
    y: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};
const ListVariant = {
  inital: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};
const services = [
  {
    id: 1,
    img: "/service1.png",
    title: "Programing",
    counter: 35,
  },
  {
    id: 2,
    img: "/service2.png",
    title: "Mobile Application",
    counter: 23,
  },
  {
    id: 3,
    img: "/service3.png",
    title: "Data science",
    counter: 35,
  },
];
const Services = () => {
  const [currentServce, setCurrentServce] = useState(1);
  const ref = useRef();
  const isView = useInView(ref, {
    margin: "-200px",
  });
  return (
    <div className="services" ref={ref}>
      <div className="sSection left">
        <motion.h1
          variants={textVarient}
          animate={isView ? "animate" : "inital"}
          className="sTitle"
        >
          How do I help?
        </motion.h1>
        <motion.div
          variants={ListVariant}
          animate={isView ? "animate" : "inital"}
          className="serviceList"
        >
          {services.map((service) => (
            <div
              className="section"
              key={service.id}
              onClick={() => setCurrentServce(service.id)}
            >
              <div className="serviceIcon">
                <img src={service.img} alt="" />
              </div>
              <div className="serviceInfo">
                <h2>{service.title}</h2>
                <h3>{service.counter}</h3>
              </div>
            </div>
          ))}
        </motion.div>
        <div className="counterList">
          <Counter from={0} to={104} text="Project Completed" />
          <Counter from={0} to={72} text="Happy Client" />
        </div>
      </div>
      <div className="sSection right">
        {/* <ComputerContainer/>
        <IphoneContainer/>
        <BookContainer/> */}
        {currentServce === 1 ? (
          <ComputerContainer />
        ) : currentServce === 2 ? (
          <IphoneContainer />
        ) : (
          <BookContainer />
        )}
      </div>
    </div>
  );
};

export default Services;
