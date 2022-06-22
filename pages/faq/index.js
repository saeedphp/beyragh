
import Faq from '../../components/faq/faq';

import { wrapper } from '../../redux/store';




const FaqPage = () => {
    
    return (
        <Faq />
    );
};

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ query }) => {
    console.log('store state on the server before dispatch', store.getState());
    const productData = query.data || 'page data';
    
    // await store.dispatch(fetchFaqs());
    console.log('store state on the server after dispatch', store.getState());
  
    return {
      props: {
        productData
      }
    };
  });
  
export default FaqPage;