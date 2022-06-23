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
    await store.dispatch(adsActions.list());
    console.log('store state on the server after dispatch', store.getState());

  
  return {
    props: {
 
    }
  };
});

export default ProductProclamationPage;