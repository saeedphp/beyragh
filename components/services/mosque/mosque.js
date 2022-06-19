import {Fragment} from "react";
import PageHeader from "../../ui/page-header";
import styles from "../publish/publish.module.css";
import FormBg from "../../ui/form-bg";
import Button from "../../ui/button";

const Mosque = () => {
    return (
        <Fragment>
            <PageHeader title="  ثبت نام کسب و کارهای هیئت محور" pageTitle="خدمات" pageLink="/" image="mosque.jpg" />
            <section className={styles.main}>
                <FormBg className={styles.publish}>
                    <div></div>
                    <div>
                        <h2 className={styles.title}>
                            ثبت نام کسب و کارهای هیئت محور
                        </h2>
                        <form>
                            <div className={styles.controls}>
                                <label htmlFor="name">
                                    نام و نام خانوادگی
                                </label>
                                <input type="text" name="name" id="name" />
                            </div>
                            <div className={styles.controls}>
                                <label htmlFor="business">
                                    نام کسب و کار
                                </label>
                                <input type="text" name="business" id="business" />
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
                                <p>
                                    کدام خدمات حقوقی را ارائه می کنید؟
                                </p>
                                <input type="checkbox" name="legal" id="address" />
                                <input type="checkbox" name="legal" id="address" />
                            </div>
                            <div className={styles.controls}>
                                <label htmlFor="jobs">
                                    کسب و کار شما چه خدماتی ارائه می دهد؟
                                </label>
                                <textarea id="jobs" name="jobsc">

                                </textarea>
                            </div>
                            <div className={styles.controls}>
                                <label htmlFor="desc">
                                    سایر توضیحات درباره کسب و کار شما
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

export default Mosque;