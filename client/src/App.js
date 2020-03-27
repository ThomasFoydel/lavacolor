import React, { useState, useEffect } from 'react';
import Frame from 'components/frame/Frame';
import bw from 'imgs/bw1.jpg';
import particlesConfig from 'util/particlesConfig.js';
import Particles from 'react-particles-js';
import ImageSelector from 'components/imageselector/ImageSelector';
import { useSpring, animated, config } from 'react-spring';
import './App.scss';

function App() {
  const [particlesOn, setParticlesOn] = useState(false);
  const [springOn, setSpringOn] = useState(false);
  const [xPos, setXpos] = useState(100);
  const [yPos, setYpos] = useState(100);
  const [currentPic, setCurrentPic] = useState(bw);

  useEffect(() => {
    setSpringOn(true);
  }, [setSpringOn]);
  const handleMouseMove = e => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const xVal = Math.round((mouseX / window.innerWidth) * 255);
    const yVal = Math.round((mouseY / window.innerHeight) * 255);

    setXpos(xVal);
    setYpos(yVal);
  };

  // const backgroundAnimationProps = useSpring({
  //   backgroundImage: `url(${currentPic})`,
  //   // background: 'red',
  //   width: '100vw',
  //   height: '100vh',
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'top'
  // });

  return (
    <div onMouseMove={handleMouseMove}>
      <div className='App'>
        {/* <img className='backgroundpic' src={wb} alt='jellyfish' /> */}
        <animated.div
          className='backgroundpic'
          // style={backgroundAnimationProps}
          style={{
            background: `url(${currentPic})`
            // width: '100vw',
            // height: '100vh',
            // backgroundSize: 'cover',
            // backgroundPosition: 'top',
            // transition: 'all 1s ease'
          }}
          // style={
          //   false
          //     ? backgroundAnimationProps
          //     : {
          //         background: `url(${currentPic})`,
          //         width: '100vw',
          //         height: '100vh',
          //         backgroundSize: 'cover',
          //         backgroundPosition: 'top',
          //         transition: 'all 1s ease'
          //       }
          // }
        />
        <Frame
          xPos={xPos}
          yPos={yPos}
          setParticlesOn={setParticlesOn}
          particlesOn={particlesOn}
        />
      </div>
      <div className='innerframe-shade' />
      <ImageSelector setCurrentPic={setCurrentPic} currentPic={currentPic} />
      {particlesOn && (
        <Particles className='particles' params={particlesConfig} />
      )}
    </div>
  );
}

export default App;
