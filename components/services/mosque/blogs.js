import {Fragment, useState} from "react";
import {getNews} from "../../../data/blog";
import NewsBlogItem from "../../ui/news-blogitem";
import Pagination from "../../ui/pagination";

const Blogs = () => {

    const news = getNews();

    const [currentPage, setCurrentPage] = useState(1);
    const [itemPerPage, setItemPerPage] = useState(3);

    const indexOfLastPost = currentPage * itemPerPage;
    const indexOfFirstPost = indexOfLastPost - itemPerPage;
    const currentPosts = news.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const prevPage = () => {
        if (currentPage === 1) {
            return null;
        }
        setCurrentPage(currentPage - 1)
    };

    const nextPage = () => {
        if (currentPage <= indexOfFirstPost) {
            return null;
        }
        setCurrentPage(currentPage + 1)
    };

    return (
        <Fragment>
            {currentPosts.map((item, i) => {
                return (
                    <NewsBlogItem
                        key={i}
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        category={item.category}
                        date={item.date}
                    />
                )
            })}
            <Pagination
                postsPerPage={itemPerPage}
                totalPosts={news.length}
                paginate={paginate}
                prevPage={prevPage}
                nextPage={nextPage}
                currentPage={currentPage}
            />
        </Fragment>
    )
};

export default Blogs;