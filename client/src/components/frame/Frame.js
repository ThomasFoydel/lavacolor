import React, { useState, useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring';
import InnerFrame from 'components/innerframe/InnerFrame';
import './Frame.scss';

const Frame = ({ xPos, yPos }) => {
  const [springOn, setSpringOn] = useState(false);
  //   const [xPos, setXpos] = useState(100);
  //   const [yPos, setYpos] = useState(100);

  useEffect(() => {
    setSpringOn(true);
  }, []);

  //   const handleMouseMove = e => {
  //     const mouseX = e.clientX;
  //     const mouseY = e.clientY;

  //     const xVal = Math.round((mouseX / window.innerWidth) * 255);
  //     const yVal = Math.round((mouseY / window.innerHeight) * 255);

  //     setXpos(xVal);
  //     setYpos(yVal);
  //   };
  const opacityVal = 0.6;
  const roundedOpacity = opacityVal.toFixed(1);

  const animationProps = useSpring({
    background: `radial-gradient(rgba(1, ${xPos}, ${yPos}, ${roundedOpacity}), rgba(${255 -
      xPos}, ${xPos}, ${yPos}, ${roundedOpacity}))`,
    config: config.molasses
  });
  return (
    <>
      <animated.div
        style={
          springOn
            ? animationProps
            : {
                background: `radial-gradient(rgba(${xPos}, ${xPos}, ${yPos}, ${roundedOpacity}), rgba(${255 -
                  xPos}, ${255 - xPos}, ${255 - yPos}, ${roundedOpacity}))`
              }
        }
        // onMouseMove={handleMouseMove}
        className='frame'
      ></animated.div>
      <InnerFrame xPos={xPos} yPos={yPos} springOn={springOn} />
    </>
  );
};

export default Frame;

/* 
to make the slower spring settings work:
-user moves mouse
-handlemousemove fires
-change a useState value so that no new values are coming in 

*/
