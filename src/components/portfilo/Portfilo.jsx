import { useEffect, useRef, useState } from "react";
import "./portfilo.css";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { rotate } from "three/tsl";
const items = [
  {
    id: 1,
    img: "/p1.jpg",
    title: "Full Stack development",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti veniam nobis alias, sequi doloribus adipisci facere error. Ex id eaque, eveniet rerum sit nulla vitae recusandae nostrum impedit, non hic!",
    link: "/",
  },
  {
    id: 2,
    img: "/p2.jpg",
    title: "Full Stack development",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti veniam nobis alias, sequi doloribus adipisci facere error. Ex id eaque, eveniet rerum sit nulla vitae recusandae nostrum impedit, non hic!",
    link: "/",
  },
  {
    id: 3,
    img: "/p3.jpg",
    title: "Full Stack development",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti veniam nobis alias, sequi doloribus adipisci facere error. Ex id eaque, eveniet rerum sit nulla vitae recusandae nostrum impedit, non hic!",
    link: "/",
  },
  {
    id: 4,
    img: "/p4.jpg",
    title: "Full Stack development",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti veniam nobis alias, sequi doloribus adipisci facere error. Ex id eaque, eveniet rerum sit nulla vitae recusandae nostrum impedit, non hic!",
    link: "/",
  },
  {
    id: 5,
    img: "/p5.jpg",
    title: "Full Stack development",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti veniam nobis alias, sequi doloribus adipisci facere error. Ex id eaque, eveniet rerum sit nulla vitae recusandae nostrum impedit, non hic!",
    link: "/",
  },
];
const imgVariant = {
  inital: {
    x: -500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};
const textVariant = {
  inital: {
    x: 500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.05,
    },
  },
};
const ListItem = ({ item }) => {
  const ref = useRef();
  const isView = useInView(ref, {
    margin: "-100px",
  });

  return (
    <div className="pItem" ref={ref}>
      <motion.div
        variants={imgVariant}
        animate={isView ? "animate" : "inital"}
        className="pImg"
      >
        <img src={item.img} alt="" />
      </motion.div>
      <motion.div
        variants={textVariant}
        animate={isView ? "animate" : "inital"}
        className="pText"
      >
        <motion.h1 variants={textVariant}>{item.title}</motion.h1>
        <motion.p variants={textVariant}>{item.desc}</motion.p>
        <motion.a variants={textVariant} href={item.link}>
          <button>View project</button>
        </motion.a>
      </motion.div>
    </div>
  );
};
const Portfilo = () => {
  const ref = useRef(null);
  const [containerDistance, setContainerDisatnce] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref });
  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -window.innerWidth * items.length]
  );
  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setContainerDisatnce(rect.left);
    }
  });
  return (
    <div className="portfilo" ref={ref}>
      <motion.div className="pList" style={{ x: xTranslate }}>
        <div
          className="empty"
          style={{ width: window.innerWidth - containerDistance }}
        />
        {items.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </motion.div>
      <section />
      <section />
      <section />
      <section />
      <div className="pProgress">
        <svg height="100%" width="100%" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#ddd"
            strokeWidth={20}
          />
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#dd4c62"
            strokeWidth={20}
            style={{pathLength:scrollYProgress}}
            transform="rotate(-90 80 80)"
          />
        </svg>
      </div>
      <section />
    </div>
  );
};

export default Portfilo;
