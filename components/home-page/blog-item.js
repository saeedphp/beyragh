import styles from "./blog-item.module.css";
import Link from "next/link";
import Image from "next/image";
import Date from "../icons/date";
import BlogArrow from "../icons/blog-arrow";

const BlogItem = (props) => {

    const {id, image, title, description, category, date} = props;
    const imgPath = `${image}`;
    const link = `/blog/${id}`;

    return (
        <div className={styles.items}>
            <Link href={link}>
                <a>
                    <Image src={`/${imgPath}`} alt={title} layout={"fill"} />
                </a>
            </Link>
            <div className={styles.meta}>
                <h4 className={styles.category}>
                    {category}
                </h4>
                <time className={styles.time}>
                    <Date />
                    {date}
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

export default BlogItem;