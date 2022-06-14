import {Fragment, useState} from "react";
import styles from './faq.module.css';
import {allFaqs} from "../../data/faq";
import FaqItem from "./faq-item";

const Faq = () => {

    const items = allFaqs();

    return (
        <Fragment>
            <section className={styles.faq}>
                <div className={styles.title}>
                    <h1>
                        سوالات متداول
                    </h1>
                </div>

                <ul>
                    {items.map((item, index) => (
                        <FaqItem
                            key={index}
                            id={item.id}
                            title={item.title}
                            desc={item.desc}
                        />
                    ))}
                </ul>

            </section>
        </Fragment>
    )
};

export default Faq;