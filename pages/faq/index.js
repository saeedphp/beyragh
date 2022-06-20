
import Faq from '../../components/faq/faq';

import { wrapper } from '../../redux/store';
import { publicApi  } from '../../redux/actions';
import { fetchProduct } from '../../redux/slice/public';

const FaqPage = () => {
    
    return (
        <Faq />
    );
};

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ query }) => {
    console.log('store state on the server before dispatch', store.getState());
    const productData = query.data || 'page data';
    //  http://localhost:3000/product?data='some-data'
    await store.dispatch(fetchProduct('!@##$#$@$'));
    console.log('store state on the server after dispatch', store.getState());
  
    return {
      props: {
        productData
      }
    };
  });
  
export default FaqPage;