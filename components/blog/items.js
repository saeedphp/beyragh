import styles from "./items.module.css";
import BlogItem from "../home-page/blog-item";
import {allBlogs} from "../../data/blog";

const Items = () => {

    const blogItems = allBlogs();

    return (
        <div className={styles['blog-items']}>
            {blogItems.map((item, index) => (
                <BlogItem
                    key={index}
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    category={item.category}
                    date={item.date}
                />
            ))}
        </div>
    );
};

export default Items;