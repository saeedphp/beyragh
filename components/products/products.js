import {Fragment} from "react";
import styles from './products.module.css';
import PageHeader from "../ui/page-header";
import Content from "./content";

const Products = () => {
    return (
        <Fragment>
            <PageHeader title=" محصولات بنیاد" pageTitle="خدمات" pageLink="/" image="product.jpg" />
            <section className={styles.products}>
                <div className={styles.sidebar}>
                    filter
                </div>
                <div className={styles.content}>
                    <Content />
                </div>
            </section>
        </Fragment>
    )
};

export default Products;