import styles from './footer-top.module.css';
import Image from "next/image";
import logoImg from '../../../public/images/footer-logo.webp';

const FooterTop = () => {
    return (
        <div className={styles['footer-top']}>
            <Image src={logoImg} alt="logo" layout={"fill"} />
        </div>
    )
};

export default FooterTop;