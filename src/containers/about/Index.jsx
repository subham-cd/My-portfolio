import React, { useCallback } from "react";
import "./style.scss";
import { BsInfoCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import PageHeaderContent from '../../components/pageHeaderContent'
const personalDetails = [
  { label: "Name", value: "Subham Singh" },
  { label: "College", value: "SIRT Bhopal" },
  { label: "Role", value: "Aspiring Developer 🚀" },
  { label: "Address", value: "India 🌍" },
  { label: "Email", value: "subham0506singh@gmail.com" },
  { label: "Hobbies", value: "Debugging, Memes, & Breaking my own code 😎" },
{ label: "Favourite Quote", value: "‘Eat, Sleep, Code, Repeat’ 🔁" },

];

const About = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <section id="about" className="about-section">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: "#0f172a" },
          particles: {
            number: { value: 50 },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: 3 },
            links: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: false,
              straight: false,
              outModes: "bounce",
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              repulse: { distance: 100 },
              push: { quantity: 4 },
            },
          },
        }}
        className="particles"
      />

      

      <PageHeaderContent headerText="About Me" icon={<BsInfoCircleFill size={40} />} />

      <div className="about-section__content">
        <motion.div
          className="about-section__left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Personal Details</h2>
          <ul>
            {personalDetails.map((item, index) => (
              <li key={index}>
                <strong>{item.label}:</strong> {item.value}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="about-section__right"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
        <h2>Who Am I?</h2>
<p>
  I'm <strong>Subham Singh</strong> — a developer in progress and a bug-fixer by profession (sometimes by accident too 🐛➡️💥).
</p>
<p>
  A student at <strong>SIRT Bhopal</strong>, I balance between understanding OS concepts and surviving semester exams. I treat DSA questions like gym reps — more painful, more gain! 💪
</p>
<p>
  I enjoy building websites that not only work but make users go, “Whoa, this is cool!” — using <strong>React, Node.js, MongoDB</strong>, and coffee ☕.
</p>
<p>
  When I’m not coding, I’m either overthinking a LeetCode problem or explaining recursion to myself for the 5th time (Spoiler: still confused 😵).
</p>
<p>
  My dream? To crack tech interviews like a boss — with the attitude of Tony Stark and the debugging power of Sherlock Holmes 🔍.
</p>
<p>
  Fun fact? I once wrote a function that worked on the first try. Nobody believed me. Not even me.
</p>
<p>
  I believe learning should be fun, code should be clean, and bugs… well, they should fear me one day.
</p>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
