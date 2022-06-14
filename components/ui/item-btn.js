import style from './item-btn.module.css';
import Link from "next/link";
import ArrowBtn from "../icons/arrow-btn";

const ItemBtn = (props) => {

   if (props.link){
      return  (
          <Link href={props.link}>
             <a className={`${style.btn} ${props.className}`}>
                {props.children}
                <ArrowBtn />
             </a>
          </Link>
      )
   }

   return (
      <button onClick={props.onClick} className={`${style.btn} ${props.className}`}>
          {props.children}
          <ArrowBtn />
      </button>
   ) ;
};

export default ItemBtn;