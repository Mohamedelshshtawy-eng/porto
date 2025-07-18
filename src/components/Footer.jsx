import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
const FooterVarient = {
  inital : {
   opacity:0,
   x:-100
  },
  animate:{
    opacity:1,
    x:0,
    transition:{
      duration:1
    }
  }
}
const Footer = () => {
  const ref = useRef()
  const isView = useInView(ref,{margin:"-100px"})
  return (
    <motion.footer
    ref={ref}
      variants={FooterVarient}
      animate={isView? "animate":"inital"}
      style={{
        width: "100%",
        fontSize: "25px",
        backgroundColor: "#5252b3",
        color: "white",
        textAlign: "center",
        padding: "5px 0 5px 0",
        borderRadius: "10px",
      }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <p className="mb-1">
          This design is not originally mine – it has been customized and
          modified for personal use.
        </p>
        <p className="text-gray-400">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
