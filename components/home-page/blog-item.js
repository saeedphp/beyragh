import styles from "./blog-item.module.css";
import Link from "next/link";
import Image from "next/image";
import Date from "../icons/date";
import BlogArrow from "../icons/blog-arrow";
import { connect } from "react-redux";

const BlogItem = (props) => {

    const {id, image, title, description, category, date, blogCategories} = props;
    const imgPath = `${image}`;
    const link = `/blog/${id}`;
    const categoryTitle = blogCategories.find(itm => itm.id == category)?.title;

    return (
        <div className={styles.items}>
            {
                image && <Link href={link}>
                <a>
                    <Image src={`/${imgPath}`} alt={title} layout={"fill"} />
                </a>
            </Link>
            }
            <div className={styles.meta}>
                <h4 className={styles.category}>
                    {categoryTitle}
                </h4>
                <time className={styles.time}>
                    <Date />
                    {date.slice(0,10).replace(/-/g,"/")}
                </time>
            </div>
            <Link href={link}>
                <a>
                    <h2 className={styles['blog-title']}>
                        {title}
                    </h2>
                </a>
            </Link>
            <p className={styles['blog-expert']}>
                {description.slice(0, 254)+ '...' }
            </p>
            <Link href={link}>
                <a className={styles['blog-link']}>
                    بیشتر بخوانید
                    <BlogArrow />
                </a>
            </Link>
        </div>
    )
};

const mapStateToProps = (state) => ({
    blogCategories: state.blogReducer.categories,
})

export default connect(mapStateToProps)(BlogItem);