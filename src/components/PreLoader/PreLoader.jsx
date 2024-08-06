import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function PreLoader() {
  const counterRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (!counterRef.current || !overlayRef.current) return;

    // Loader function
    function startLoader() {
      let currentValue = 0;

      function updateCounter() {
        if (currentValue >= 100) {
          currentValue = 100;
          counterRef.current.textContent = `${currentValue}%`;
          return;
        }
        currentValue += Math.floor(Math.random() * 10) + 1;
        counterRef.current.textContent = `${Math.min(currentValue, 100)}%`;

        const delay = Math.floor(Math.random() * 200) + 50;
        setTimeout(updateCounter, delay);
      }
      updateCounter();
    }

    startLoader();

    // GSAP timeline for animations
    const tl = gsap.timeline();

    tl.to(counterRef.current, {
      delay: 3.3,
      opacity: 0,
      duration: 0.2,
      zIndex: 0,
      display: 'none'
    })
    .to('.bar', {
      duration: 1.7,
      height: 0,
      delay: 0.1,
      stagger: 0.08, // Adjusted to smooth out animation
      ease: 'power4.inOut',
    })
    .to(overlayRef.current, {
      duration: 0.5,
      zIndex: -1,
      ease: 'power4.inOut'
    });

  }, []);

  return (
    <>
      <h1 className="counter" ref={counterRef}>0</h1>
      <div className="overlay" ref={overlayRef}>
        {[...Array(10)].map((_, index) => (
          <div key={index} className="bar"></div>
        ))}
      </div>
    </>
  );
}
