import {Fragment} from "react";
import styles from './mobile-startup.module.css';
import Image from "next/image";
import img from '../../../public/images/startup/ecomotive.png';
import Card from "../../ui/card";
import {allStartUp} from "../../../data/startup";
import MobileStartupItem from "./mobile-startup-item";

const MobileStartup = () => {

    const startUpItems = allStartUp();

    return (
        <Fragment>
            <div className={styles.list}>
                {startUpItems.map((item, i) => {
                    return (
                        <MobileStartupItem
                            key={i}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            description={item.description}
                            founder={item.founder}
                        />
                    )
                })}
            </div>
        </Fragment>
    )
};

export default MobileStartup;