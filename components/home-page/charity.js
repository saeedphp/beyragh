import {Fragment} from "react";
import styles from './charity.module.css';
import WhiteBtnArrow from "../icons/white-btn-arrow";
import WhiteBtn from "../ui/white-btn";
import TickCharity from "../icons/tick-charity";
import GreenBtn from "../ui/green-btn";

const Charity = () => {
    return (
        <Fragment>
            <section className={styles.charity}>
                <div className={styles.wrapper}>
                    <div className={styles.desc}>
                        <div className={styles.box}>
                            <h3 className={styles.title}>
                                خیریه بیرق
                            </h3>
                            <p className={styles.description}>
                                لورم  ایپسوم  متن  ساختگی با تولید سادگی  نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.چاپگرها و متون بلکه روزنامه و مجله ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                            </p>
                            <WhiteBtn>
                                امکان ثبت درخواست کمک
                            </WhiteBtn>
                        </div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.rightBox}>
                            <h3 className={styles.infoTitle}>
                                خیریه بیرق
                            </h3>
                            <p className={styles.intro}>
                                لورم ایپسوم متن ساختگی با تولید سادگی  نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                            </p>
                            <ul className={styles.item}>
                                <li className={styles.items}>
                                    <TickCharity />
                                    تحصیل و آموزش
                                </li>
                                <li className={styles.items}>
                                    <TickCharity />
                                    زنان سرپرست خانواده
                                </li>
                                <li className={styles.items}>
                                    <TickCharity />
                                    توانمندسازی
                                </li>
                                <li className={styles.items}>
                                    <TickCharity />
                                    زندانیان مالی
                                </li>
                                <li className={styles.items}>
                                    <TickCharity />
                                    مشارکت اجتماعی
                                </li>
                                <li className={styles.items}>
                                    <TickCharity />
                                    مسکن
                                </li>
                            </ul>
                            <GreenBtn>
                                مکان ثبت توانمندی ها
                            </GreenBtn>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
};

export default Charity;