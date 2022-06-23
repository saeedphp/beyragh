import { connect } from "react-redux";
import Blog from "../../components/blog/blog";
import { blogActions } from "../../redux/actions";
import { wrapper } from "../../redux/store";

const BlogPage = ({ getInfo }) => {
  return <Blog />;
};
export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ query }) => {
      console.log(
        "store state on the server before dispatch",
        store.getState()
      );
      if (store.getState().blogReducer?.list?.length == 0) {
        await store.dispatch(blogActions.getList());
      }
      if (store.getState().blogReducer?.categories?.length == 0) {
        await store.dispatch(blogActions.getCategories());
      }
      console.log("store state on the server after dispatch", store.getState());

      return {
        props: {},
      };
    }
);

BlogPage.layout = "L1";
export default BlogPage;
