import React, { useState, useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring';
import './Frame.scss';

const Frame = ({ xPos, yPos }) => {
  const [springOn, setSpringOn] = useState(false);

  useEffect(() => {
    setSpringOn(true);
  }, []);

  const opacityVal = 0.6;
  const roundedOpacity = opacityVal.toFixed(1);

  const animationProps = useSpring({
    background: `radial-gradient(rgba(1, ${xPos}, ${yPos}, ${roundedOpacity}), rgba(${255 -
      xPos}, ${xPos}, ${yPos}, ${roundedOpacity}))`,
    config: config.molasses
  });
  return (
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
  );
};

export default Frame;
