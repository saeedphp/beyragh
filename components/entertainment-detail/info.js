import {Fragment} from "react";
import styles from './info.module.css';
import Image from "next/image";
import Card from "../ui/card";
import CheckItem from "../icons/check-item";
import EntertainmentTel from "../icons/entertainment-tel";
import Link from "../icons/link";
import Share from "../icons/share";

const Info = (props) => {

    const {title, icon, description, specs, tels, link} = props;

    return (
        <Fragment>
            <Card className={styles.info}>
                <h2 className={styles.title}>
                    <Image src={`/${icon}`} alt={title} layout={"fill"} />
                    {title}
                </h2>
                <p className={styles.desc}>
                    {description}
                </p>
                <ul className={styles.list}>
                    {specs.map((item, i) => {
                        return (
                            <li key={i}>
                                <CheckItem />
                                {item.title}
                            </li>
                        )
                    })}
                </ul>
                <div className={styles.contact}>
                    <p>
                        شماره های تماس برای رزرو
                    </p>
                    <div className={styles.telWrapper}>
                        {tels.map((item, i) => {
                            return (
                                <a key={i} href={`tel:${item.tel}`}>
                                    {item.tel}
                                    <EntertainmentTel />
                                </a>
                            )
                        })}
                    </div>
                </div>
                <div className={styles.contact}>
                    <p>
                        ادرس سایت
                    </p>
                    <a href={`https://${link}`}>
                        {link}
                        <Link />
                    </a>
                </div>
                <div className={styles.share}>
                    <p>
                        <Share />
                        اشتراک گذاری با دوستان
                    </p>
                </div>
            </Card>
        </Fragment>
    )
};

export default Info