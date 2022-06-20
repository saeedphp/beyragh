import {Fragment, useState} from "react";
import styles from './category.module.css';
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import SliderShow from "react-slick";
import {allEntertainments} from '../../../data/service/entertainment'

const Category = () => {

    const blogs = allEntertainments();
    const [category, setCategory] = useState("all");
    const categories = Array.from(new Set(blogs.map((b) => b.category)));
    const settings = {
        dots: false,
        arrows: false,
        infinite: false,
        loop: false,
        slidesToShow: 4,
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
                    dots: true,
                    arrows: false,
                    infinite: false,
                    loop: false,
                    speed: 500,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                    infinite: false,
                    loop: false,
                    speed: 500,
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                    infinite: false,
                    loop: false,
                    speed: 500,
                }
            },
        ]
    };

    return (
        <Fragment>
            <span  onClick={() => setCategory("all")} className="active">
                همه
            </span>
            <SliderShow {...settings}>
                {categories.map((c, i) => {
                    return (
                        <div key={i} onClick={() => setCategory(c)}>
                            {c}
                        </div>
                    )
                })}
            </SliderShow>
        </Fragment>
    );
};

export default Category;