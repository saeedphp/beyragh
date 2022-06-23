import {Fragment} from "react";
import {useRouter} from "next/router";
import {allBlogs} from "../../data/blog";
import {allEntertainments} from "../../data/service/entertainment";
import Detail from "../../components/blog/detail";
import { blogActions } from "../../redux/actions";
import { wrapper } from "../../redux/store";
import { connect } from "react-redux";


const BlogDetailPage = ({currBlog}) => {

    const blogs = allBlogs();
    const router = useRouter();
    const {blogId} = router.query;

    if (currBlog.id) {
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
export const getServerSideProps = wrapper.getServerSideProps(store => async ({ query }) => {
    console.log('store state on the server before dispatch', store.getState());
      await store.dispatch(blogActions.getInfo({id: query.blogId}));
      if(store.getState().blogReducer?.categories?.length == 0){
          await store.dispatch(blogActions.getCategories());
      }
      console.log('store state on the server after dispatch', store.getState());
  
    
    return {
      props: {
        
      }
    };
  });
const mapStateToProps = state => ({
    currBlog: state.blogReducer.info
})

BlogDetailPage.layout = "L1"
export default connect(mapStateToProps)(BlogDetailPage);