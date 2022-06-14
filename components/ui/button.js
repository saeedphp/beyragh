import style from './button.module.css';
import Link from "next/link";
import GreenBtnArrow from "../icons/green-btn-arrow";

const Button = (props) => {

    if (props.link){
        return  (
            <Link href={props.link}>
                <a>
                    {props.children}
                    <GreenBtnArrow />
                </a>
            </Link>
        )
    }

    return (
        <button onClick={props.onClick} className={`${style.btn} ${props.className}`}>
            {props.children}
        </button>
    ) ;
};

export default Button;