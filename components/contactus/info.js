import styles from "./info.module.css";
import PinAddress from "../icons/pin-address";
import TelAddress from "../icons/tel-address";
import FaxAddress from "../icons/fax-address";
import MailAddress from "../icons/mail-address";
import {getAllSocial} from "../../data/social";

const Info = () => {

    const socials = getAllSocial();

    return (
        <div className={styles.wrapper}>
            <h3 className={styles.title}>
                راه های ارتباطی با ما
            </h3>
            <div className={styles.address}>
                <PinAddress />
                <p>
                    تهران، خیابان سمیه، تقاطع نجات اللهی، روبروی اداره گزینش نیروی انتظامی، ساختمان مجامع، واحد 6 بنیاد دعبل خزاعی
                </p>
            </div>
            <div className={styles.address}>
                <TelAddress />
                <p>
                    02188892507  داخلی  115 – 091            ساعات تماس : 9الی16
                </p>
            </div>
            <div className={styles.address}>
                <FaxAddress />
                <p>
                    شماره فکس :120-77639256
                </p>
            </div>
            <div className={styles.address}>
                <MailAddress />
                <p>
                    02188892507  داخلی  115 – 091            ساعات تماس : 9الی16
                </p>
            </div>
            <ul className={styles.socials}>
                {socials.map((social) => (
                    <li key={social.id}>
                        <a href={social.link}>
                            {social.icon}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Info;