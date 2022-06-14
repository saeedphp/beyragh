import {Fragment} from "react";
import styles from './blog.module.css';
import ItemBtn from "../ui/item-btn";
import Slider from "react-slick";
import {allBlogs} from "../../data/blog";
import BlogItem from "./blog-item";

const Blog = () => {

    const blogItems = allBlogs();

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        rtl: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                    infinite: false,
                    loop: false,
                    speed: 500,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    };

    return (
        <Fragment>
            <section id="blog" className={styles.blog}>
                <div className={styles['row-top']}>
                    <h2 className={styles.title}>
                        اخبار و رویداد ها
                    </h2>
                    <ItemBtn className={styles.link} link='#'>
                        مشاهده همه مطالب
                    </ItemBtn>
                </div>
                <div className={styles['row-bottom']}>
                    <Slider {...settings}>
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
                    </Slider>
                </div>
            </section>
        </Fragment>
    )
};

export default Blog;