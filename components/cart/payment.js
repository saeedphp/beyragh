import {Fragment, useEffect, useState} from "react";
import Image from "next/image";
import { BsTrash } from 'react-icons/bs';
import Mac from "../../public/images/shopservice/mac.png";
import styles from './payment.module.css';
import Button from "../ui/button";
import { AllShopData } from "../../data/shopdata";
import Input from "../form/input";
import Select from "../form/select";
import Mellat from "../../public/images/cart/Mellat.png";
import Pasargad from "../../public/images/cart/pasargad.png";
import Shaparak from "../../public/images/cart/shaparak.png";

const Payment = () => {
    const Product = AllShopData();

    return (
        <Fragment>
            <section id={styles.payment}>
                <div className={styles.right}>
                    <div className={styles.form}>
                        <h4>جزئیات صورت حساب</h4>
                        <Input title="نام و نام خانوادگی" />
                        <Select title="شهر و استان" />
                        <Input title="آدرس" />
                        <Input title="کدپستی" />
                        <Input title="شماره" />
                    </div>
                </div>
                <div className={styles.left}>
                    <div className={styles.form}>
                        <h4>جزپیات سفارش</h4>
                        <span>محصول</span>
                        <div className={styles.cartlist}>
                            <div>
                                <h6>Macbook Pro 2019 mv932 i9</h6>
                                <span>1</span>
                                <h5>50000 تومان</h5>
                            </div>
                            <div>
                                <h6>تیشرت مردانه</h6>
                                <span>1</span>
                                <h5>50000 تومان</h5>
                            </div>
                        </div>

                        <div className={styles.bill}>
                            <div>
                                <h6>جمع جز</h6>
                                <h5>50000 تومان</h5>
                            </div>
                            <div>
                                <h6>جمع کل</h6>
                                <h5>50000 تومان</h5>
                            </div>
                        </div>

                        <div className={styles.payport}>
                            <h5>انتخاب درگاه پرداخت</h5>
                            <form className={styles.listport}>
                                <div className={styles.port} >
                                    <Image src={Shaparak} />
                                    <input type="radio" name="port" />
                                </div>
                                <div className={styles.port} >
                                    <Image src={Pasargad} />
                                    <input type="radio" name="port" />
                                </div>
                                <div className={styles.port} >
                                    <Image src={Mellat} />
                                    <input type="radio" name="port" />
                                </div>
                            </form>
                        </div>

                        <div className={styles.paybtn}>
                            <Button>پرداخت</Button>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
};

export default Payment;