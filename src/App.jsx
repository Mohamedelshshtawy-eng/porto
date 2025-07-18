import { lazy, Suspense } from "react";
// import Contact from "./components/contact/Contact";
// import Hero from "./components/hero/Hero";
// import Portfilo from "./components/portfilo/Portfilo";
// import Services from "./components/services/Services";

const Hero = lazy(()=>import("./components/hero/Hero"))
const Services = lazy(()=>import("./components/services/Services"))
const Portfilo = lazy(()=>import("./components/portfilo/Portfilo"))
const Contact = lazy(()=>import("./components/contact/Contact"))
const App = () => {
  return (
    <div className="container">
      <Suspense fallback={"loading..."}>
        <section id="hero">
        <Hero />
      </section>
      </Suspense>
      <Suspense fallback={"loading..."}>
        <section id="services"> 
        <Services />
      </section>
      </Suspense>
      {/* <section id="portfilo"> */}
     <Suspense fallback={"loading..."}>
         <Portfilo />
     </Suspense>
      {/* </section> */}
    <Suspense fallback={"loading..."}>
        <section id="contact">
        <Contact />
      </section>
    </Suspense>
    </div>

  );
};

export default App;
