import {Fragment} from "react";
import styles from './medical.module.css';
import SearchFilter from "../../icons/search-filter";
import Button from "../../ui/button";
import MedicalSignup from "../../icons/medical-signup";
import Image from "next/image";
import img from '../../../public/images/services/medical/doctors/1.webp';
import AddressList from "../../icons/address-list";
import PageHeader from "../../ui/page-header";

const Medical = () => {
    return (
      <Fragment>
          <PageHeader title=" امکانات فرهنگی تفریحی" pageTitle="خدمات" pageLink="/" />
          <section className={styles.doctors}>
              <div className={styles.sidebar}>
                  sidebar
              </div>
              <div className={styles.main}>

                  <div className={styles.top}>
                      <div className={styles.search}>
                          <input type="text" placeholder="نام پزشک یا تخصص مورد نظر را جستجو کنید" />
                          <span>
                              <SearchFilter />
                          </span>
                      </div>
                      <div className={styles.btn}>
                          <Button className={styles.button}>
                              <MedicalSignup />
                              ثبت نام پزشکان
                          </Button>
                      </div>
                  </div>

                  <ul className={styles.items}>
                      <li className={styles.list}>
                          <div className={styles.wrapper}>
                              <div className={styles.info}>
                                  <div className={styles.person}>
                                      <Image src={img} alt="image" layout={"fill"} />
                                      <div className={styles.data}>
                                          <h2>
                                              دکتر محمدرضا عسگریان
                                          </h2>
                                          <h3>
                                              متخصص مغز و اعصاب
                                          </h3>
                                      </div>
                                  </div>
                                  <div>
                                      <Button>
                                          شماره تماس 021-12345678
                                      </Button>
                                  </div>
                              </div>
                              <div className={styles.address}>
                                  <AddressList />
                                  address
                              </div>
                          </div>
                      </li>
                  </ul>

              </div>
          </section>
      </Fragment>
    );
};

export default Medical;