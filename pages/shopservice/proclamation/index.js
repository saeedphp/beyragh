import axios from "axios";
import {Fragment, useEffect} from "react";
import Proclamation from "../../../components/products/Proclamation";
import adsActions from "../../../redux/actions/ads";


import { wrapper } from "../../../redux/store";

const ProductProclamationPage = () => {
  useEffect(() => {
    
  })
    return (
      <Fragment>
         <Proclamation />
        
      </Fragment>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ query }) => {
  console.log('store state on the server before dispatch', store.getState());
    if(store.getState().adsReducer?.categories?.length == 0){
      await store.dispatch(adsActions.getCategories());
    }
    console.log('store state on the server after dispatch', store.getState());

  
  return {
    props: {
 
    }
  };
});

export default ProductProclamationPage;