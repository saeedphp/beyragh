import { useRouter } from "next/router";
import {Fragment} from "react";
import Detail from "../../components/shopservice/detail";
import { adsActions } from "../../redux/actions";
import { wrapper } from "../../redux/store";
const ProductsDetail = () => {
    const router = useRouter();
    const { pId } = router.query;

    return (
        <Fragment>
            <Detail Pid={pId} />
        </Fragment>
    )
}
export const getServerSideProps = wrapper.getServerSideProps(store => async ({ query }) => {
    console.log('store state on the server before dispatch', store.getState());

      if(store.getState().adsReducer?.categories?.length == 0){
        await store.dispatch(adsActions.getCategories());
      }
      await store.dispatch(adsActions.getInfo({id: query.pId}))
    //   if(store.getState().adsReducer?.list?.length == 0){
    //     await store.dispatch(adsActions.getList());
    //   }
      console.log('store state on the server after dispatch', store.getState());
  
    
    return {
      props: {
   
      }
    };
  });

export default ProductsDetail;