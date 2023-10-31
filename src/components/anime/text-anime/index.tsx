import React, { useState, useEffect, ReactNode, CSSProperties } from "react";
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
  AnimatedProps,
} from "@react-spring/web";

import styles from "../../../styles.module.css";

type textAnimeProps = {
  children?: ReactNode;
};

const data = [
  {
    css: "linear-gradient(135deg, #212121 0%, #131313 100%)",
  },
];

export default function TextAnime(props: textAnimeProps) {
  const { children } = props;
  const [index, set] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      set(1 % 3);
      setOpen(true);
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

  const data = [
    {
      css: "linear-gradient(135deg, #212121 0%, #131313 100%)",
    },
  ];

  const transRef = useSpringRef();
  const transitions = useTransition(index ? data : [], {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: "translate3d(-100%,0,0)", scale: 0 },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)", scale: 1 },
  });

  useChain(open ? [springApi, transRef] : [transRef, springApi], [
    0,
    open ? 0.1 : 0.6,
  ]);

  return (
    <div className={styles.boxWrapper}>
      <animated.div
        style={{ ...rest, width: size, height: size }}
        className={styles.textContainer}
      >
        {transitions((style, i) => {
          return <animated.div style={{ ...style }} >{children}</animated.div>;
        })}
      </animated.div>
    </div>
  );
}

// import React, { useState, CSSProperties, useEffect } from "react";
// import {
// useTransition,
// animated,
// AnimatedProps,
// useSpringRef,
// } from "@react-spring/web";

// import styles from "../../../styles.module.css";

// const pages: ((
//   props: AnimatedProps<{ style: CSSProperties }>
// ) => React.ReactElement)[] = [
//   ({ style }) => (
//     <animated.div style={{ ...style}}>
//       b
//     </animated.div>
//   ),
// ];

// export default function TextAnime() {
//   const [index, set] = useState(0);

//   const onClick = () => set((state) => (state + 1) % 3);
//   const transRef = useSpringRef();
// const transitions = useTransition(index, {
//   ref: transRef,
//   keys: null,
//   from: { opacity: 0, transform: "translate3d(100%,0,0)" },
//   enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
//   leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
// });
//   useEffect(() => {
//     transRef.start();
//   }, [index]);
//   return (
//     <div className={`flex fill ${styles.container}`} onClick={onClick}>
// {transitions((style, i) => {
//   const Page = pages[i];
//   return <Page style={style} />;
// })}
//     </div>
//   );
// }
