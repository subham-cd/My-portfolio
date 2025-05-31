import React from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";

const Home = () => {
    const navigate = useNavigate();
    console.log(navigate);

    const handleNavigateContact=()=>{
          navigate('/contact')
    }
  return (
    <section id="home" className="home">
      <Animate
        play
        duration={1}
        delay={0.5}
        start={{ transform: "translateY(100px)", opacity: 0 }}
        end={{ transform: "translateY(0px)", opacity: 1 }}
      ></Animate>
      <div className="home__textwrapper">
        <h1>
          <span>Hello, I'm Subham</span>
          <span>I turn ideas into</span>
          <span>interactive web experiences</span>
        </h1>
        <Animate
        play
        duration={1.5}
        delay={1}
        start={{
            transform:'translateY(550px'
        }}
                end={{ transform: "translateX(0px)" }}

        
        >
            <div className="home__contact-me">
        <button onClick={handleNavigateContact}>Hire Me</button>

       </div>
        </Animate>
       
      </div>
    </section>
  );
};

export default Home;
