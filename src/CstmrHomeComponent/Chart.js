import React, { useEffect, useState } from 'react';
import GrapChart from './GrapChart';

const Chart = () => {
  const [height, setHeight] = useState(350);

  useEffect(() => {
    const resize = () => {
      if (window.innerWidth < 768) {
        setHeight(250);
      } else {
        setHeight(450);
      }
    };
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);
  return (
    <>
      <GrapChart height={height} />
    </>
  );
};

export default Chart;
