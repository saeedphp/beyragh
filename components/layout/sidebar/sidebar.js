import { Fragment } from "react";
import styles from './sidebar.module.css';
import { RiFilter2Fill } from 'react-icons/ri';
import { MdLocationPin } from 'react-icons/md';
import { FiSearch } from 'react-icons/fi';
import { allCity } from "../../../data/data";
import { AllShopData } from "../../../data/shopdata";
import { useState, useEffect } from "react";
import Button from "../../ui/button";

const Sidebar = (props) => {
    const Data = props.data();
    const Citese = allCity();
    const Products = AllShopData();
    const Classes = ' ' + props.className;
    // const { checked, label, id } = props.cuisine;

    const [showData, setShowData] = useState(null);
    const ToggleShowData = (id) => {
        if (showData === id) {
            return setShowData(null);
        }
        setShowData(id);
    };

    return (
        <Fragment>
            <div className={`${Classes}`} id={styles.sidebar}>
                <h5 className="title">
                    <RiFilter2Fill /> فیلتر
                </h5>
                <div className={styles.boxitem}>
                    <div className={styles.city}>
                        <h4>
                            <MdLocationPin />انتخاب شهر
                        </h4>
                        <div className={styles.boxsearch}>
                            <input type="search" placeholder="شهر موردنطر خود را جستجو کنید" />
                            <FiSearch />
                        </div>
                        <ul className={styles.listcity}>
                            {Citese.map((item) => (
                                <li key={item.id}>
                                    <div className={styles.firstItem}>
                                        <input type="checkbox" value={item.value} onChange={(e) => props.changeChecked(e.target.value)} /> <span>{item.value}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.city}>
                        <h4>{props.icon} {props.title}</h4>
                        {props.input ?
                            <div className={styles.boxsearch}>
                                <input type="search" placeholder={`${props.title} موردنطر خود را جستجو کنید`} />
                                <FiSearch />
                            </div>
                        : null}
                        <ul className={styles.listcity} >
                            {Data.map((item) => (
                                <li key={item.id}>
                                    
                                    <div className={styles.firstItem}>
                                        {props.checkBox ? <input type="checkbox" /> : null}{item.icon} 
                                        <span onClick={() => ToggleShowData(item.id)}>{item.name}</span>
                                    </div>
                                    {showData == item.id ?
                                        <ul className={styles.subitems}>
                                            {item.products.map((subitem) => (
                                                <li key={subitem.id}>{subitem.name}</li>
                                            ))}
                                        </ul>
                                    : ""}   
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.filterprice}>
                        <div className={styles.header}>
                            <span>قیمت</span>
                            <Button onClick={props.resetPrice}>حذف</Button>
                        </div>
                        <div className={styles.inputs}>
                            <label>حداکثر</label>
                            <input type='number' name="price" onInput={ props.handleInput } placeholder="مثلا 25 هزار تومان" />
                        </div>
                        <div className={styles.inputs}>
                            <label>حداقل</label>
                            <input type='number' name="price" onInput={ props.handleInputs } placeholder="مثلا 25 هزار تومان" />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Sidebar;