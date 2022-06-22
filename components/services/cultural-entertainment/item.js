import {Fragment} from "react";
import styles from "./item.module.css";
import Link from "next/link";
import Image from "next/image";
import imgPath from "../../../public/images/services/entertainment/1.jpg";
import pool from "../../../public/images/services/entertainment/pool.png";
import Location from "../../icons/location";
import Button from "../../ui/button";
import EntertainmentArrow from "../../icons/entertainment-arrow";

const Item = (props) => {

    const {id, image, icon, title, description, location, category, link} = props;
    const img = `${image}`;
    const iconPath = `${icon}`;
    const shortDesc = description.slice(0,100,'...');

    return (
        <Fragment>
            <div className={styles.item}>
                <Link href="/">
                    <a className={styles.img}>
                           <span>
                        <Image src={`/${img}`} alt={title} layout={"fill"} />
                    </span>
                    </a>
                </Link>
                <div className={styles.info}>
                    <Link href="/">
                        <a>
                                <span>
                                    <Image src={`/${iconPath}`} alt="image" layout={"fill"} />
                                </span>
                            {title}
                        </a>
                    </Link>
                    <p>
                        {shortDesc}
                    </p>
                </div>
                <div className={styles.data}>
                    <a>
                        <Location />
                        {location}
                    </a>
                    <Link href={`/service/entertainment/${id}`}>
                        <Button className={styles.btn}>
                            مشاهده جزئیات
                            <EntertainmentArrow />
                        </Button>
                    </Link>
                </div>
            </div>
        </Fragment>
    )
};

export default Item;