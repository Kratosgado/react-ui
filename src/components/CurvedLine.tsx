import React from 'react';


const CurvedLine: React.FC = () => {
  const width = window.innerWidth; // Use the width of the screen
  const height = 100;
  const color = 'blue';

  const controlPoints = [
    { x: 0, y: height * 0.5 },
    { x: width / 4, y: -height * 0.5 },
    { x: (3 * width) / 4, y: height * 1.5 },
    { x: width, y: height * 0.5 }
  ];
  const numControlPoints = 8; // Adjust the number of control points as needed
  const controlPoint = Array.from({ length: numControlPoints }, (_, index) => {
    const stepSize = width / numControlPoints;
    return ({
      x: (index * stepSize +
        (index !== 0 && (index % 2 === 0 || index === numControlPoints -1 ) ? stepSize : 0)),
      y: (index === 0 || index === numControlPoints -1 ? height * 0.5 :
        (index % 2 === 1 ?-height * 0.5 : height * 1.5)
        )
    })
  });
  console.log("calculated", controlPoint);
  console.log(controlPoints)

  const pathCommands = controlPoint.reduce(
    (commands, point, index) => {
      if (index === 0) {
        return [...commands, `M${point.x},${point.y} C`];
      }
      return [...commands, `${point.x},${point.y}`];
    },
    [] as string[]
  );
  const controlPath = pathCommands.join(' ');

  return (
    <div>
      <h1>Curved Line Example</h1>
      <svg width={width} height={height}>
        <path d={controlPath} fill="red" stroke={color} strokeWidth={2} />
      </svg>
    </div>
  );
};

export { CurvedLine };
