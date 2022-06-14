import styles from './login.module.css';
import Search from "../../icons/search";
import User from "../../icons/user";

const Login = () => {
    return (
        <div className={styles.login}>
            <div className={styles.search}>
                <Search />
            </div>
            <div className={styles.btn}>
                <span>
                    ورود و ثبت نام
                </span>
                <User />
            </div>
        </div>
    );
};

export default Login;