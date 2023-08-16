import { useEffect, useState } from "react";


export const WaveAnimation: React.FC = () => {
  const width = window.innerWidth;
  const height = 200;
  const waveAmplitiude = 5;
  const waveLength = 100;
  const waveSpeed = 0.5;

  const initialWaveOffset = width;
  const [waveOffset, setWaveOffset] = useState(initialWaveOffset);

  useEffect(() => {
    const animationFrame = requestAnimationFrame(animateWave);
    return () => cancelAnimationFrame(animationFrame);
  });
  const animateWave = (timestamp: number) => {
    setWaveOffset(initialWaveOffset - waveSpeed * timestamp);
    requestAnimationFrame(animateWave);
  }

  const point = Array.from({ length: width }, (_, x) => {
    x *= 10;
    const y = waveAmplitiude * Math.sin((x + waveOffset) / waveLength);
    return `${x},${height / 2 + y}`
  });
  const path = `M${point.join(' ')}`;

  return (
    <>
      <svg width={width} height={height}>
      <path d={path} fill="#0d6153" stroke="#0d6153" strokeWidth={1} />
      </svg>
  
    </>
    
  )
}