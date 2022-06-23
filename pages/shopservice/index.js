import {Fragment} from "react";
import ShopService from "../../components/shopservice/shopservice";
import { adsActions } from "../../redux/actions";
import { wrapper } from "../../redux/store";
const ShopServicePage = () => {
    return (
      <Fragment>
          <ShopService />
      </Fragment>
    );
};
export const getServerSideProps = wrapper.getServerSideProps(store => async ({ query }) => {
  console.log('store state on the server before dispatch', store.getState());
    if(store.getState().adsReducer?.categories?.length == 0){
      await store.dispatch(adsActions.getCategories());
    }
    if(store.getState().adsReducer?.list?.length == 0){
      await store.dispatch(adsActions.getList());
    }
    console.log('store state on the server after dispatch', store.getState());

  
  return {
    props: {
 
    }
  };
});
export default ShopServicePage;