
import Faq from '../../components/faq/faq';

import { wrapper } from '../../redux/store';
import { fetchFaqs } from '../../redux/slice/faqs';



const FaqPage = () => {
    
    return (
        <Faq />
    );
};

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ query }) => {
    console.log('store state on the server before dispatch', store.getState());
    const productData = query.data || 'page data';
    
    await store.dispatch(fetchFaqs());
    console.log('store state on the server after dispatch', store.getState());
  
    return {
      props: {
        productData
      }
    };
  });
  
export default FaqPage;