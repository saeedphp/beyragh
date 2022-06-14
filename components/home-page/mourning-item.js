import styles from "./mourning-item.module.css";
import Card from "../ui/card";
import Image from "next/image";
import ItemBtn from "../ui/item-btn";

const MourningItem = (props) => {

    const {id, icon, title, description, link} = props;

    return (
        <li className={styles.items}>
            <Card className={styles.wrapper}>
                <div className={styles.imgWrapper}>
                    <Image src={`/${icon}`} alt={title} layout={"fill"} />
                </div>
                <h2 className={styles.title}>
                    {title}
                </h2>
                <p className={styles.desc}>
                    {description}
                </p>
                <ItemBtn href={link}>
                    مشاهده لیست سخنرانان
                </ItemBtn>
            </Card>
        </li>
    );
};

export default MourningItem;