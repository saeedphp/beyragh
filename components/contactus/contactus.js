import {Fragment} from "react";
import styles from './contactus.module.css';
import {getAllSocial} from "../../data/social";
import Info from "./info";
import Map from "./map";
import Form from "./form";

const Contactus = () => {

    return (
        <Fragment>
            <section className={styles.contactus}>
                <Map />
                <div className={styles.info}>
                    <div>
                        <Form />
                    </div>
                    <div>
                        <Info />
                    </div>
                </div>
            </section>
        </Fragment>
    )
};

export default Contactus;