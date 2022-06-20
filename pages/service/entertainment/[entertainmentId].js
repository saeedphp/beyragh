import {Fragment, useState} from "react";
import PageHeader from "../../../components/ui/page-header";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import {allEntertainments} from '../../../data/service/entertainment';
import {useRouter} from "next/router";
import Gallery from "../../../components/entertainment-detail/gallery";
import Info from "../../../components/entertainment-detail/info";
import Description from "../../../components/entertainment-detail/description";
import Location from "../../../components/entertainment-detail/location";

const EntertainmentDetailPage = () => {

    const entertainments = allEntertainments();
    const router = useRouter();
    const {entertainmentId} = router.query;
    let currEnter;
    for (let item of entertainments) {
        if (item.id === entertainmentId) currEnter = item;
    }
    if (currEnter != undefined) {
        return (
            <Fragment>
                <PageHeader title={currEnter.title} pageTitle="خدمات" pageLink="/" />
                <section id="entertainment_detail">
                    <div className="detail_top">
                        <Gallery gallery={currEnter.gallery} />
                        <Info title={currEnter.title} icon={currEnter.icon} description={currEnter.description} specs={currEnter.specs} tels={currEnter.tels} link={currEnter.link} />
                    </div>
                    {/*<Location location={currEnter.location} />*/}
                    <Description content={currEnter.content} />
                </section>
            </Fragment>
        );
    }
    else
        return (
            <>
                <div>
                    <h2>مقاله مورد نظر یافت نشد !</h2>
                </div>
            </>
        );

/*    return (
        <Fragment>
            <PageHeader title=" امکانات فرهنگی تفریحی" pageTitle="خدمات" pageLink="/" />

            <section id="entertainment_single">

                {/!*<div className="gallery_entertainment">
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
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                        </SwiperSlide>
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
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className="info_entertainment">
                    <Card className="card">
                        <h2 className="title">
                            <span>
                                <Image src={club} alt="image" layout={"fill"} />
                            </span>
                            باشگاه بای فیتنس
                        </h2>
                        <p className="desc">
                            باشگاه ورزشی بای فیتنس با محیط مناسب و بهداشتی و همراهی مربیان و کادر حرفه ای، پذیرای ورزش دوستان عزیز است. ورزش علاوه  بر تزریق شادابی و نشاط، با حفظ سلامتی و تناسب اندام برای شما  اعتماد به نفس به ارمغان می‌آورد.
                        </p>
                        <ul>
                            <li>
                                <CheckItem />
                                اثر مستقیم بر آمادگی جسمانی
                            </li>
                            <li>
                                <CheckItem />
                                افزایش قدرت، سرعت، انعطاف، استقامت و هماهنگی
                            </li>
                            <li>
                                <CheckItem />
                                با تاثیر بر لغری و تناسب اندام
                            </li>
                            <li>
                                <CheckItem />
                                محیط مناسب و راحت
                            </li>
                        </ul>
                        <div className="tel_info">
                            <p>
                                شماره های تماس برای رزرو
                            </p>
                            <ul>
                                <li>
                                    <a href="tel: 02112345678">
                                        021-12345678
                                        <EntertainmentTel />
                                    </a>
                                </li>
                                <li>
                                    <a href="tel: 02112345678">
                                        021-12345678
                                        <EntertainmentTel />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="tel_info">
                            <p>
                                ادرس سایت
                            </p>
                            <a className="site_address" href="https://fitnessfirst.com.au">
                                fitnessfirst.com.au
                                <Link />
                            </a>
                        </div>
                    </Card>
                </div>*!/}

            </section>

        </Fragment>
    )*/

};

export default EntertainmentDetailPage;