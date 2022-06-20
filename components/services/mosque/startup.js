import {Fragment} from "react";
import PageHeader from "../../ui/page-header";
import styles from './startup.module.css';
import Card from "../../ui/card";
import Image from "next/image";
import img from '../../../public/images/startup/ecomotive.png';
import LinkButton from "../../ui/link-button";
import {allStartUp} from "../../../data/startup";
import StartupItem from "./startup-item";
import MobileStartup from "./mobile-startup";
import News from "./news";

const Startup = () => {

    const startUps = allStartUp();

    return (
        <Fragment>
            <PageHeader title="استارت آپ های هیئت محور" pageTitle="خدمات" pageLink="/" image="mosque.jpg" />
            <Card className={styles.startup}>
                <div className={styles.top}>
                    <h2>
                        معرفی کسب و کارهای هیئت محور
                    </h2>
                    <LinkButton className={styles.btn} link="/">
                        ثبت نام کسب و کار
                    </LinkButton>
                </div>
                <div className={styles.business}>
                    <div className={styles.business_header}>
                        <p className={styles.title}>
                            عنوان
                        </p>
                        <p className={styles.desc}>
                            توضیحات
                        </p>
                        <p className={styles.founder}>
                            بنیان گذاری
                        </p>
                    </div>
                    <div className={styles.business__body}>
                        {startUps.map((item, i) => {
                            return (
                                <StartupItem
                                    key={i}
                                    id={item.id}
                                    image={item.image}
                                    name={item.name}
                                    description={item.description}
                                    founder={item.founder}
                                />
                            )
                        })}
                    </div>
                </div>
                <MobileStartup />
                <News />
            </Card>
        </Fragment>
    )
};

export default Startup;