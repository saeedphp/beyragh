import { Fragment } from "react";
import styles from './sidebar.module.css';
import { RiFilter2Fill } from 'react-icons/ri';
import { MdLocationPin } from 'react-icons/md';
import { FiSearch } from 'react-icons/fi';
import { allCity } from "../../../data/data";
import { AllShopData } from "../../../data/shopdata";
import { useState, useEffect } from "react";
import Button from "../../ui/button";
import { connect } from "react-redux";
import {IoIosArrowDown} from 'react-icons/io'

const Sidebar = (props) => {
    const Data = props.data();
    const Citese = allCity();
    const Products = AllShopData();
    const Classes = ' ' + props.className;
    // const { checked, label, id } = props.cuisine;

    const [showData, setShowData] = useState(null);
    const [showSubCats, setShowSubCats] = useState(null);
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
                            {props.adCategories?.map((item) => (
                                <div className="w-full  flex items-center flex-col  py-2 px-3" key={`ADS_MAIN_CAT__${item.id}`}>
                                <div className="w-full flex items-center justify-between">
                                  <div className="flex items-center text-primaryBlack text-md">
                                    {/* <span className={`text-3xl text-red49 ml-2 `}>{item.icon}</span> */}
                                    <p
                                    className="cursor-pointer"
                                      onClick={() => {
                                        // nextStep();
                                        // chooseCategory(item.id, null);
                                      }}
                                    >
                                      {item.title}
                                    </p>
                                  </div>
                                  {item.subCategories?.length > 0 && (
                                    <p
                                      className={`${
                                        item.id == showSubCats && "rotate-180"
                                      } text-xl text-primaryBlack cursor-pointer`}
                                      onClick={() =>
                                        showSubCats == item.id
                                          ? setShowSubCats(null)
                                          : setShowSubCats(item.id)
                                      }
                                    >
                                      <IoIosArrowDown />
                                    </p>
                                  )}
                                </div>
                      
                                {showSubCats == item.id && (
                                  <div className="flex w-full flex-col py-3 px-10">
                                    {item.subCategories.map((relatedCat, idx) => (
                                      <p className="text-sm my-2 cursor-pointer text-secondaryBlack" key={`ADS_CAT__${relatedCat.id}__${item.id}`} onClick={() => {
                                        //   nextStep();
                                        //   chooseCategory(relatedCat.id, item.id);
                                        }}>
                                        {relatedCat.title}
                                      </p>
                                    ))}
                                  </div>
                                )}
                              </div>
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
const mapStateToProps = state => ({
    adCategories: state.adsReducer.categories,
})
export default connect(mapStateToProps)(Sidebar);