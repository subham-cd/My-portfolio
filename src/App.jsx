import "./App.scss"
import { Routes, Route,useLocation } from "react-router-dom";
import Particles from 'react-tsparticles'
import particlesOptions from "./utils/particles";
import {loadFull} from 'tsparticles'
import Home from "./containers/home";
import Resume from "./containers/resume";
import Skills from "./containers/skills/Index";
import Portfolio from "./containers/portfolio";
import Contact from "./containers/contact";
import Navbar from "./components/navbar/Index";
import About from "./containers/about/Index";

function App() {

  const location = useLocation();
  console.log(location);
  const handleInit = async (main)=>{
    await loadFull(main)
  }

  const renderParticlesJsHomePage = location.pathname==="/";
  return (
    <div className="App">

      {
        renderParticlesJsHomePage && 
        <Particles id="particles" init={handleInit} options={particlesOptions} />
      }
       

      <Navbar/>

      <div className="App__mainPage">
         <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/about" element={<About />} />
        <Route index path="/resume" element={<Resume />} />
        <Route index path="/skills" element={<Skills/>}/>
        <Route index path="/portfolio" element={<Portfolio />} />
        <Route index path="/contact" element={<Contact />} />
      </Routes>
      </div>
     
    </div>
  );
}

export default App;
