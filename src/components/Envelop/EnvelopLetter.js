import React from 'react';
import './Envelop.css'; // Import the CSS for animations
import TypingOnIntersection from './TypingOnIntersection';

const EnvelopeLetter = () => {

    return (
      <>
      <TypingOnIntersection text={`Please click the below envelop.`} />
      <div className="birthday-card">
    <div className="cover-inner">
        <img 
        // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5n439L9Qd0vjVe_SJd2TteNwCAIRTXqkJXUbw6jORxlq7S1XO7NLzPRUi-RSiA3suzW8&usqp=CAU"
         alt=''
         width="100%" />
    </div>

    <div className="cover-outer">
        <img src="https://images.esellerpro.com/3274/I/318/37/lrgscaleAO002.jpg" alt='Birthday cake' width="100%" />
    </div>
    <div className="text">
        <p className="title">
            Happy Birthday! <br /> Shirisha
        </p>
        <p>
            I hope your special day will bring you lots of happiness,
            love, and fun.
            You deserve them a lot. Enjoy!
        </p>
        <p>Hope your day goes great!</p>
    </div>
</div>
</>
    );
  }


export default EnvelopeLetter;
