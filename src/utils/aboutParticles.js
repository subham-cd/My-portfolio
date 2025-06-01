// utils/aboutParticles.js

const aboutParticlesOptions = {
  background: {
    color: {
      value: "#0f172a", // About section background
    },
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#00f5d4", // Unique to About page
    },
    links: {
      color: "#00f5d4",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1.5,
    },
    number: {
      value: 40,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: 3,
    },
  },
  detectRetina: true,
};

export default aboutParticlesOptions;
