import {Fragment} from "react";
import styles from './slider.module.css';
import SliderShow from "react-slick";
import Image from "next/image";
import Link from "next/link";
import {allSlides} from "../../data/slider";

const Slider = () => {

    const slideItems = allSlides();

    const settings = {
        dots: true,
        arrows: false,
        infinite: false,
        loop: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        rtl: true,
        autoplay: true,
        onMouseOver: true,
    };

    return (
      <Fragment>
          <section className={styles.slider}>
              <SliderShow {...settings}>
                  {slideItems.map((item, index) => (
                      <div key={index} className={styles.imgWrapper}>
                          <Link href={`/${item.link}`}>
                              <a>
                                  <Image src={`/${item.slide}`} alt={item.alt} layout={"fill"} />
                              </a>
                          </Link>
                      </div>
                  ))}
              </SliderShow>
          </section>
      </Fragment>
    );
};

export default Slider;