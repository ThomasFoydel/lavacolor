import React, { useState, useEffect } from 'react';
import Frame from 'components/frame/Frame';
import bw from 'imgs/bw1.jpg';
import particlesConfig from 'util/particlesConfig.js';
import Particles from 'react-particles-js';
import ImageSelector from 'components/imageselector/ImageSelector';
import InnerFrame from 'components/innerframe/InnerFrame';
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

  return (
    <div onMouseMove={handleMouseMove}>
      <div className='App'>
        <div
          className='backgroundpic'
          style={{
            background: `url(${currentPic})`
          }}
        />
        <Frame
          xPos={xPos}
          yPos={yPos}
          setParticlesOn={setParticlesOn}
          particlesOn={particlesOn}
        />
        <InnerFrame
          xPos={xPos}
          yPos={yPos}
          springOn={springOn}
          setParticlesOn={setParticlesOn}
          particlesOn={particlesOn}
          setCurrentPic={setCurrentPic}
          currentPic={currentPic}
        />
      </div>

      {/* <ImageSelector setCurrentPic={setCurrentPic} currentPic={currentPic} /> */}
      {particlesOn && (
        <Particles className='particles' params={particlesConfig} />
      )}
    </div>
  );
}

export default App;
