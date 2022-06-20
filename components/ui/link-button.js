import style from './link-button.module.css';
import Link from "next/link";
import GreenBtnArrow from "../icons/green-btn-arrow";

const LinkButton = (props) => {

    const classes = ' ' + props.className;

    if (props.link){
        return  (
            <Link href={props.link}>
                <a className={`${style.btn} ${classes}`}>
                    {props.children}
                </a>
            </Link>
        )
    }

};

export default LinkButton;