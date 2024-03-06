import React from "react";
import styles from "./Testimonials.module.css";
import Tilt from "react-parallax-tilt";

function Testimonials() {
  return (
    <div className={styles.testi_con}>
      <h3 className={styles.testi_title}>Testimonials</h3>
      <div className={styles.testi_list}>
        <div className={styles.testi_items}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure animi
            commodi fugit eveniet quasi earum ab vitae officia. Quae earum
            exercitationem nulla eius esse cumque dignissimos rem quia, in
            nesciunt!
          </p>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <img
              src="https://staticg.sportskeeda.com/editor/2023/03/b6336-16782348821464-1920.jpg"
              alt=""
            />
          </Tilt>
          <h4>CJ</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_items}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure animi
            commodi fugit eveniet quasi earum ab vitae officia. Quae earum
            exercitationem nulla eius esse cumque dignissimos rem quia, in
            nesciunt!
          </p>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <img
              src="https://www.svg.com/img/gallery/gta-6-tommy-vercettis-og-save-spot-is-back-and-leaves-us-with-one-question/intro-1701810076.jpg    "
              alt=""
            />
          </Tilt>
          <h4>Tommy</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_items}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure animi
            commodi fugit eveniet quasi earum ab vitae officia. Quae earum
            exercitationem nulla eius esse cumque dignissimos rem quia, in
            nesciunt!
          </p>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <img
              src="https://img5.pic.in.th/file/secure-sv1/claude.jpeg"
              alt=""
            />
          </Tilt>
          <h4>Claude</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;