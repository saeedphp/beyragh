import {Fragment, useState} from "react";
import styles from './loan-facilities.module.css';
import PageHeader from "../../ui/page-header";
import FormBg from "../../ui/form-bg";
import Button from "../../ui/button";
import PersonForm from "./person-form";
import OrgForm from "./org-form";

const LoanFacilities = () => {

    const [toggle, setToggle] = useState(1);

    const toggleTab = (index) => {
        setToggle(index);
    };

    return (
        <Fragment>
            <PageHeader title=" قرض الحسنه و تسهیالت" pageTitle="خدمات" pageLink="/"  image="loan.jpg" />
            <section className={styles.facilities}>
                <FormBg>
                    <div className={styles.boxWrapper}>
                        <div className={styles.box}>
                            <h3 className={styles.title}>
                                شرایط و ضوابط درخواست وام
                            </h3>
                            <div className={styles.row}>
                                <p className={styles.desc}>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                    گرافیک است.
                                    چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبودابزارهای کاربردی می باشد. کتابهای
                                    زیادی در
                                    شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم
                                    افزارها
                                    شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
                                    فارسی
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
                                <h2>
                                    فرم درخواست وام
                                </h2>
                                <div className={styles.define}>
                                    <p>
                                        درخواست وام برای
                                    </p>
                                    <div>
                                        <span>
                                            <input onClick={() => {
                                                toggleTab(1)
                                            }} type="radio" name="loan"/>
                                        <label>
                                            شخصی
                                        </label>
                                        </span>
                                        <span>
                                            <input onClick={() => {
                                                toggleTab(2)
                                            }} type="radio" name="loan"/>
                                        <label>
                                            سازمان
                                        </label>
                                        </span>
                                    </div>
                                </div>

                                {toggle === 1 ? (
                                    <PersonForm />
                                ) : null}

                                {toggle === 2 ? (
                                    <OrgForm />
                                ) : null}

                            </div>
                            <div></div>
                        </div>

                    </div>
                </FormBg>
            </section>
        </Fragment>
    )
};

export default LoanFacilities;