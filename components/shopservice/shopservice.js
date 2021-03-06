import Image from "next/image";
import Link from "next/link";
import {Fragment} from "react";
import { ShopData, AllShopData } from "../../data/shopdata";
import { allCity } from "../../data/data";
import Add from "../icons/add";
import SearchFilter from "../icons/search-filter";
import Sidebar from "../layout/sidebar/sidebar";
import Button from "../ui/button";
import { MdLocationOn } from 'react-icons/md';
import { BsListTask } from 'react-icons/bs';
import { IoWalletOutline } from 'react-icons/io5';
import styles from './shopservice.module.css';
import Pagination from '../layout/Pagination';
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import separate from "../../utils/separate";

const ShopService = ({products}) => {

    // const Products = AllShopData();
    const Cities = allCity();

    const [items, setItems] = useState(products);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(6);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost);

    const [range, setRange] = useState(1000000000)
    const [gheimat, setGheimat] = useState(0)
    const handleInput = (e) => {
      setRange( e.target.value );
    }
    const handleInputs = (e) => {
        setGheimat( e.target.value );
    }
    const resetPrice = () => {
        setRange(10000000)
        setGheimat(0)
    }
  
    const paginate = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
    const nextPage = () => {
      if (currentPage === 3) {
        return null;
      }
      setCurrentPage(currentPage + 1);
    };
    const prevPage = () => {
      if (currentPage === 1) {
        return null;
      }
      setCurrentPage(currentPage - 1);
    };
      
    const applyFilters = () => {
        let updatedList = products;
        if (0 <= gheimat || range !== '') {
            updatedList = updatedList.filter( (item) => item.price >= gheimat && item.price <= range);
        } else {
            updatedList = products;
        }
    
        setItems(updatedList);
    };

    useEffect(() => {
        applyFilters();
    }, [range, gheimat]);


    return (
        <Fragment>
            <section id={styles.shopservice}>
              <div className={styles.sidebarbox}>
                  <Sidebar className={styles.sidebar} data={ShopData} title={"???????? ????????"} setItems={setItems}
                  input={false} checkBox={false} handleInput={handleInput} resetPrice={resetPrice} handleInputs={handleInputs} 
                  />
              </div>
              <div className={styles.main}>
                  <div className={styles.top}>
                      <div className={styles.search}>
                          <input type="text" placeholder="?????????? ???? ???????? ????" />
                          <span>
                              <SearchFilter />
                          </span>
                      </div>
                      <div className={styles.btn}>
                          <Link href="/shopservice/proclamation">
                            <Button className={styles.button} >
                                <Add />
                                ?????? ????????
                            </Button>
                          </Link>
                      </div>
                  </div>

                  <div className={styles.filters}>
                      <div className={styles.itemfilter}>
                          <span><MdLocationOn /></span>
                          <select>
                              <option>??????????</option>
                              {Cities.map((item) => (
                                  <option key={item.id} >{item.name}</option>
                              ))}
                          </select>
                      </div>
                      <div className={styles.itemfilter}>
                          <span><BsListTask /></span>
                          <select>
                              <option>???????? ???????? ????</option>
                              {items.map((item) => (
                                  <option key={item.id}>{item.group}</option>
                              ))}
                          </select>
                      </div>
                      <div className={styles.itemfilter}>
                          <span><IoWalletOutline /></span>
                          <input type="number" placeholder="???????????? ????????" />
                      </div>
                  </div>

                  <div className={styles.body}>
                    {currentPosts.map((item, index) => (
                        <div className={styles.item} key={index} >
                          <div className={styles.boximg}>
                              {
                                  item.image && <Image src={item.image} alt={item.title} />
                              }
                          </div>
                          <div className={styles.boxdata}>
                            <Link href={`/shopservice/${item.id}`} passHref>
                                <h2 className={styles.title}>{item.title}</h2>
                            </Link>
                            <span className={styles.price}>{separate(item.price)} ??????????</span>
                            <span className={styles.group}>{item.group}</span>
                            <h5><MdLocationOn /> {item.city}</h5>
                          </div>
                        </div>
                    ))}

                    </div>
                    <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={products.length}
                        paginate={paginate}
                        nextPage={nextPage}
                        prevPage={prevPage}
                        currentPage={currentPage}
                    />

                </div>
            </section>
        </Fragment>
    )
}
const mapStateToProps = state => ({
    products: state.adsReducer.list
})

export default connect(mapStateToProps)(ShopService);