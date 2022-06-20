import styles from './pagination.module.css';
import { FiChevronLeft } from 'react-icons/fi';
import { FiChevronRight } from 'react-icons/fi';

const Pagination = ({postsPerPage, totalPosts, paginate, nextPage, prevPage, currentPage}) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className={`${styles.paginate} ${styles.pagination}`}>
            <ul>
                <span onClick={prevPage}>
                    <FiChevronLeft />
                </span>
                {pageNumbers.map((number) => (
                    <li key={number}>
                        <a className={currentPage === number ? `${styles.active}` : null} onClick={() => {paginate(number)}}>
                            {number}
                        </a>
                    </li>
                ))}
                <span onClick={nextPage}>
                    <FiChevronRight />
                </span>
            </ul>
        </nav>
    );
};

export default Pagination;