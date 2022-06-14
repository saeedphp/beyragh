import style from './green-btn.module.css';
import Link from "next/link";
import ArrowBtn from "../icons/arrow-btn";
import GreenBtnArrow from "../icons/green-btn-arrow";

const ItemBtn = (props) => {

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
            <GreenBtnArrow />
        </button>
    ) ;
};

export default ItemBtn;