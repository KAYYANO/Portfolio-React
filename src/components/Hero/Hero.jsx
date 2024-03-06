import React from "react";
import styles from "./Hero.module.css";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";

function Hero() {
  return (
    <div className={styles.hero_wrapper}>
      <div className={styles.container}>
        <div className={styles.hero_content}>
          <div className={styles.hero_info}>
            <p className={styles.text_1}>KAYASIT KA</p>
              <p className={styles.text_2}>
                <span>I'm a </span>
                <TypeAnimation
                  sequence={[
                    "full-stack",
                    1000,
                    "Web developer.",
                    1000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                />
              </p>
          </div>
          <div>
            <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
              <div className={styles.hero_image}></div>
            </Tilt>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;