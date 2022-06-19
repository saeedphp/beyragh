import {Fragment} from "react";
import styles from './news.module.css';
import Card from "../../ui/card";
import Link from "next/link";
import {getNews} from "../../../data/blog";
import SidebarItem from "./sidebar-item";
import Blogs from "./blogs";

const News = () => {

    const news = getNews();

    return (
        <Fragment>
            <div className={styles.news}>
                <h2>
                    اخبار جشنواره ها و رویدادها
                </h2>
                <div className={styles.main}>
                    <div className={styles.blogs}>
                        <Blogs />
                    </div>
                    <div className={styles.sidebar}>
                        <Card>
                            <h2>
                                آخرین مقالات
                            </h2>
                            <ul>
                                {news.map((item, i) => {
                                    return (
                                        <SidebarItem
                                            key={i}
                                            id={item.id}
                                            title={item.title}
                                            date={item.date}
                                        />
                                    )
                                })}
                            </ul>
                        </Card>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default News;