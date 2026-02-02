// import { useEffect, useRef, useState } from "react";

// export default function useScrollAnimation() {
//   const ref = useRef(null);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setVisible(entry.isIntersecting);
//       },
//       { threshold: 0.15 }
//     );

//     if (ref.current) observer.observe(ref.current);

//     return () => {
//       if (ref.current) observer.unobserve(ref.current);
//     };
//   }, []);

//   return [ref, visible];
// }
import { useEffect, useRef, useState } from "react";

export default function useScrollAnimation() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state whenever visibility changes to allow re-triggering
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1, 
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}
