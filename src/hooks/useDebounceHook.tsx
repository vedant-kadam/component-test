// import { useCallback, useEffect, useRef } from "react";

import { use, useCallback, useEffect, useRef } from "react";

// interface useDebounceProps {
//   interval: number;
// }

// const useDebounceHook = <T extends (...args: any[]) => any>(
//   fn: T,
//   delay: number = 500,
// ) => {
//   const intervalRef = useRef<ReturnType<typeof setTimeout> | null>(null);
//   const fnRef = useRef<T>(fn);

//   useEffect(() => {
//     fnRef.current = fn;
//   }, [fn]);

//   useEffect(() => {
//     return () => {
//       if (intervalRef.current) clearTimeout(intervalRef.current);
//     };
//   }, []);

//   const debounce = useCallback(
//     (...args: Parameters<T>) => {
//       if (intervalRef.current) {
//         clearTimeout(intervalRef.current);
//       }

//       intervalRef.current = setTimeout(() => {
//         fnRef.current(...args);
//       }, delay);
//     },
//     [delay],
//   );

//   return debounce;
// };

// export default useDebounceHook;

const useDebounceHook = <T extends (...args: any[]) => any>(
  fn: T,
  delay: number,
) => {
  const fnRef = useRef<T>(null);
  const timeRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    fnRef.current = fn;
  }, [fn]);

  useEffect(() => {
    return () => {
      if (timeRef.current) clearTimeout(timeRef.current);
    };
  }, []);

  const debounce = useCallback(
    (...args: Parameters<T>) => {
      if (timeRef.current) {
        clearTimeout(timeRef.current);
      }

      timeRef.current = setTimeout(() => {
        if (fnRef.current) fnRef.current(...args);
      }, delay);
    },
    [delay],
  );

  return debounce;
};

export default useDebounceHook;
