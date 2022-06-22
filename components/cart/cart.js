import {Fragment, useEffect, useState} from "react";
import Image from "next/image";
import { BsTrash } from 'react-icons/bs';
import Mac from "../../public/images/shopservice/mac.png";
import styles from './cart.module.css';
import Button from "../ui/button";
import { AllShopData } from "../../data/shopdata";
import Link from "next/link";

const Cart = () => {
    const Product = AllShopData();

    return (
        <Fragment>
            <section id={styles.cart}>
                <div className={styles.list}>
                    <h5>سبد خرید</h5>
                    <div className={styles.title}>
                        <h6>محصول</h6>
                        <h6>قیمت</h6>
                        <h6>تعداد</h6>
                        <h6>جمع کل</h6>
                    </div>
                    {Product.map((item) => {
                            if (item.id == "sh1") {
                                return (
                                    <div className={styles.items} key={item.id}>
                                        <div className={styles.item}>
                                            <button><BsTrash /></button>
                                            <div className={styles.product}>
                                                <div className={styles.images}>
                                                    <Image src={item.image} alt={"Macbook pro 2019"} />
                                                </div>
                                                <h2>{item.title}</h2>
                                            </div>
                                        </div>
                                        <div className={styles.item}>
                                            <h6>قیمت</h6>
                                            <h4>{item.price} تومان</h4>
                                        </div>
                                        <div className={styles.item}>
                                            <h6>تعداد</h6>
                                            <div className={styles.counter}>
                                                <button>+</button>
                                                <span>1</span>
                                                <button>-</button>
                                            </div>
                                        </div>
                                        <div className={styles.item}>
                                            <h6>مجموع</h6>
                                            <h4>50000 تومان</h4>
                                        </div>
                                    </div> 
                                )
                            }
                        })                     
                    }

                    <div className={styles.footerlist}>
                        <div className={styles.off}>
                            <span>کد تخفیف</span>
                            <div className={styles.boxinput}>
                                <input type="text" />
                                <Button>اعمال کد تخفیف</Button>
                            </div>
                        </div>
                        <Button className={styles.update} >بروز رسانی سبد خرید</Button>
                    </div>
                </div>

                <div className={styles.bill}>
                    <span>جمع کل سبد خرید</span>
                    <div>
                        <h6>جمع جز</h6>
                        <h5>50000 تومان</h5>
                    </div>
                    <div>
                        <h6>جمع کل</h6>
                        <h5>50000 تومان</h5>
                    </div>
                    <Link href="/cart/paymentpage">
                        <Button>ادامه تسویه حساب</Button>
                    </Link>
                </div>
            </section>
        </Fragment>
    )
};

export default Cart;


{/* <table>
<tr>
    <th></th>
    <th>محصول</th>
    <th>قیمت</th>
    <th>تعداد</th>
    <th>جمع کل</th>
</tr>
<tr>
    <td><button><RiDeleteBin5Line /></button></td>
    <td>
        <div className={styles.product}>
            <div className={styles.images}>
                <Image src={Mac} alt={"Macbook pro 2019"} />
            </div>
            <h2>Macbook pro 2019 mv932 i9</h2>
        </div>
    </td>
    <td><h4>50000 تومان</h4></td>
    <td>
        <div className={styles.additem}>
            <button>+</button>
            <span>2</span>
            <button>-</button>
        </div>
    </td>
    <td><h4>50000 تومان</h4></td>
</tr>
</table> */}