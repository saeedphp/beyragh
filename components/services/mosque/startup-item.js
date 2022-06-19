import {Fragment} from "react";
import styles from "./startup.module.css";
import Image from "next/image";
import img from "../../../public/images/startup/ecomotive.png";

const StartupItem = (props) => {

    const {id, name, image, description, founder} = props;
    const imgPath = `${image}`;

    return (
        <Fragment>
            <div className={styles.item}>
                <p>
                                <span>
                                    <Image src={`/${imgPath}`} alt={name} layout={"fill"}/>
                                </span>
                    {name}
                </p>
                <p>
                    {description}
                </p>
                <p>
                    {founder}
                </p>
            </div>
        </Fragment>
    );
};

export default StartupItem;