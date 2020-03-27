import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import ImageSelector from 'components/imageselector/ImageSelector';
import './InnerFrame.scss';

const InnerFrame = ({
  xPos,
  yPos,
  springOn,
  setParticlesOn,
  particlesOn,
  setCurrentPic,
  currentPic
}) => {
  const opacityVal = 0.4;
  const roundedOpacity = opacityVal.toFixed(1);

  const animationProps = useSpring({
    background: `linear-gradient(rgba(1, ${255 - xPos}, ${255 -
      yPos}, ${roundedOpacity}), rgba(${xPos}, ${xPos}, ${yPos}, ${roundedOpacity}))`,
    config: config.wobbly
  });
  return (
    <>
      <animated.div
        onClick={e => {
          if (e.target.id === 'innerframe') {
            setParticlesOn(!particlesOn);
          }
        }}
        style={
          springOn
            ? animationProps
            : {
                background: `linear-gradient(rgba(1, ${xPos}, ${yPos}, ${roundedOpacity}), rgba(${255 -
                  xPos}, ${xPos}, ${yPos}, ${roundedOpacity}))`
              }
        }
        className='innerFrame'
        id='innerframe'
      >
        LOREM
        <ImageSelector setCurrentPic={setCurrentPic} currentPic={currentPic} />
      </animated.div>
      <div className='innerframe-shade' />
    </>
  );
};

export default InnerFrame;
