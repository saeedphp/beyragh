import {Fragment, useContext} from "react";
import styles from './product-item.module.css';
import Image from "next/image";
import ShopButton from "../ui/shop-button";
import Card from "../ui/card";
import Link from "next/link";
import cartContext from "../../store/cart-context";
import MealItemForm from "./MealItemForm";

const ProductItem = (props) => {

    const {id, title, image, description, price} = props;
    const imgPath = `/${image}`;
    const excerpt = description.slice(0,90)+'...';
    const formattedNum = price.toLocaleString('fa-IR');

    const cartCtx = useContext(cartContext);

    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: id,
            title: title,
            amount: amount,
            price: price,
        });
    };

    return (
        <Fragment>
            <Card className={styles.item}>
                <Link href={`/product/${id}`}>
                    <a>
                        <Image src={`${imgPath}`} alt={title} layout={"fill"} />
                    </a>
                </Link>
                <div className={styles.info}>
                    <h2>
                        <Link href={`/products/${id}`}>
                            <a>
                                {title}
                            </a>
                        </Link>
                    </h2>
                    <p className={styles.excerpt}>
                        {excerpt}
                    </p>
                </div>
                <div className={styles.bottom}>
                        <span className={styles.price}>
                            {formattedNum}
                            <span className={styles.currency}>
                                تومان
                            </span>
                        </span>
                    <ShopButton className={styles.views} link={`/products/${id}`}>
                        <a>
                            مشاهده جزئیات
                        </a>
                    </ShopButton>
                    <MealItemForm onAddToCart={addToCartHandler} />
                </div>
            </Card>
        </Fragment>
    )
};

export default ProductItem;