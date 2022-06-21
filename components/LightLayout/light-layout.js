import {Fragment} from "react";
import Header from "./header/header";
import Footer from "./footer/footer";

const LightLayout = (props) => {
    return (
        <Fragment>
            <header>
                <Header />
            </header>
            <main>
                {props.children}
            </main>
            <footer>
                <Footer />
            </footer>
        </Fragment>
    );
};

export default LightLayout;