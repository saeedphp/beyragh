import {Fragment, useEffect, useState} from "react";
import styles from './faq.module.css';
import {allFaqs} from "../../data/faq";
import FaqItem from "./faq-item";
import { connect } from "react-redux";
import { publicApi } from "../../redux/actions";
const Faq = ({
    getFaqs,
    faqs
}) => {

    useEffect(() => {
        getFaqs();
    }, [])
    const staticItems = allFaqs();
    const items = [...staticItems, ...faqs]

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
const mapStateToProps = state => ({
    faqs: state.publicApi.faqs
});
const mapDispatchToProps ={
    getFaqs: publicApi.getFaqs,
}

   

export default connect(mapStateToProps, mapDispatchToProps)(Faq);