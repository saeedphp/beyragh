import {Fragment, useState} from "react";
import Image from "next/image";
import logo from '../../public/images/footer-logo.jpg';
import Eye from "../icons/eye";
import styles from './reset-password.module.css';
import Reset from "../icons/reset";
import topBg from '../../public/images/top-auth.jpg';
import bottomBg from '../../public/images/bottom-auth.jpg';
import Button from "../ui/button";
import Link from "next/link";
import PasswordChecker from "../ui/password-checker";

const ResetPassword = () => {

    const [shown, setShown] = useState(false);
    const [reset, setReset] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordValidity, setPasswordValidity] = useState({
        minChar: null,
    });

    const togglePassVisibility = () => {
        setShown(shown ? false : true);
    };

    const showReset = () => {
        setReset(true);
    }

    const onChangePassword = (password) => {
        setPassword(password);
        setPasswordValidity({
            minChar: password.length >= 8 ? true : false,
        })
    };


    return (
        <Fragment>
            <section className={styles.reset}>
                <Image src={topBg} alt="image" layout={"fill"}/>
                <Image src={logo} alt="logo" layout={"fill"}/>
                <h1>
                    بازیابی رمز عبور
                </h1>

                <form action="">

                    <div className={styles.input}>
                        <label htmlFor="new-password">
                            رمز عبور جدید
                        </label>
                        <div className={styles.control}>
                            <input
                                name="new-password"
                                id="new-password"
                                type={shown ? 'text' : 'password'}
                                value={password}
                                onFocus={() => setPasswordFocused(true)}
                                onChange={e => {
                                    onChangePassword(e.target.value),
                                        showReset();
                                }}
                            />
                            <span>
                                {reset ?
                                    <Reset/> : ''}
                                <Eye onClick={togglePassVisibility}/>
                            </span>
                        </div>
                    </div>

                    {passwordFocused && <PasswordChecker validity={passwordValidity} />}

                    <div className={styles.input}>
                        <label htmlFor="confirm-password">
                            تکرار رمز عبور
                        </label>
                        <div className={styles.control}>
                            <input
                                name="confirm-password"
                                id="confirm-password"
                                type={shown ? 'text' : 'password'}
                                onChange={showReset}
                            />
                            <span>
                                {reset ?
                                    <Reset/> : ''}
                                <Eye onClick={togglePassVisibility}/>
                            </span>
                        </div>

                    </div>

                    <div className={styles.remember}>
                        <label htmlFor="remember">
                            رمز عبور را بخاطر بسپار
                        </label>
                        <input checked name="remember" id="remember" type="checkbox"/>
                    </div>

                    <Button>
                        ثبت اطلاعات
                    </Button>

                    <Link href="/">
                        <a className={styles.return}>
                            بازگشت
                        </a>
                    </Link>

                </form>
                <Image src={bottomBg} alt="image" layout={"fill"}/>
            </section>
        </Fragment>
    )
};

export default ResetPassword;