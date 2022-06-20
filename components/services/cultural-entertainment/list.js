import {Fragment, useState} from "react";
import styles from './list.module.css';
import Item from "./item";
import {allEntertainments} from "../../../data/service/entertainment";
import Pagination from "../../ui/pagination";
import CitiesFilter from "./cities-filter";
import SliderShow from "react-slick";

const List = (props) => {

    const blogs = allEntertainments();
    const [category, setCategory] = useState("all");
    const categories = Array.from(new Set(blogs.map((b) => b.category)));
    const settings = {
        dots: false,
        arrows: true,
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

    const allEntertainment = allEntertainments();
    const [currentPage, setCurrentPage] = useState(1);
    const [itemPerPage, setItemPerPage] = useState(9);

    const [filteredCity, setFilteredCity] = useState('تهران');

    const filterChangeHandler = (selectedCity) => {
        setFilteredCity(selectedCity);
    };

    const filteredCities = allEntertainment.filter((city) => {
        return city.city === filteredCity;
    });

    const indexOfLastPost = currentPage * itemPerPage;
    const indexOfFirstPost = indexOfLastPost - itemPerPage;
    const currentPosts = filteredCities.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const prevPage = () => {
        if (currentPage === 1) {
            return null;
        }
        setCurrentPage(currentPage - 1)
    };

    const nextPage = () => {
        if (currentPage <= indexOfFirstPost) {
            return null;
        }
        setCurrentPage(currentPage + 1)
    };

    return (
        <Fragment>

            <div>
                <CitiesFilter
                    selected={filteredCity}
                    onChangeFilter={filterChangeHandler}
                />
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
            </div>
            <div className={styles.list}>
                {currentPosts.filter((item) => {
                    return (
                        item.title.includes(props.inputText)
                    )
                })
                    .map((item, i) => {
                        if (category == 'all') {
                            return (
                                <Item
                                    key={i}
                                    id={item.id}
                                    image={item.image}
                                    icon={item.icon}
                                    title={item.title}
                                    description={item.description}
                                    location={item.location}
                                    category={item.category}
                                    link={item.link}
                                />
                            )
                        }else if (item.category == category) {
                            return (
                                <Item
                                    key={i}
                                    id={item.id}
                                    image={item.image}
                                    icon={item.icon}
                                    title={item.title}
                                    description={item.description}
                                    location={item.location}
                                    category={item.category}
                                    link={item.link}
                                />
                            )
                        }

                    })}
                <Pagination
                    postsPerPage={itemPerPage}
                    totalPosts={allEntertainment.length}
                    paginate={paginate}
                    prevPage={prevPage}
                    nextPage={nextPage}
                    currentPage={currentPage}
                />
            </div>
        </Fragment>
    )
};

export default List;