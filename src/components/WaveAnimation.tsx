import { useEffect, useState } from "react";


export const WaveAnimation: React.FC = () => {
  const width = window.innerWidth;
  const height = 200;
  const waveAmplitiude = 20;
  const waveLength = 100;
  const waveSpeed = 0.5;

  const initialWaveOffset = width;
  const [waveOffset, setWaveOffset] = useState(initialWaveOffset);

  // useEffect(() => {
  //   const animationFrame = requestAnimationFrame(animateWave);
  //   return () => cancelAnimationFrame(animationFrame);
  // });
  // const animateWave = (timestamp: number) => {
  //   setWaveOffset(initialWaveOffset - waveSpeed * timestamp);
  //   requestAnimationFrame(animateWave);
  // }

  const points = [];
  for(let x = 0; x < width; x += 10) {
    const y = waveAmplitiude * Math.sin((x + waveOffset) / waveLength);
    points.push(`${x},${height / 2 + y}`);
  }
  const path = `M${points.join(' ')}`;

  return (
    <svg width={width} height={height}>rt
      <path d={path} fill="transparent" stroke="blue" strokeWidth={2} />
    </svg>
  )
}