import React, { useState } from 'react';
import bw1 from 'imgs/bw1.jpg';
import bw2 from 'imgs/bw2.jpg';
import bw3 from 'imgs/bw3.jpg';
import bw4 from 'imgs/bw4.jpg';
import bw5 from 'imgs/bw5.jpg';
import bw6 from 'imgs/bw6.jpg';
import bw7 from 'imgs/bw7.jpg';
import './ImageSelector.scss';

const ImageSelector = ({ setCurrentPic, currentPic }) => {
  return (
    <div className='imageselector'>
      <div
        className={`imageselector-option ${currentPic === bw1 && 'active'}`}
        onMouseEnter={() => setCurrentPic(bw1)}
      />
      <div
        className={`imageselector-option ${currentPic === bw2 && 'active'}`}
        onMouseEnter={() => setCurrentPic(bw2)}
      />
      <div
        className={`imageselector-option ${currentPic === bw3 && 'active'}`}
        onMouseEnter={() => setCurrentPic(bw3)}
      />
      <div
        className={`imageselector-option ${currentPic === bw4 && 'active'}`}
        onMouseEnter={() => setCurrentPic(bw4)}
      />
      <div
        className={`imageselector-option ${currentPic === bw5 && 'active'}`}
        onMouseEnter={() => setCurrentPic(bw5)}
      />
      <div
        className={`imageselector-option ${currentPic === bw6 && 'active'}`}
        onMouseEnter={() => setCurrentPic(bw6)}
      />
      <div
        className={`imageselector-option ${currentPic === bw7 && 'active'}`}
        onMouseEnter={() => setCurrentPic(bw7)}
      />
    </div>
  );
};

export default ImageSelector;
