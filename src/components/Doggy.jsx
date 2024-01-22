import { useEffect } from 'react';
import DoggyImage from '../assets/doggy.png';
import './Doggy.css';

const Doggy = () => {
  useEffect(() => {
    let animationCount = 0;

    const moveDoggy = () => {
      animationCount++;

      const xStart = Math.random() > 0.5 ? -200 : window.innerWidth;
      const yStart = Math.random() > 0.5 ? -200 : window.innerHeight;

      const xEnd = Math.random() > 0.5 ? -200 : window.innerWidth;
      const yEnd = Math.random() > 0.5 ? -200 : window.innerHeight;

      const rotation = Math.random() * 360;
      const duration = 5 + Math.random() * 50;
      const animationName = `flyDoggy${animationCount}`;

      const keyframes = `
        @keyframes ${animationName} {
          from {
            transform: translate(${xStart}px, ${yStart}px) rotate(0deg);
          }
          to {
            transform: translate(${xEnd}px, ${yEnd}px) rotate(${rotation}deg);
          }
        }
      `;

      const styleSheet = document.createElement('style');
      styleSheet.type = 'text/css';
      styleSheet.innerText = keyframes;
      document.head.appendChild(styleSheet);

      const doggyElement = document.querySelector('#doggyImage');
      doggyElement.style.animation = `${animationName} ${duration}s linear infinite`;
    };

    moveDoggy();
    const doggyElement = document.querySelector('#doggyImage');
    doggyElement.addEventListener('animationiteration', moveDoggy);

    return () => {
      doggyElement.removeEventListener('animationiteration', moveDoggy);
    };
  }, []);

  return (
    <div>
      <img
        id='doggyImage'
        src={DoggyImage}
        alt='doggy astronaut'
        width='100px'
      />
    </div>
  );
};

export default Doggy;
