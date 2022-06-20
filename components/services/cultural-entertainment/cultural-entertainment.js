import {Fragment, useState} from "react";
import styles from './cultural-entertainment.module.css';
import PageHeader from "../../ui/page-header";
import Button from "../../ui/button";
import Search from "../../icons/search";
import List from "./list";
import Category from "./category";
import CitiesFilter from "./cities-filter";

const CulturalEntertainment = () => {

    const [inputText, setInputText] = useState("");

    const onChange = (event) => {
        setInputText(event.target.value);
    };

    return (
        <Fragment>
            <PageHeader title=" امکانات فرهنگی تفریحی" pageTitle="خدمات" pageLink="/" image="sport.webp" />
            <section className={styles.entertainment}>
               <div className={styles.search}>
                   <input type="text" placeholder="جستجو مکان مورد نطر ..." value={inputText} onChange={onChange} />
                   <Button className={styles.btn}>
                       <Search />
                       جستجو
                   </Button>
               </div>
                <List inputText={inputText} />
            </section>
        </Fragment>
    )
};

export default CulturalEntertainment;