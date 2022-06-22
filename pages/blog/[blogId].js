import {Fragment} from "react";
import {useRouter} from "next/router";
import {allBlogs} from "../../data/blog";
import {allEntertainments} from "../../data/service/entertainment";
import Detail from "../../components/blog/detail";

const BlogDetailPage = () => {

    const blogs = allBlogs();
    const router = useRouter();
    const {blogId} = router.query;
    let currBlog;
    for (let blog of blogs) {
        if (blog.id === blogId) currBlog = blog;
    }
    if (currBlog != undefined) {
        return (
            <Detail currBlog={currBlog} />
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
};

export default BlogDetailPage;