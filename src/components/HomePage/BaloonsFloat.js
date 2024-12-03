import React from "react";
import "./Baloon.css";
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';
  const ROWS = [
    { text: "HAPPY", colors: ["#FF5733", "#33FF57", "#3357FF", "#FF33A6", "#FFBD33"] },
    { text: "BIRTHDAY", colors: ["#A633FF", "#33FFF9", "#3357FF",  "#FFBD33","#FF5733", "#33FF57","#FF33A6",  "#A633FF"] },
    { text: "SHIRISHA", colors: ["#3357FF", "#FF5733","#FF33A6","#33FFF9","#33FF57",    "#FFBD33", "#A633FF", "#FF5733"] },
  ];
const Balloon = ({ text, color, delay }) => (
  <div
    className="balloon m-1"
    style={{
      backgroundColor: color,
      animationDelay: `${delay}s`,
    }}
  >
    {text}
  </div>
);
const Balloons = () => {
    const { width } = useWindowSize()
  return (
    <div className="balloon-container mt-4">
   
          <Confetti
       // Match the div's width
       width={width}
             height={360} // Match the div's height
            numberOfPieces={200} // Adjust confetti density
            gravity={0.2} // Adjust gravity for effect
            recycle={true} // Stops confetti after initial burst
          />
        
    {ROWS.map((row, rowIndex) => (
        <div className="row m-2" key={rowIndex}>
        
          {row.text.split("").map((char, index) => (
            <Balloon
              key={index}
              text={char}
              color={row.colors[index % row.colors.length]}
              delay={index * 0.4}
            />
          ))}
        </div>
      ))}
  </div>
  );
};

export default Balloons;









