import {Fragment, useState} from "react";
import styles from './gallery.module.css';
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import club from '../../public/images/services/entertainment/gym.png';
import { FreeMode, Navigation, Thumbs } from "swiper";
import Card from "../../components/ui/card";
import CheckItem from "../../components/icons/check-item";
import EntertainmentTel from "../../components/icons/entertainment-tel";
import Link from "../../components/icons/link";
import {
    FacebookShareCount,
    HatenaShareCount,
    OKShareCount,
    PinterestShareCount,
    RedditShareCount,
    TumblrShareCount,
    VKShareCount
} from "react-share";

const Gallery = (props) => {

    const {gallery} = props;

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <Fragment>
            <div className={styles.gallery}>
                <Swiper
                    style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                    }}
                    loop={true}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                >
                    {gallery.map((item, i) => {
                        const imgPath = item.src;
                        return (
                            <SwiperSlide key={i}>
                                <img src={imgPath} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                >
                    {gallery.map((item, i) => {
                        const imgPath = item.src;
                        return (
                            <SwiperSlide key={i}>
                                <img src={imgPath} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </Fragment>
    )
};

export default Gallery;