import React, { useState, useEffect, ReactNode } from "react";
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from "@react-spring/web";

import styles from "../../../styles.module.css";

type boxAnimeProps = {
  children?: ReactNode;
  Boxbackground?:any;
  className?: any
};


export default function BoxAnime(props: boxAnimeProps) {
  const { children,   Boxbackground, className } = props;
  const [open, set] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      set(true);
    }, 500); 

    return () => clearTimeout(timer);
  }, []);

  const springApi = useSpringRef();
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    to: {
      size: open ? "100%" : "20%",
    },
  });

  const transApi = useSpringRef();
  const transition = useTransition(open ? null : [], {
    ref: transApi,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  });

  useChain(open ? [springApi, transApi] : [transApi, springApi], [
    0,
    open ? 0.1 : 0.6,
  ]);

  return (
    <div className={styles.boxWrapper}>
      <animated.div
        style={{ ...rest, width: size, height: size }}
        className={styles.boxContainer}
      >
        {transition((style, item) => (
          <animated.div
            className={`${styles.boxItem} ${className}`}
            style={{ ...style, background:  Boxbackground, transition: "0.10s" }}
          >
            {children}
          </animated.div>
        ))}
      </animated.div>
    </div>
  );
}

// import React, { useState, useEffect, ReactNode } from "react";
// import {
//   useTransition,
//   useSpring,
//   useChain,
//   config,
//   animated,
//   useSpringRef,
// } from "@react-spring/web";

// import styles from "../../../styles.module.css";

// type boxAnimeProps = {
//   children?: ReactNode;
//   Boxbackground?:any
// };

// const data = [
//   {
//     // css: "linear-gradient(135deg, #212121 0%, #131313 100%)",
//     // css:  Boxbackground,
//   },
// ];

// export default function BoxAnime(props: boxAnimeProps) {
//   const { children,   Boxbackground } = props;
//   const [open, set] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       set(true);
//     }, 500); // Open after 5 seconds

//     return () => clearTimeout(timer);
//   }, []);

//   const springApi = useSpringRef();
//   const { size, ...rest } = useSpring({
//     ref: springApi,
//     config: config.stiff,
//     to: {
//       size: open ? "100%" : "20%",
//     },
//   });

//   const transApi = useSpringRef();
//   const transition = useTransition(open ? data : [], {
//     ref: transApi,
    // trail: 400 / data.length,
//     from: { opacity: 0, scale: 0 },
//     enter: { opacity: 1, scale: 1 },
//     leave: { opacity: 0, scale: 0 },
//   });

//   useChain(open ? [springApi, transApi] : [transApi, springApi], [
//     0,
//     open ? 0.1 : 0.6,
//   ]);

//   return (
//     <div className={styles.boxWrapper}>
//       <animated.div
//         style={{ ...rest, width: size, height: size }}
//         className={styles.boxContainer}
//         // onClick={() => set((open) => !open)}
//       >
//         {transition((style, item) => (
//           <animated.div
//             className={styles.boxItem}
//             style={{ ...style, background:  Boxbackground }}
//           >
//             {children}
//           </animated.div>
//         ))}
//       </animated.div>
//     </div>
//   );
// }

