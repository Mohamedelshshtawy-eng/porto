import { Canvas } from "@react-three/fiber";
import "./hero.css";
import Speech from "./Speech";
import { motion } from "motion/react";
import { Suspense } from "react";
import Shape from "./Shape";


const followVariants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const awardVarients = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};
const Hero = () => {
  return (
    <div className="hero">
      <div className="hSection left">
        {/* title */}
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="hTitle"
        >
          Hey There,
          <br />
          <span>Iam Mohamed</span>
        </motion.h1>
        {/* awards */}
        <motion.div
          variants={awardVarients}
          initial="initial"
          animate="animate"
          className="awards"
        >
          <motion.h2 variants={awardVarients}>Top Rated Programer</motion.h2>
          <motion.p variants={awardVarients}>
            Have skills in many languagh such as java js python and golang
          </motion.p>
          <motion.div variants={awardVarients} className="awardList">
            <motion.img variants={awardVarients} src="/award1.png" alt="" />
            <motion.img variants={awardVarients} src="/award2.png" alt="" />
            <motion.img variants={awardVarients} src="/award3.png" alt="" />
          </motion.div>
        </motion.div>
        <a href="/#services" className="scroll">
          <motion.svg
            animate={{ y: [0, 5], opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="scroll-down-icon"
            width="24"
            height="48"
            viewBox="0 0 24 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" stroke="#ddd" strokeWidth="2" />
            <path
              d="M12 16 L12 32"
              stroke="#ddd"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <polyline
              points="8,28 12,32 16,28"
              fill="none"
              stroke="#ddd"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </a>
      </div>
      <div className="hSection right">
        <motion.div
          variants={followVariants}
          initial="initial"
          animate="animate"
          className="follow"
        >
          <motion.a variants={followVariants} href="/">
            <img src="/instagram.png" alt="" />
          </motion.a>
          <motion.a variants={followVariants} href="/">
            <img src="/facebook.png" alt="" />
          </motion.a>
          <motion.a variants={followVariants} href="/">
            <img src="/youtube.png" alt="" />
          </motion.a>
          <motion.div variants={followVariants} className="followTextContainer">
            <motion.div
              initial={{ y: -100 }}
              animate={{ y: -20 }}
              className="followText"
            >
              Follow Me
            </motion.div>
          </motion.div>
        </motion.div>
        {/* bubble */}
        <Speech />
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="certificate"
        >
          <img src="/certificate.png" alt="" />
          Data analyst
          <br />
          Data scientest
          <br />
          Programer
        </motion.div>
        {/* conatct */}
        <motion.a
          animate={{ x: [200, 0], opacity: [0, 1] }}
          transition={{ duration: 2 }}
          href="/#contact"
          className="contactLink"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="contactButton"
          >
            <svg
              width="200"
              height="200"
              viewBox="0 0 300 300"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M150,150 m-100,0 a100,100 0 1,1 200,0 a100,100 0 1,1 -200,0"
                />
              </defs>
              <circle cx="150" cy="150" r="120" fill="pink" />
              <text className="circleText" fontSize="25">
                <textPath href="#circlePath" startOffset="25%">
                  Hire Now .
                </textPath>
              </text>
              <text className="circleText" fontSize="25">
                <textPath href="#circlePath" startOffset="70%">
                  Conatct Me .
                </textPath>
              </text>
            </svg>
            <div className="arrow">
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                fill="black"
              >
                <rect x="45" y="10" width="10" height="60" rx="5" />

                <polygon points="30,60 70,60 50,90" />
              </svg>
            </div>
          </motion.div>
        </motion.a>
      </div>
      <div className="bg">
        <Canvas>
          <Suspense fallback="loading...">
            <Shape/>
          </Suspense>
        </Canvas>
        <div className="hImg">
          <motion.img animate={{opacity:[0,1] ,y:[-200,0]}}  transition={{duration:1}} src="me.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
