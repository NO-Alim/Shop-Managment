import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../hook/AccountContext';
import GrapChart from './GrapChart';

const Chart = () => {
  const [height, setHeight] = useState(350);
  const { data, currentUser } = useGlobalContext();

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
  return <>{data && data.length > 0 && <GrapChart height={height} />}</>;
};

export default Chart;
