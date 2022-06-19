import {Fragment} from "react";
import styles from "./mobile-startup-item.module.css";
import Image from "next/image";
import img from "../../../public/images/startup/ecomotive.png";
import Card from "../../ui/card";

const MobileStartupItem = (props) => {

    const {id, name, image, description, founder} = props;

    return (
        <Fragment>
            <Card className={styles.item}>
                    <span>
                        <Image src={img} alt={name} layout={"fill"} />
                    </span>
                <span className={styles.divider}></span>
                <h2>
                    {name}
                </h2>
                <p>
                    {description}
                </p>
                <div className={styles.info}>
                        <span>
                            بنیان گذار
                        </span>
                    <span>
                            {founder}
                        </span>
                </div>
            </Card>
        </Fragment>
    )
};

export default MobileStartupItem;