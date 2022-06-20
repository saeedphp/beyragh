import Image from "next/image";
import {Fragment} from "react";
import { allHoghoghi, Khadamat } from "../../../data/hoghoghi";
import { GiScales } from 'react-icons/gi';
import AddressList from "../../icons/address-list";
import MedicalSignup from "../../icons/medical-signup";
import SearchFilter from "../../icons/search-filter";
import Sidebar from "../../layout/sidebar/sidebar";
import Button from "../../ui/button";
import styles from './legal.module.css';

const Legal = () => {
    const Vakilha = allHoghoghi();
    return (
        <Fragment>
            <section className={styles.legal}>
              <div className={styles.sidebarbox}>
                  <Sidebar className={styles.sidebar} data={Khadamat} title={"خدمات حقوقی"} icon={<GiScales />} input={true} />
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
                              ثبت نام ارائه دهندگان حقوقی
                          </Button>
                      </div>
                  </div>

                  <ul className={styles.items}>
                      {Vakilha.map((item) => (

                        <li className={styles.list} key={item.id}>
                            <div className={styles.wrapper}>
                                <div className={styles.info}>
                                    <div className={styles.person}>
                                        <Image src={item.profile} alt="image" layout={"fill"} />
                                        <div className={styles.data}>
                                            <h2>
                                                {item.name}
                                            </h2>
                                            <h3>
                                                {item.expertise}
                                            </h3>
                                        </div>
                                    </div>
                                    <div>
                                        <Button>
                                            شماره تماس <span>{item.tel}</span>
                                        </Button>
                                    </div>
                                </div>
                                <div className={styles.address}>
                                    <AddressList />
                                    {item.address}
                                </div>
                            </div>
                        </li>
                      ))}
                  </ul>

                </div>
            </section>
        </Fragment>
    )
}

export default Legal;