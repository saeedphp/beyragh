import '../styles/globals.css'
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import Layout from "../components/layout/layout";
import { Provider } from 'react-redux';
import { store } from '../redux';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </Provider>
  );
}

export default MyApp
