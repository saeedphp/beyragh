import styles from './login.module.css';
import UserLight from "../../icons/user-light";
import SearchLight from "../../icons/search-light";

const Login = () => {
    return (
        <div className={styles.login}>
            <div className={styles.search}>
                <SearchLight />
            </div>
            <div className={styles.btn}>
                <span>
                    ورود و ثبت نام
                </span>
                <UserLight />
            </div>
        </div>
    );
};

export default Login;