import React from 'react'
import styles from './Number.module.css'
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

function Number() {
  return (
    <div className={styles.number_con}>
      <div className={styles.number_items}>
        <h3>
          <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
            {({ isVisible }) => (
              <div>
                {isVisible ? (
                  <CountUp start={0} end={20} duration={1} />
                ) : null}
                +
              </div>
            )}
          </VisibilitySensor>
        </h3>
        <p>Project Delivered</p>
      </div>
      <div className={styles.number_items}>
        <h3><VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
            {({ isVisible }) => (
              <div>
                {isVisible ? (
                  <CountUp start={0} end={17} duration={1} />
                ) : null}
                +
              </div>
            )}
          </VisibilitySensor></h3>
        <p>Companies Helped</p>
      </div>
      <div className={styles.number_items}>
        <h3><VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
            {({ isVisible }) => (
              <div>
                {isVisible ? (
                  <CountUp start={0} end={4} duration={1} />
                ) : null}
                +
              </div>
            )}
          </VisibilitySensor></h3>
        <p>Years of Experience</p>
      </div>
      <div className={styles.number_items}>
        <h3><VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
            {({ isVisible }) => (
              <div>
                {isVisible ? (
                  <CountUp start={0} end={19} duration={1} />
                ) : null}
                +
              </div>
            )}
          </VisibilitySensor></h3>
        <p>Happy Clients</p>
      </div>
    </div>
  );
}

export default Number;