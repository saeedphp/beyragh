import {Fragment} from "react";
import styles from './publish.module.css';
import PageHeader from "../../ui/page-header";
import FormBg from "../../ui/form-bg";
import Button from "../../ui/button";

const Publish = () => {
    return (
        <Fragment>
            <PageHeader title="  ارسال درخواست چاپ اثر" pageTitle="خدمات" pageLink="/" image="publish.jpg" />
            <section className={styles.main}>
                <FormBg className={styles.publish}>
                    <div></div>
                    <div>
                        <h2 className={styles.title}>
                            فرم ارسال درخواست چاپ اثر
                        </h2>
                        <form>
                            <div className={styles.controls}>
                                <label htmlFor="name">
                                    نام و نام خانوادگی
                                </label>
                                <input type="text" name="name" id="name" />
                            </div>
                            <div className={styles.controls}>
                                <label htmlFor="art">
                                    نام اثر
                                </label>
                                <input type="text" name="art" id="art" />
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
                                <label htmlFor="desc">
                                    توضیحات در رابطه با اثر
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

export default Publish;