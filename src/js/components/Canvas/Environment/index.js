import React from 'react';

import Background from './Background';
import Cloud from './Cloud';

export default () => {
  const cloudSizes = Array(10).fill().map(() => {
    const width = Math.random() * 4 + 3;  // Width between 3 and 7 units
    const height = Math.random() * 2 + 1; // Height between 1 and 3 units
    return [width, height];
  });
  const randomNumbers = Array(10).fill().map(() => Math.random() * 2 + 1);
  const cloudPositions = Array(10).fill().map(() => [Math.random() * 14 - 7, Math.random() * 4 - 2, 0]);

  return (
    <>
      <Background />
      {cloudSizes.map((size, index) => (
        <Cloud key={index} size={size} speed={randomNumbers[index]} position={cloudPositions[index]} />
      ))}
    </>
  );
};
