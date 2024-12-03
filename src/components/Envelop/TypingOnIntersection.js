import React from 'react';
import { useInView } from 'react-intersection-observer';


const TypingOnIntersection = ({text}) => {
    const { ref:spanRef, inView:elementVisibility } = useInView();
    return <div ref={spanRef} className="typing-container m-3">
    {elementVisibility ? 
    <span  className="typing-text">{text}</span>: <span></span>}
  </div>
};

export default TypingOnIntersection;
