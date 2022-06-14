import {Fragment} from "react";
import styles from './shop.module.css';
import GreenBtn from "../ui/green-btn";
import Image from "next/image";
import imgPath from '../../public/images/laptop.webp';

const Shop = () => {
    return (
        <Fragment>
            <section className={styles.shop}>
                <div className={styles.info}>
                    <h2 className={styles.title}>
                        فروشگاه و بازار تبادل کالا
                    </h2>
                    <p className={styles.desc}>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.چاپگرها و متون بلکه روزنامه و مجله در ستون
                    </p>
                    <GreenBtn>
                        عرضه و تبادل محصولات
                    </GreenBtn>
                </div>
                <div className={styles.img}>
                    <Image src={imgPath} alt="image" layout={"fill"} />
                </div>
            </section>
        </Fragment>
    );
};

export default Shop;