import React, { useRef, useState } from "react";
import Image from "next/image";
import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';
import styles from "./slider.module.css";

export default function Slider({ Imgs }) {
  const [mainImage, setMainImage] = useState(0);

  return (
    <div id={styles.silderorigin}>
        <div className={styles.imgorigin}>
            <Image src={Imgs[`${mainImage}`].img} />
            <button className={styles.left} onClick={() =>mainImage < (Imgs.length - 1) && setMainImage(mainImage + 1)}><BsChevronLeft /></button>
            <button className={styles.right} onClick={() =>mainImage > 0 && setMainImage(mainImage - 1)}><BsChevronRight /></button>
        </div>

        <div className={styles.box_miniimg}>
                {Imgs.map((item, index) => (
                    <div className={styles.miniimg} onClick={() => setMainImage(index)} >
                        <Image src={item.img} />
                    </div>
                ))}
        </div>

    </div>
  );
}


      {/* <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff"
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {Imgs.map((item) => (
            <SwiperSlide>
                <Image src={item.img} />
            </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
      {Imgs.map((item) => (
          <SwiperSlide>
              <Image src={item.img} />
          </SwiperSlide>
      ))}
      </Swiper> */}