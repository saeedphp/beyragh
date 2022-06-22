import Image from "next/image";
import {Fragment} from "react";
import { allAdmirers, Khadamat } from "../../../data/admirers";
import { GiScales } from 'react-icons/gi';
import AddressList from "../../icons/address-list";
import MedicalSignup from "../../icons/medical-signup";
import SearchFilter from "../../icons/search-filter";
import Sidebar from "../../layout/sidebar/sidebar";
import Button from "../../ui/button";
import styles from './admirers.module.css';

const Admirers = () => {
    const Madahan = allAdmirers();
    return (
        <Fragment>
            <section id={styles.admirers}>
              <div className={styles.sidebarbox}>
                  <Sidebar className={styles.sidebar} data={Khadamat} title={"دسته بندی"} input={false} checkBox={true} />
              </div>
              <div className={styles.main}>

                  <div className={styles.top}>
                      <div className={styles.search}>
                          <input type="text" placeholder="نام سخنران یا مداح مورد نظر را جستجو کنید" />
                          <span>
                              <SearchFilter />
                          </span>
                      </div>
                  </div>

                  <ul className={styles.items}>
                      {Madahan.map((item) => (

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

export default Admirers;
