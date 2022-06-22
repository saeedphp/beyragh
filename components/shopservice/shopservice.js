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

const ShopService = () => {

    const Products = AllShopData();
    const Cities = allCity();

    const [items, setItems] = useState(Products);
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
        let updatedList = Products;
        if (0 <= gheimat || range !== '') {
            updatedList = updatedList.filter( (item) => item.price >= gheimat && item.price <= range);
        } else {
            updatedList = Products;
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
                  <Sidebar className={styles.sidebar} data={ShopData} title={"دسته بندی"} setItems={setItems}
                  input={false} checkBox={false} handleInput={handleInput} resetPrice={resetPrice} handleInputs={handleInputs} 
                  />
              </div>
              <div className={styles.main}>
                  <div className={styles.top}>
                      <div className={styles.search}>
                          <input type="text" placeholder="جستجو در آگهی ها" />
                          <span>
                              <SearchFilter />
                          </span>
                      </div>
                      <div className={styles.btn}>
                          <Link href="/cart">
                            <Button className={styles.button} >
                                <Add />
                                ثبت آگهی
                            </Button>
                          </Link>
                      </div>
                  </div>

                  <div className={styles.filters}>
                      <div className={styles.itemfilter}>
                          <span><MdLocationOn /></span>
                          <select>
                              <option>تهران</option>
                              {Cities.map((item) => (
                                  <option key={item.id} >{item.name}</option>
                              ))}
                          </select>
                      </div>
                      <div className={styles.itemfilter}>
                          <span><BsListTask /></span>
                          <select>
                              <option>دسته بندی ها</option>
                              {Products.map((item) => (
                                  <option key={item.id}>{item.group}</option>
                              ))}
                          </select>
                      </div>
                      <div className={styles.itemfilter}>
                          <span><IoWalletOutline /></span>
                          <input type="number" placeholder="محدوده قیمت" />
                      </div>
                  </div>

                  <div className={styles.body}>
                    {currentPosts.map((item, index) => (
                        <div className={styles.item} key={index} >
                          <div className={styles.boximg}>
                              <Image src={item.image} alt={item.title} />
                          </div>
                          <div className={styles.boxdata}>
                            <Link href={`/shopservice/${item.id}`} passHref>
                                <h2 className={styles.title}>{item.title}</h2>
                            </Link>
                            <span className={styles.price}>{item.price} تومان</span>
                            <span className={styles.group}>{item.group}</span>
                            <h5><MdLocationOn /> {item.city}</h5>
                          </div>
                        </div>
                    ))}

                    </div>
                    <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={Products.length}
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

export default ShopService;