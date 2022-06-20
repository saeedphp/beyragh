import {Fragment, useEffect, useState} from "react";
import styles from './faq.module.css';
import {allFaqs} from "../../data/faq";
import FaqItem from "./faq-item";
import { connect } from "react-redux";
const Faq = ({}) => {

    useEffect(() => {

    }, [])
    const staticItems = allFaqs();
    const items = [...staticItems]

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

   

export default (Faq);