import '../styles/globals.css'
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import Layout from "../components/layout/layout";
import { wrapper } from '../redux/store';

function MyApp({ Component, pageProps }) {
  return (
      <Layout>
       
        <Component {...pageProps} />
        
      </Layout>
     

  );
}

export default wrapper.withRedux(MyApp)
