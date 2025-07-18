import { useRef, useState } from "react";
import "./contact.css";
import emailjs from '@emailjs/browser';
import { useInView } from "motion/react";
import {motion} from "motion/react"
import CoontactSvg from "./SvgApp";
import SvgApp from "./SvgApp";
import Footer from "../Footer";
const formVariant = {
  initial: {
   x:100,
   opacity:0
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:0.5,
      staggerChildren:0.2
    }
  }
}
const Contact = () => {
  const [success,setSucess] = useState(false)
  const [error,setError] = useState(false)
  const form = useRef();
  const isView = useInView(form,{margin:"-200px"})

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_btxve8r', 'template_j7xq83u', form.current, {
        publicKey: 'DeJ_7W1qhextRAK5D',
        
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSucess(true)
          setError(false)
        },
        (error) => {
          console.log('FAILED...', error.text);
          setError(true)
          setSucess(false)
        },
      );
  };
  return (
    <div className="contact">
       <div className="one">
        <div className="cSection">
        <motion.form variants={formVariant} animate={isView?"animate":"initial"} ref={form} onSubmit={sendEmail}>
          <h1>Lets keep in touch</h1>
         <motion.div variants={formVariant}  className="formItem">
           <label htmlFor="name">Name</label>
          <input id="name" name="user_name" type="text" placeholder="Mohamed" />
         </motion.div>
         <motion.div variants={formVariant} className="formItem">
         <label htmlFor="email">Email</label>
          <input id="email" name="user_email" type="text" placeholder="Mohamed@gmail.com" />
         </motion.div>
         <motion.div variants={formVariant} className="formItem">
            <label htmlFor="message">Message</label>
          <textarea name="message" id="message" placeholder="Write your message" rows={10}/>
         </motion.div>
         <motion.button variants={formVariant}>Send</motion.button>
         {success&& <span style={{color:"green"}}>Your message has been sent!</span>}
         {error && <span style={{color:"red"}}>Something went Wrong</span>}
        </motion.form>
      </div>
        <div className="cSection">
         <div className="animation">
            <SvgApp/>
        {/* <motion.div initial={{x:200,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.5}} className="cImg">
          <img src="/svg.png" alt="" />
        </motion.div> */}
         </div>
        </div>
       </div>
      <div className="footer">
          <Footer/>
      </div>
    </div>
  );
};

export default Contact;
