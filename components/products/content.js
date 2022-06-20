import {Fragment, useContext, useState} from "react";
import styles from './content.module.css';
import ProductSearch from "../icons/product-search";
import ShopButton from "../ui/shop-button";
import ProductCart from "../icons/product-cart";
import {allProducts} from "../../data/products";
import ProductItem from "./product-item";
import cartContext from "../../store/cart-context";

const Content = () => {

    const [inputText, setInputText] = useState("");

    const onChange = (event) => {
        setInputText(event.target.value);
    };

    const products = allProducts();

    const cartCtx = useContext(cartContext);
    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
            return curNumber + item.amount;
        },
        0);

    return (
        <Fragment>

            <div className={styles.top_row}>
                <div className={styles.search}>
                    <ProductSearch />
                    <input type="text" placeholder="جستجو در محصولات" value={inputText} onChange={onChange} />
                </div>
                <ShopButton className={styles.btn}>
                    <ProductCart />
                    سبد خرید
                    <span>
                {numberOfCartItems}
            </span>
                </ShopButton>
            </div>

            <div className={styles.products}>
                {products.filter((item) => {
                    return (
                        item.title.includes(inputText)
                    )
                })
                    .map((item, i) => {
                    return (
                        <ProductItem
                            key={i}
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            description={item.description}
                            price={item.price}
                        />
                    )
                })}
            </div>

        </Fragment>
    )
};

export default Content;