import { useEffect, useRef } from 'react';
import images from './image';
import gsap from 'gsap';

function Canvas({ details }) {
  const { startIndex , numImages, duration, top, size, left, zIndex } = details;
  const canvasRef = useRef(null);
  const indexRef = useRef({ value: startIndex }); // Use ref to track the index continuously without triggering re-renders

  useEffect(() => {
    // Initialize gsap animation with infinite repeat
    const animation = gsap.to(indexRef.current, {
      value: startIndex + numImages - 1,
      duration: duration,
      ease: "linear",
      repeat: -1, // Infinite repeat
      onUpdate: renderImage, // Call renderImage function to update canvas
    });

    function renderImage() {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const img = new Image();
      const currentIndex = Math.round(indexRef.current.value); // Get rounded index

      img.src = images[currentIndex];
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas before drawing
        ctx.drawImage(img, 0, 0);
      };
    }

    // Clean up on component unmount
    return () => {
      animation.kill();
    };
  }, []); // Empty dependency array to run only on mount

  return (
    <canvas
      ref={canvasRef}
      className="w-[18rem] h-[18rem]"
      id="canvas"
    />
  );
}

export default Canvas;
