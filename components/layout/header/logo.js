import styles from './logo.module.css';
import Link from "next/link";
import Image from "next/image";
import logoImg from '../../../public/images/logo.jpg';

const Logo = () => {
    return (
        <div className={styles.logo}>
            <Link href="/">
                <a>
                    <Image src={logoImg} alt="logo" layout={"fill"}/>
                </a>
            </Link>
            {/*<div className={styles.box}>
                <b className={styles['right-bg']}></b>
            </div>*/}
        </div>
    );
};

export default Logo;