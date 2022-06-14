import {Fragment} from "react";
import styles from './mourning.module.css';
import {allMourning} from "../../data/mourning";
import MourningItem from "./mourning-item";
import SliderMourning from "react-slick";

const Mourning = () => {

    const mourningItems = allMourning();

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
            <section id="mourning" className={styles.mourning}>
                <h2 className={styles.title}>
                    هیئت و مجالس
                </h2>
                <SliderMourning {...settings}>
                    {mourningItems.map((item, index) => (
                        <MourningItem
                            key={index}
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                            link={item.link}
                        />
                    ))}
                </SliderMourning>
            </section>
        </Fragment>
    );
};

export default Mourning;