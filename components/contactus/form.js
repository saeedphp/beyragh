import {Fragment} from "react";
import styles from './form.module.css';
import GreenBtn from "../ui/green-btn";
import Button from "../ui/button";

const Form = () => {
    return (
        <Fragment>
            <div className={styles.form}>
                <h3 className={styles.title}>
                    نظرات و پیشنهادات خود را با درمیان بگذارید
                </h3>
                <form action="">
                    <div className={styles.controls}>
                        <div className={styles.control}>
                            <label htmlFor="name">
                                نام و نام خانوادگی
                            </label>
                            <input name="name" id="name" type="text"/>
                        </div>
                        <div className={styles.control}>
                            <label htmlFor="tel">
                                شماره تماس
                            </label>
                            <input name="tel" id="tel" type="tel"/>
                        </div>
                    </div>
                    <div className={styles.control}>
                        <label htmlFor="message">
                            متن مورد نظر خود را بنویسد
                        </label>
                        <textarea name="message" id="message">

                        </textarea>
                    </div>
                    <Button className={styles.btn}>
                        ارسال
                    </Button>
                </form>
            </div>
        </Fragment>
    )
};

export default Form;