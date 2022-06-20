import {Fragment} from "react";
import PageHeader from "../../ui/page-header";
import styles from "../publish/publish.module.css";
import FormBg from "../../ui/form-bg";
import Button from "../../ui/button";

const Investment = () => {
    return (
        <Fragment>
            <PageHeader title=" ثبت نام متقاضیان سرمایه گذاران" pageTitle="خدمات" pageLink="/" image="entrepreneur.jpg" />
            <section className={styles.main}>
                <FormBg className={styles.publish}>
                    <div></div>
                    <div>
                        <h2 className={styles.title}>
                            ثبت نام متقاضیان سرمایه گذاران
                        </h2>
                        <form>
                            <div className={styles.controls}>
                                <label htmlFor="name">
                                    نام و نام خانوادگی
                                </label>
                                <input type="text" name="name" id="name" />
                            </div>
                            <div className={styles.controls}>
                                <label htmlFor="mobile">
                                    نلفن همراه
                                </label>
                                <input type="number" name="mobile" id="mobile" />
                            </div>
                            <div className={styles.controls}>
                                <label htmlFor="city">
                                    شهر
                                </label>
                                <input type="text" name="city" id="city" />
                            </div>
                            <div className={styles.controls}>
                                <label htmlFor="address">
                                    آدرس
                                </label>
                                <input type="text" name="address" id="address" />
                            </div>
                            <div className={styles.controls}>
                                <label htmlFor="jobs">
                                    در چه مشاغلی امکان کار آفرینی و ایجاد اشتغال دارید؟
                                </label>
                                <textarea id="jobs" name="jobsc">

                                </textarea>
                            </div>
                            <div className={styles.controls}>
                                <label htmlFor="desc">
                                    توضیحات در رابطه با طرح و ایده مورد نظر
                                </label>
                                <textarea id="desc" name="desc">

                                </textarea>
                            </div>
                            <Button>
                                ارسال درخواست
                            </Button>
                        </form>
                    </div>
                    <div></div>
                </FormBg>
            </section>
        </Fragment>
    )
};

export default Investment;