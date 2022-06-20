import {Fragment, useState} from "react";
import styles from './insurance.module.css';
import FormBg from "../../ui/form-bg";
import FirstContent from "./first-content";
import SecondContent from "./second-content";
import ThirdContent from "./third-content";
import FourthContent from "./fourth-content";
import FifthContent from "./fifth-content";
import PageHeader from "../../ui/page-header";

const Insurance = () => {

    const [toggle, setToggle] = useState(1);

    const toggleTab = (index) => {
        setToggle(index);
    };

    return (
        <Fragment>
            <PageHeader title="خدمات بیمه" pageTitle="خدمات" pageLink="/"  image="insurance.jpg" />
            <section className={styles.insurance}>
                <FormBg className={styles.bg}>
                    <ul className={`insuranceBtn ${styles.btnList}`}>
                        <li className={toggle === 1 ? 'active' : null} onClick={() => {toggleTab(1)}}>
                            بیمه تامین اجتماعی
                        </li>
                        <li className={toggle === 2 ? 'active' : null} onClick={() => {toggleTab(2)}}>
                            بیمه عمر و حوادث
                        </li>
                        <li className={toggle === 3 ? 'active' : null} onClick={() => {toggleTab(3)}}>
                            بیمه تکمیلی
                        </li>
                        <li className={toggle === 4 ? 'active' : null} onClick={() => {toggleTab(4)}}>
                            بیمه آتش سوزی
                        </li>
                        <li className={toggle === 5 ? 'active' : null} onClick={() => {toggleTab(5)}}>
                            بیمه مسافرتی
                        </li>
                    </ul>
                    <div className={`insurance_content ${styles.content}`}>
                        {
                            toggle === 1 ? (
                                <FirstContent />
                            ) : null
                        }
                        {
                            toggle === 2 ? (
                                <SecondContent />
                            ) : null
                        }
                        {
                            toggle === 3 ? (
                                <ThirdContent />
                            ) : null
                        }
                        {
                            toggle === 4 ? (
                                <FourthContent />
                            ) : null
                        }
                        {
                            toggle === 5 ? (
                                <FifthContent />
                            ) : null
                        }
                    </div>
                </FormBg>
            </section>
        </Fragment>
    )
};

export default Insurance;