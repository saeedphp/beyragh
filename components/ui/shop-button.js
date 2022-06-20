import styles from './shop-button.module.css';
import Link from "next/link";
import GreenBtnArrow from "../icons/green-btn-arrow";

const ShopButton = (props) => {

    if (props.link) {
        return (
            <Link href={props.link}>
                <a className={`${styles.btn} ${props.className}`}>
                    {props.children}
                </a>
            </Link>
        )
    }

    return (
        <button onClick={props.onClick} className={`${styles.btn} ${props.className}`}>
            {props.children}
        </button>
    ) ;

};

export default ShopButton;