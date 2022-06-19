import {Fragment} from "react";
import styles from "./first-content.module.css";
import Button from "../../ui/button";

const SecondContent = () => {
    return (
        <Fragment>
            <div>
                <div className={styles.box}>
                    <h3 className={styles.title}>
                        شرایط و ضوابط
                    </h3>
                    <div className={styles.row}>
                        <p className={styles.desc}>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                            تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبودابزارهای کاربردی می باشد. کتابهای زیادی در
                            شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها
                            شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی
                            ایجاد کرد. در این صورت می توان امید داشت
                        </p>
                        <input type="checkbox" name="rules" id="rules"/>
                        <label>
                            شرایط فوق را مطالعه و میپذیرم
                        </label>
                    </div>
                </div>

                <div className={styles.columnWrapper}>
                    <div></div>
                    <div>
                        <form className={styles.form}>
                            <h2>
                                فرم درخواست بیمه عمر و حوادث
                            </h2>
                            <div className={styles.controls}>
                                <label>
                                    نام و نام خانوادگی
                                </label>
                                <input type="text"/>
                            </div>
                            <div className={styles.controls}>
                                <label>
                                    تاریخ تولد
                                </label>
                                <input type="date"/>
                            </div>
                            <div className={styles.controls}>
                                <label>
                                    کد ملی
                                </label>
                                <input type="number"/>
                            </div>
                            <div className={styles.controls}>
                                <label>
                                    نام پدر
                                </label>
                                <input type="text"/>
                            </div>
                            <div className={styles.controls}>
                                <label>
                                    صادره از
                                </label>
                                <input type="text"/>
                            </div>
                            <div className={styles.controls}>
                                <label>
                                    صادره از
                                </label>
                                <select>
                                    <option value="1">
                                        تهران
                                    </option>
                                    <option value="2">
                                        آذربایجان شرقی
                                    </option>
                                    <option value="3">
                                        آذربایجان غربی
                                    </option>
                                </select>
                            </div>
                            <div className={styles.controls}>
                                <label>
                                    استان - شهر
                                </label>
                                <select>
                                    <option value="1">
                                        تهران
                                    </option>
                                    <option value="2">
                                        آذربایجان شرقی
                                    </option>
                                    <option value="3">
                                        آذربایجان غربی
                                    </option>
                                </select>
                            </div>
                            <div className={styles.controls}>
                                <label>
                                    آدرس محل سکونت
                                </label>
                                <input type="text"/>
                            </div>
                            <div className={styles.controls}>
                                <label>
                                    شماره تماس
                                </label>
                                <input type="number"/>
                            </div>
                            <div className={styles.controls}>
                                <label>
                                    سن بیمه گذار
                                </label>
                                <input type="number"/>
                            </div>
                            <div className={styles.controls}>
                                <label>
                                    سن بیمه شده
                                </label>
                                <input type="number"/>
                            </div>
                            <div className={styles.controls}>
                                <label>
                                    حق بیمه قابل پرداخت
                                </label>
                                <input type="number"/>
                            </div>
                            <div className={styles.controls}>
                                <label>
                                    تعداد اقساط پرداخت حق بیمه
                                </label>
                                <select>
                                    <option value="1">
                                        1 قسط
                                    </option>
                                    <option value="2">
                                        2 قسط
                                    </option>
                                    <option value="3">
                                        3 قسط
                                    </option>
                                </select>
                            </div>
                            <div className={styles.controls}>
                                <label>
                                    اولویت اصلی شمااز خرید بیمه عمر و تشکیل سرمایه چیست؟
                                </label>
                                <select>
                                    <option value="1">
                                        اندوخته سازی
                                    </option>
                                    <option value="2">
                                        اندوخته سازی
                                    </option>
                                    <option value="3">
                                        اندوخته سازی
                                    </option>
                                </select>
                            </div>

                            <div className={styles.controls}>
                        <span>
                            آیا به بیماری خاصی مبتلا می باشید؟
                        </span>
                                <div className={styles.wrapper}>
                                    <p>
                                        <input type="radio" name="insurance" value="1"/>
                                        <label>
                                            بله
                                        </label>
                                    </p>
                                    <p>
                                        <input type="radio" name="insurance" value="0"/>
                                        <label>
                                            خیر
                                        </label>
                                    </p>
                                </div>
                            </div>

                            <div className={styles.controls}>
                        <span>
                            آیا بیمه عمر و تشکیل سرمایه دیگری هم دارید
                        </span>
                                <div className={styles.wrapper}>
                                    <p>
                                        <input type="radio" name="insurance" value="1" />
                                        <label>
                                            بله
                                        </label>
                                    </p>
                                    <p>
                                        <input type="radio" name="insurance" value="0" />
                                        <label>
                                            خیر
                                        </label>
                                    </p>
                                </div>
                            </div>

                            <Button>
                                ثبت درخواست
                            </Button>
                        </form>
                    </div>
                    <div></div>
                </div>

            </div>
        </Fragment>
    );
};

export default SecondContent;