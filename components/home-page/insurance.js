import styles from './insurance.module.css';
import {allInsurances} from "../../data/insurance";
import InsuranceItem from "./insurance-item";
import Image from "next/image";
import imgPath from '../../public/images/service-bg-mobile.webp';

const Insurance = () => {

    const insuranceItems = allInsurances();

    return (
      <section className={styles.insurance}>
          <div className={styles.card}>
              <h2 className={styles.title}>
                  خدمات بیمه بیرق
              </h2>
              <ul className={styles.box}>
                  {insuranceItems.map((item,index) => (
                      <InsuranceItem
                          key={index}
                          icon={item.icon}
                          title={item.title}
                          description={item.description}
                          link={item.link}
                      />
                  ))}
              </ul>
          </div>
      </section>
    );
};

export default Insurance;