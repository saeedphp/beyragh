import styles from "./items.module.css";
import BlogItem from "../home-page/blog-item";
import {allBlogs} from "../../data/blog";
import { connect } from "react-redux";

const Items = ({blogItems}) => {

    // const blogItems = allBlogs();
    

    return (
        <div className={styles['blog-items']}>
            {blogItems.map((item, index) => (
                <BlogItem
                    key={index}
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    category={item.related_post_category}
                    date={item.created_date}
                />
            ))}
        </div>
    );
};
const mapStateToProps = state => ({
    blogItems: state.blogReducer.list,
    
})
export default connect(mapStateToProps)(Items);