import {Fragment} from "react";
import { useState, useEffect } from "react";
import { AllShopData } from "../../data/shopdata";
import { IoCallSharp } from 'react-icons/io5';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { BsFillShareFill } from 'react-icons/bs';
import { FaTelegram, FaWhatsappSquare } from 'react-icons/fa';
import Slider from "./slider";
import styles from "./detail.module.css";
import Mac from '../../public/images/shopservice/mac.png'
import Button from "../ui/button";

const Detail = ({ Pid }) => {

    const Products = AllShopData();
    const [data, setData] = useState(
        {
            id: 0,
            title: "",
            slider: [
                {
                    img: Mac,
                },
            ],
            detail: [
                {
                    title: "",
                    value: "",
                    unit: "",
                    description: ""
                },
            ]
        }
    );
    const NewPid = () => {
        Products.map((item) => {
            if (item.id == Pid) {
                setData(item)
            }
        })
    }
    useEffect(() => {
        NewPid()
    }, [])

    console.log(data)
    
    return (
        <Fragment>
            <section id={styles.detail}>
                <div className={styles.right}>
                    <div className={styles.slider}>
                        <Slider Imgs={data.slider} />
                    </div>
                    <div className={styles.description}>
                        <h5>توضیحات</h5>
                        <p>{data.description}</p>
                    </div>
                </div>
                <div className={styles.left}>
                    <div className={styles.boxleft}>
                        <div className={styles.top}>
                            <h2>
                                {data.title}
                            </h2>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است</p>
                        </div>
                        <div className={styles.profile}>
                            {data.detail.map((item, i) => (
                                    <div className={styles.item} key={i}>
                                        <h3>{item.name}</h3>
                                        <h3>{item.value} {item.unit}</h3>
                                    </div>
                                ))
                            }
                        </div>
                        <div className={styles.down}>
                            <Button><IoCallSharp /> تماس با فروشنده</Button>
                            <div className={styles.share}>
                                <div>
                                    <BsFillShareFill />
                                    <span>اشتراک گذاری با دوستان</span>
                                </div>
                                <div>
                                    <AiFillTwitterSquare />
                                    <FaWhatsappSquare />
                                    <FaTelegram />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Detail;