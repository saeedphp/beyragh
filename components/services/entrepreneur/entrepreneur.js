import {Fragment, useState} from "react";
import styles from '../publish/publish.module.css';
import PageHeader from "../../ui/page-header";
import GreenBtn from "../../ui/green-btn";
import Button from "../../ui/button";
import FormBg from "../../ui/form-bg";

const Entrepreneur = () => {

    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [jobs, setJobs] = useState('');
    const [desc, setDesc] = useState('');

    const nameChangeHandler = (e) => {
        setName(e.target.value);
    }

    const mobileChangeHandler = (e) => {
        setMobile(e.target.value);
    }

    const cityChangeHandler = (e) => {
        setCity(e.target.value);
    }

    const addressChangeHandler = (e) => {
        setAddress(e.target.value);
    }

    const jobsChangeHandler = (e) => {
        setJobs(e.target.value);
    }

    const descChangeHandler = (e) => {
        setDesc(e.target.value);
    }

    return (
        <Fragment>
            <PageHeader title=" ثبت نام کارآفرینان" pageTitle="خدمات" pageLink="/" image="entrepreneur.jpg" />
            <section className={styles.main}>
                <FormBg className={styles.publish}>
                    <div></div>
                    <div>
                        <h2 className={styles.title}>
                            ثبت نام کارآفرینان
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
                            <div className={styles.controls}>
                                <label htmlFor="file">
                                    آپلود مدارک
                                </label>
                                <input type="file" name="file" id="file" />
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

export default Entrepreneur;