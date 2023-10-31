import React, { ReactNode, useState } from 'react'
import { useSpring, animated } from '@react-spring/web'
import styles from "../../../styles.module.css";
import { ClassNames } from '@emotion/react';

type AnimeBtnProps ={
  title?:string
  onClick?: (...args: any[]) => any;
  children?: ReactNode;
  className?:any
}

export default function AnimeButton(props: AnimeBtnProps) {
  const {title, onClick, className} = props
  const [state, toggle] = useState(true)
  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: 1000 },
  })
  return (
  <button className="customized-anime-btn anime-btn" onClick={onClick}>
    <div className={styles.btnContainer} onClick={() => toggle(!state)}>
      <animated.div
        className={`${styles.btnText} ${className}`}
        style={{
          // opacity: x.to({ range: [0, 1], output: [0.3, 1] }),
          scale: x.to({
            range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
            output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
          }),
        }}>
        {title}
      </animated.div>
    </div>
    </button>
  )
}

