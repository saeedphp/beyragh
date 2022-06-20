import {Fragment} from "react";
import styles from './medical.module.css';
import SearchFilter from "../../icons/search-filter";
import Button from "../../ui/button";
import MedicalSignup from "../../icons/medical-signup";
import Image from "next/image";
import img from '../../../public/images/services/medical/doctors/1.webp';
import AddressList from "../../icons/address-list";
<<<<<<< HEAD
import Sidebar from "../../layout/sidebar/sidebar";
import { FaStethoscope } from 'react-icons/fa';
import { Doctors, Takhasos } from "../../../data/medical";
=======
import PageHeader from "../../ui/page-header";
>>>>>>> 2a0efbbc24317269209a634dc2500d001aa6e7fc

const Medical = () => {
    const AllDoctors = Doctors();
    return (
      <Fragment>
          <PageHeader title=" امکانات فرهنگی تفریحی" pageTitle="خدمات" pageLink="/" />
          <section className={styles.doctors}>
              <div className={styles.sidebarbox}>
                <Sidebar className={styles.sidebar} data={Takhasos} title={"تخصص"} icon={<FaStethoscope />} 
                    input={true} Bcolor={"#9CDFFF"} Color={"#00B0FF"}
                />
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
                      {AllDoctors.map((item) => (

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
                                            شماره تماس {item.tel}
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
    );
};

export default Medical;