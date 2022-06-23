import Image from "next/image";
import {Fragment} from "react";
import { FiCalendar } from 'react-icons/fi';
import { BsCardList } from 'react-icons/bs';
import { FaRegCommentDots } from 'react-icons/fa';
import styles from "./detail.module.css";
import Input from "../form/input";
import Button from "../ui/button";
import Faramouj from "../../public/images/faramouj.jpg";
import { connect } from "react-redux";

const Detail = ({ currBlog, blogCategories }) => {
    console.log(currBlog)
    const categoryTitle = blogCategories?.find(itm => itm.id == currBlog.related_post_category)?.title;
    return (
        <Fragment>
            <section id={styles.boxdetail}>
                <div className={styles.detail}>
                    <div className={styles.cover}>
                        <Image src={`/${currBlog.image}`} alt={currBlog.title} layout="fill" />
                    </div>
                    <div className={styles.date}>
                        <div>
                            <FiCalendar />
                            <h6>تاریخ انتشار {currBlog.created_date.slice(0,10).replace(/-/g,"/")}</h6>
                        </div>
                        <div>
                            <BsCardList />
                            <h6>دسته بندی: {categoryTitle}</h6>
                        </div>
                    </div>
                    <div className={styles.content}>
                        <h2>{currBlog.title}</h2>
                        <p>{currBlog.description}</p>
                    </div>

                    <div className={styles.comments}>
                        <div className={styles.title}>
                            <h5><FaRegCommentDots /> نظرات</h5>
                            <hr />
                        </div>
                        <ul className={styles.list}>
                            <li className={styles.boxquestion}>
                                <div className={styles.question}>
                                    <div className={styles.header}>
                                        <div className={styles.user}>
                                            <div className={styles.profile}>
                                                <Image src={Faramouj} alt="faramouj" />
                                            </div>
                                            <h4>فراموج</h4>
                                        </div>
                                        <button>پاسخ</button>
                                    </div>
                                    <span>12 آذر 1401</span>
                                    <p>بسیار عالی بود</p>
                                </div>
                            </li>
                            <li className={styles.boxquestion}>
                                <div className={styles.reply}>
                                    <div className={styles.header}>
                                        <div className={styles.user}>
                                            <div className={styles.profile}>
                                                <Image src={Faramouj} alt="faramouj" />
                                            </div>
                                            <h4>بیرق</h4>
                                        </div>
                                        <button>پاسخ</button>
                                    </div>
                                    <span>12 آذر 1401</span>
                                    <p>لطف دارید</p>
                                </div>
                            </li>
                            <li className={styles.boxquestion}>
                                <div className={styles.question}>
                                    <div className={styles.header}>
                                        <div className={styles.user}>
                                            <div className={styles.profile}>
                                                <Image src={Faramouj} alt="faramouj" />
                                            </div>
                                            <h4>فراموج</h4>
                                        </div>
                                        <button>پاسخ</button>
                                    </div>
                                    <span>12 آذر 1401</span>
                                    <p>بسار مفید بود</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.sendcomment}>
                        <div className={styles.title}>
                            <h6><FaRegCommentDots /> ارسال دیدگاه</h6>
                            <hr />
                        </div>
                        <form className={styles.form}>
                            <Input themeColor="bg-green4A" title={"نام"} customWidth={styles.boxinput} />
                            <Input themeColor="bg-green4A" title={"نام خانوادگی"} customWidth={styles.boxinput} />
                            <div className={styles.description}>
                                <h5>نظر خود را بنویسید...</h5>
                                <textarea rows={13}></textarea>
                            </div>
                            <Button>ارسال پیام</Button>
                        </form>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};
const mapStateToProps = state => ({
    blogCategories: state.blogReducer.categories,
})
export default connect(mapStateToProps)(Detail);