import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent/Index";
import { Animate } from "react-simple-animate";
import "./style.scss";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";

const personalDetails = [
  {
    label: "Name",
    value: "Subham Singh",
  },
  {
    label: "Role",
    value: "Student",
  },
  {
    label: "Address",
    value: "India",
  },
  {
    label: "Email",
    value: "demo@example.com",
  },
  {
    label: "Contact No",
    value: "+11 3456789056",
  },
];

const jobSummary =
"🎓CSE student | 🐞 Part-time bug hunter | 💭 Full-time dreamer. Currently juggling 🎯 frontend frameworks, 👻 backend ka bhoot, and 🧠 DSA ke sawal — all while trying to figure out how to adult 💼🍜. 💻 Fluent in Java, React, and Stack Overflow 🧎‍♂️. I can turn a Figma 🎨 into a website 🌐, a problem into a solution (after 3 cups of chai ☕), and a normal day into a full-blown debugathon 🔧🔥. Not a 10x developer yet 🚫👨‍💻, but definitely a 10x learner 📚⚡ with a strong Ctrl+Z game"

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Coder</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaDev size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <DiAndroid size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <FaDatabase size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <DiApple size={60} color="var( --yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default About;