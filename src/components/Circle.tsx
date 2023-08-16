

export const Circle = () => {
   
   const iterate = 200
   const points = Array.from({ length: iterate }, (_, x) => {
      const y = x**2 + 4*x + 4
      return `${x},${100 + y}`
   });

   const path = `M ${points.join(' ')}`;
 
   return (
      <svg width={500} height={200}>
         <path d={path} fill="transparent" stroke="red" strokeWidth={2} />
      </svg>
   )
}