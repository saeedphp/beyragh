import {Fragment} from "react";
import styles from './pagination.module.css';
import PrevArrow from "../icons/prev-arrow";
import NextArrow from "../icons/next-arrow";

const Pagination = ({postsPerPage, totalPosts,paginate, prevPage, nextPage, currentPage}) => {

    const pageNum = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNum.push(i);
    }

    return (
        <Fragment>
            <nav className={`pagination ${styles.list}`}>
                <ul>
                    <span className={styles.prev} onClick={prevPage}>
                        <PrevArrow />
                    </span>
                    {pageNum.map((number) => (
                        <li className={currentPage === number ? 'active' : null} key={number}>
                            <a onClick={() => {paginate(number)}}>
                                {number}
                            </a>
                        </li>
                    ))}
                    <span className={styles.next} onClick={nextPage}>
                        <NextArrow />
                    </span>
                </ul>
            </nav>
        </Fragment>
    )
};

export default Pagination;