import {Fragment} from "react";
import styles from './header.module.css';
import Logo from "./logo";
import Menu from "./menu";
import Login from "./login";

const Header = () => {
    return (
        <Fragment>
            <div className={styles.header}>
                <Logo />
                <Menu />
                <Login />
            </div>
        </Fragment>
    );
};

export default Header;