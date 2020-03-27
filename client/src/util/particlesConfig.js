const particlesConfig = {
  particles: {
    number: {
      value: 40,
      density: {
        enable: false
      }
    },
    size: {
      value: 20,
      random: true,
      anim: {
        speed: 4,
        size_min: 0.6
      }
    },
    line_linked: {
      enable: false
    },
    move: {
      random: true,
      speed: 1,
      direction: 'top',
      out_mode: 'out'
    }
  }
};
export default particlesConfig;
