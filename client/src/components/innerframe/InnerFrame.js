import React, { useState, useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring';
import './InnerFrame.scss';

const InnerFrame = ({ xPos, yPos, springOn }) => {
  //   const springOn = false;
  const opacityVal = 0.4;
  const roundedOpacity = opacityVal.toFixed(1);

  const animationProps = useSpring({
    background: `linear-gradient(rgba(1, ${255 - xPos}, ${255 -
      yPos}, ${roundedOpacity}), rgba(${xPos}, ${xPos}, ${yPos}, ${roundedOpacity}))`,
    config: config.wobbly
  });
  return (
    <animated.div
      style={
        springOn
          ? animationProps
          : {
              background: `linear-gradient(rgba(1, ${xPos}, ${yPos}, ${roundedOpacity}), rgba(${255 -
                xPos}, ${xPos}, ${yPos}, ${roundedOpacity}))`
            }
      }
      className='innerFrame'
    >
      Lorem ipsum
    </animated.div>
  );
};

export default InnerFrame;
