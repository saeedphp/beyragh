import {Fragment} from "react";
import styles from './blog.module.css';
import Items from "./items";
import Sidebar from "./sidebar";

const Blog = () => {

    return (
        <Fragment>
            <section className={styles.blog}>
                <Sidebar />
                <Items />
            </section>
        </Fragment>
    );
};

export default Blog;