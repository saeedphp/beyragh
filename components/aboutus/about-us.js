import {Fragment} from "react";
import styles from './about-us.module.css';
import Image from "next/image";
import img1 from '../../public/images/about.webp';
import Card from "../ui/card";

const AboutUs = () => {
    return (
        <Fragment>
            <section className={styles.aboutus}>
                <div>
                    <Image src={img1} alt="aboutus page image" layout={"fill"} />
                </div>
                <Card className={styles.wrapper}>
                    <h1 className={styles.title}>
                        درباره بنیاد دعبل خزاعی
                    </h1>
                    <p className={styles.desc}>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت  چاپ و با استفاده  از طراحان گرافیک است. چاپگرها  و متون  بلکه  روزنامه و مجله در ستون سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و  کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و گذشته، حال و آینده شناخت فراوان  جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان  فارسی ایجاد کرد. در این صورت می توان امید داشتلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت  چاپ و با استفاده  از طراحان گرافیک است. چاپگرها  و متون  بلکه  روزنامه و مجله در ستون سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی
                    </p>
                </Card>
            </section>
        </Fragment>
    )
};

export default AboutUs;