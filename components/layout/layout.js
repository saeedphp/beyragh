import {Fragment, useEffect} from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
import { publicActions, userActions } from "../../redux/actions";
import { connect } from "react-redux";

const Layout = (props) => {
    useEffect(() => {
        props.checkLayoutVersion();
        props.checkUserStatus();
    })
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

const mapStateToProps = state => ({
})
const mapDispatchToProps = {
    checkUserStatus: userActions.checkUserStatus,
    checkLayoutVersion: publicActions.checkLayoutVersion,
}
export default connect(mapStateToProps, mapDispatchToProps)(Layout);