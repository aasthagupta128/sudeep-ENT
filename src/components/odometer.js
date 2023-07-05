import React, { useEffect, useState } from "react";
import './odometer.css'
const Odometer = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (value < 10328) {
        setValue((prevValue) => prevValue + 96);
      } else {
        clearInterval(interval);
      }
    }, 1);

    return () => clearInterval(interval);
  }, [value]);

  return (
    <div className="odometer-overlay">
      <div className="odometer">{value}</div>
    </div>
  );
};

export default Odometer;
