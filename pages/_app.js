import '../styles/globals.css'
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import Layout from "../components/layout/layout";
import LightLayout from "../components/LightLayout/light-layout";

const layouts = {
    L1: Layout,
    L2: LightLayout,
};

function MyApp({Component, pageProps}) {
    const Layout = layouts[Component.layout] || ((children) => <>{children}</>);
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
