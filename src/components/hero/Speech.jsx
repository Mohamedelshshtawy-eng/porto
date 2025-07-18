import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";
const Speech = () => {
  return (
    <motion.div
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
      className="bubbleContainer"
    >
      <div className="bubble">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Hello My Name Mohamed Elshshtawy",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "Graduated From Faculty Of Science",
            1000,
            "Worke As Programer And Chemist",
            1000,
            "And Have A Diploma As Chimst And Biologist Teacher ",
            1000,
            "And Data Anlayst And Mobile Developer",
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={20}
          // style={{ fontSize: '25px', display: 'inline-block' }}
          repeat={Infinity}
        />
      </div>
      <img src="/man.png" alt="" />
    </motion.div>
  );
};

export default Speech;
