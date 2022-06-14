import {Fragment} from "react";
import styles from './footer-bottom.module.css';

const FooterBottom = () => {
    return (
      <Fragment>
          <div className={styles['footer-bottom']}>
              <div className={`${styles.items}`}>
                  <p>
                      کلیه حقوق این سایت متعلق به بیرق می باشد
                  </p>
              </div>
              <div className={`${styles.items}`}>
                  <p>
                      طراحی و سئو توسط
                      <a href="https://faramouj.ir">
                          فراموج
                      </a>
                  </p>
              </div>
              <div className={`${styles.items}`}>
                  <p>
                      قوانین و مقررات
                  </p>
              </div>
          </div>
      </Fragment>
    );
};

export default FooterBottom;