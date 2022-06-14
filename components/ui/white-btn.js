import style from './white-btn.module.css';
import Link from "next/link";
import GreenBtnArrow from "../icons/green-btn-arrow";
import WhiteBtnArrow from "../icons/white-btn-arrow";

const ItemBtn = (props) => {

    if (props.link){
        return  (
            <Link href={props.link}>
                <a>
                    {props.children}
                    <WhiteBtnArrow />
                </a>
            </Link>
        )
    }

    return (
        <button onClick={props.onClick} className={`${style.btn} ${props.className}`}>
            {props.children}
            <WhiteBtnArrow />
        </button>
    ) ;
};

export default ItemBtn;